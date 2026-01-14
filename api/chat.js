// Vercel Serverless Function - Chat API with GitHub Code Access

const GITHUB_USER = 'Ilube-C';

// Project metadata with repo mappings
const projectRepos = {
    'options pricing': 'Cox-Ross-Rubenstein-options-pricing-model',
    'sae': 'Can-SAEs-disentangle-superposed-features',
    'superposition': 'Can-SAEs-disentangle-superposed-features',
    'interpretability': 'Can-SAEs-disentangle-superposed-features',
    'pride and prejudice': 'Sentiment-of-main-characters-throughout-pride-and-prejudice',
    'nlp': 'Sentiment-of-main-characters-throughout-pride-and-prejudice',
    'sentiment': 'Sentiment-of-main-characters-throughout-pride-and-prejudice',
    'crewai': 'agenticenv',
    'agentic': 'agenticenv',
    'esgd': 'ESGD',
    'gradient descent': 'ESGD',
    'student grades': 'Student-grades-data-project',
    'grading': 'Student-grades-data-project',
    'class imbalance': 'Model-Complexity-Class-Imbalance',
    'model complexity': 'Model-Complexity-Class-Imbalance',
    'latin': 'The-Latin-Programme-Consultancy-project',
    'latin programme': 'The-Latin-Programme-Consultancy-project',
    'london strategic': 'London-Strategic-Consulting',
    'consulting': 'London-Strategic-Consulting',
    'roman senate': 'Decline-of-the-Roman-Senate-with-NLP',
    'senate': 'Decline-of-the-Roman-Senate-with-NLP',
    'sentiment visualisation': 'Sentiment-Analysis-Visualisation',
    'music lyrics': 'Sentiment-Analysis-Visualisation',
    'hlmi': 'Predicting-HLMI-with-GTC',
    'game tree': 'Predicting-HLMI-with-GTC',
    'chess': 'Chess-Variant-AI',
    'chess variant': 'Chess-Variant-AI',
};

// Detect which repo the question is about
function detectRepo(message) {
    const lowerMessage = message.toLowerCase();
    for (const [keyword, repo] of Object.entries(projectRepos)) {
        if (lowerMessage.includes(keyword)) {
            return repo;
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

// Fetch a specific file's content
async function fetchFileContent(repo, path) {
    try {
        const response = await fetch(
            `https://raw.githubusercontent.com/${GITHUB_USER}/${repo}/main/${path}`
        );
        if (!response.ok) return null;
        return await response.text();
    } catch (error) {
        console.error('Error fetching file:', error);
        return null;
    }
}

// Get main code files from a repo (Python files, notebooks)
async function getRepoCode(repo) {
    const files = await fetchRepoFiles(repo);
    if (!files.length) return null;

    // Find Python files or Jupyter notebooks
    const codeFiles = files.filter(f =>
        f.name.endsWith('.py') ||
        f.name.endsWith('.ipynb') ||
        f.name === 'README.md'
    ).slice(0, 3); // Limit to 3 files to avoid token limits

    const codeContents = [];
    for (const file of codeFiles) {
        const content = await fetchFileContent(repo, file.name);
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

// Project details (same as frontend)
const projectDetails = {
    'Cox-Ross-Rubenstein-options-pricing-model': 'Uses the Cox-Ross-Rubinstein (CRR) binomial tree model to price European and American options.',
    'Can-SAEs-disentangle-superposed-features': 'Investigates Sparse Autoencoders (SAEs) as a mechanistic interpretability tool following Anthropic\'s research.',
    'Sentiment-of-main-characters-throughout-pride-and-prejudice': 'Applies Named Entity Recognition (NER) to identify character mentions and track sentiment evolution.',
    'agenticenv': 'Experiments with CrewAI framework for building multi-agent AI systems.',
    'ESGD': 'Implements the ESGD algorithm from NeurIPS research combining evolutionary strategies with SGD.',
    'Student-grades-data-project': 'Analyzes student grade distributions to evaluate different grading strategies.',
    'Model-Complexity-Class-Imbalance': 'Studies how different classification architectures handle class imbalance.',
    'The-Latin-Programme-Consultancy-project': 'Consultancy project analyzing whether Latin instruction improves academic outcomes.',
    'London-Strategic-Consulting': 'Consulting engagement analyzing content creator economics.',
    'Decline-of-the-Roman-Senate-with-NLP': 'Applies NLP to ancient Roman texts to quantify Senate\'s declining influence.',
    'Sentiment-Analysis-Visualisation': 'Interactive visualization tool for exploring sentiment trends in music lyrics.',
    'Predicting-HLMI-with-GTC': 'Analyzes AI progress at games to predict Human Level Machine Intelligence.',
    'Chess-Variant-AI': 'Board is an 8x8 2D array. AI uses minimax with alpha-beta pruning. Custom pieces defined via coordinate offsets.',
};

// Call Gemini API
async function callGemini(prompt, apiKey) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024,
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

        // Build the prompt
        const systemPrompt = `You are a helpful assistant on Ilube-C's portfolio website. You help visitors learn about the projects showcased here. Be concise, friendly, and informative.

When answering questions about code implementation, refer to the actual code provided when available. Explain the code clearly and highlight interesting implementation details.

${codeContext}

Keep responses brief and focused. If you reference specific code, mention the file name.`;

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
