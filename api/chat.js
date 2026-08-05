// Vercel Serverless Function - Chat API with GitHub Code Access

import projects from '../projects.json' with { type: 'json' };

const GITHUB_USER = 'Ilube-C';

// The repo name is derived from each project's GitHub URL rather than stored
// separately, so it cannot drift out of sync with the link the site renders.
function repoFor(project) {
    const match = project.url.match(/github\.com\/[^/]+\/([^/]+)/);
    return match ? match[1] : null;
}

// Detect which repo the question is about, using the keywords in projects.json
function detectRepo(message) {
    const lowerMessage = message.toLowerCase();
    for (const project of projects) {
        if ((project.keywords || []).some(kw => lowerMessage.includes(kw))) {
            return repoFor(project);
        }
    }
    return null;
}

// Fetch file list from GitHub repo
async function fetchRepoFiles(repo) {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_USER}/${repo}/contents/`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'Portfolio-Chat-Bot'
                }
            }
        );
        if (!response.ok) return [];
        return await response.json();
    } catch (error) {
        console.error('Error fetching repo files:', error);
        return [];
    }
}

// Fetch a specific file's content from an absolute raw URL
async function fetchFileContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        return await response.text();
    } catch (error) {
        console.error('Error fetching file:', error);
        return null;
    }
}

// Get main code files from a repo (Python files, notebooks, JS)
async function getRepoCode(repo) {
    const files = await fetchRepoFiles(repo);
    if (!files.length) return null;

    const codeFiles = files.filter(f =>
        f.name.endsWith('.py') ||
        f.name.endsWith('.ipynb') ||
        f.name.endsWith('.js') ||
        f.name === 'README.md'
    ).slice(0, 3);

    const codeContents = [];
    for (const file of codeFiles) {
        const content = await fetchFileContent(file.download_url);
        if (content) {
            // Truncate very long files
            const truncated = content.length > 8000
                ? content.substring(0, 8000) + '\n... (truncated)'
                : content;
            codeContents.push(`\n--- ${file.name} ---\n${truncated}`);
        }
    }

    return codeContents.length > 0 ? codeContents.join('\n') : null;
}

// The project list handed to the model is built from the same projects.json
// the site renders, so a newly added tile is automatically something the bot
// knows about. Previously this was a second hardcoded list that drifted.
// Topics are included in square brackets: without them the model inferred
// categories from prose and got them wrong - reading "Chess Variant AI" and
// "AI progress at games" as machine learning, while missing ESGD entirely.
const projectList = projects
    .map(p => `- ${p.title} [${p.topics.join(', ')}]: ${p.description}${p.details ? ' ' + p.details : ''}`)
    .join('\n');

// Call Gemini API
async function callGemini(prompt, apiKey) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    // Thinking tokens are drawn from maxOutputTokens. At the old
                    // 1024 cap, reasoning consumed the whole budget and answers
                    // were cut off mid-word (finishReason: MAX_TOKENS).
                    maxOutputTokens: 4096,
                    thinkingConfig: { thinkingLevel: 'low' },
                }
            })
        }
    );

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Gemini API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
}

// Main handler
export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, history = [] } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        // Detect if question is about a specific project
        const repo = detectRepo(message);
        let codeContext = '';

        // Fetch code if question seems to be about implementation
        const codeKeywords = ['code', 'implement', 'how does', 'how is', 'function', 'class', 'algorithm', 'work', 'built', 'structure', 'architecture'];
        const isCodeQuestion = codeKeywords.some(kw => message.toLowerCase().includes(kw));

        if (repo && isCodeQuestion) {
            const code = await getRepoCode(repo);
            if (code) {
                codeContext = `\n\nHere is the actual code from the ${repo} repository:\n${code}\n`;
            }
        }

        // Build the prompt (projectList is derived from projects.json above)
        const systemPrompt = `You are a helpful assistant on Ilube-C's portfolio website. You help visitors learn about the projects showcased here. Be concise, friendly, and informative.

IMPORTANT: Only discuss the following projects that are actually in this portfolio. Do not make up or reference any other projects:

${projectList}

The tags in square brackets are the author's own categorisation and are authoritative. When asked which projects fall into a category or use a particular technique, go by these tags rather than inferring from the descriptions, and list every project carrying the tag. "AI" and "ML" are separate tags and are not interchangeable: classical search methods such as minimax, and analyses of AI progress, are tagged AI and do not use machine learning.

The tags are internal metadata. Use them to decide what to say, but never print them, quote them, or mention "tags" in your reply - write naturally, as though you simply know which projects are which.

When answering questions about code implementation, refer to the actual code provided when available. Explain the code clearly and highlight interesting implementation details.

${codeContext}

Keep responses brief and focused. Only reference projects from the list above.`;

        const conversationHistory = history.map(msg =>
            `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
        ).join('\n');

        const fullPrompt = `${systemPrompt}\n\nConversation:\n${conversationHistory}\nUser: ${message}\n\nAssistant:`;

        const response = await callGemini(fullPrompt, apiKey);

        return res.status(200).json({
            response,
            codeIncluded: !!codeContext
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({
            error: 'Failed to process chat message',
            details: error.message
        });
    }
}
