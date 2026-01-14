// Repository data from GitHub
const projects = [
    {
        name: "Options-Pricing-Model",
        title: "Options Pricing Model",
        description: "Implementation of a binomial tree model for options pricing, visualising option values across different steps and moves.",
        language: "Python",
        created: "2026-01-13",
        updated: "2026-01-13",
        url: "https://github.com/Ilube-C/Cox-Ross-Rubenstein-options-pricing-model",
        topics: ["ML", "Visualisation"],
        image: "images/options_pricing.png"
    },
    {
        name: "Can-SAEs-disentangle-superposed-features",
        title: "Can SAEs Disentangle Superposed Features",
        description: "Toy models experiment to analyse the validity of Anthropic's approach to interpreting an LLM and deepen our understanding of superposition in neural networks",
        language: "Research",
        created: "2025-09-13",
        updated: "2025-09-20",
        url: "https://github.com/Ilube-C/Can-SAEs-disentangle-superposed-features",
        topics: ["ML", "Visualisation"],
        image: "images/3d_geometry_8_3_8_s0.86_uniform.png"
    },
    {
        name: "Pride-and-Prejudice-NLP",
        title: "Pride and Prejudice NLP Analysis",
        description: "NER followed by change in sentiment by character visualised with stochastic denoising on Jane Austen's Pride and Prejudice.",
        language: "Python",
        created: "2024-02-01",
        updated: "2024-02-01",
        url: "https://github.com/Ilube-C/Sentiment-of-main-characters-throughout-pride-and-prejudice",
        topics: ["NLP", "Visualisation"],
        image: "images/Pride and Prejudice Sentiment.webp"
    },
    {
        name: "agenticenv",
        title: "Agentic Environment",
        description: "Testing an agentic environment with CrewAI - exploring multi-agent AI systems.",
        language: "Python",
        created: "2025-07-21",
        updated: "2025-07-21",
        url: "https://github.com/Ilube-C/agenticenv",
        topics: ["AI"],
        image: "🤖"
    },
    {
        name: "ESGD",
        title: "Evolutionary Stochastic Gradient Descent",
        description: "Implementation, tutorial and mathematical framing of Evolutionary Stochastic Gradient Descent optimization algorithm from ESGD Neurips",
        language: "Jupyter Notebook",
        created: "2025-06-29",
        updated: "2025-06-29",
        url: "https://github.com/Ilube-C/ESGD",
        topics: ["ML"],
        image: "images/ESGD.png"
    },
    {
        name: "Student-grades-data-project",
        title: "Student Grades Data Project",
        description: "Data analysis project examining the fairness and authenticity of different grading strategies",
        language: "Python",
        created: "2023-11-01",
        updated: "2023-11-08",
        url: "https://github.com/Ilube-C/Student-grades-data-project",
        topics: ["Visualisation"],
        image: "images/Student grades data 3d.webp"
    },
    {
        name: "Model-Complexity-Class-Imbalance",
        title: "How is model complexity affected by class imbalance?",
        description: "Study exploring how different classification architectures [Covariance, Log Reg, MLP] handle variation in class imbalance across train and test data.",
        language: "Python",
        created: "2024-11-01",
        updated: "2024-11-01",
        url: "https://github.com/Ilube-C/Model-Complexity-Class-Imbalance",
        topics: ["ML"],
        image: "images/graph.png"
    },
    {
        name: "The-Latin-Programme-Consultancy-project",
        title: "The Latin Programme Consultancy",
        description: "Research to demonstrate the positive effect studying Latin has on general academic attainment",
        language: "Python",
        created: "2023-09-15",
        updated: "2023-09-22",
        url: "https://github.com/Ilube-C/The-Latin-Programme-Consultancy-project",
        topics: ["Consulting"],
        image: "images/Boxplot regression Latin programme.webp"
    },
    {
        name: "London-Strategic-Consulting",
        title: "London Strategic Consulting",
        description: "Analyzing profitability of content creation to inform the acquisition strategy of a client.",
        language: "Python",
        created: "2023-11-05",
        updated: "2023-11-12",
        url: "https://github.com/Ilube-C/London-Strategic-Consulting",
        topics: ["Consulting"],
        image: "https://raw.githubusercontent.com/Ilube-C/London-Strategic-Consulting/main/Graphs/Figure.png"
    },
    {
        name: "Decline-of-the-Roman-Senate-with-NLP",
        title: "Decline of the Roman Senate with NLP",
        description: "Using NLP to build evidence for the decline in power of the Roman Senate during the Augustan Principate.",
        language: "Python",
        created: "2024-10-15",
        updated: "2024-10-18",
        url: "https://github.com/Ilube-C/Decline-of-the-Roman-Senate-with-NLP",
        topics: ["NLP"],
        image: "images/Senate Decline.webp"
    },
    {
        name: "Sentiment-Analysis-Visualisation",
        title: "Sentiment Analysis Visualisation",
        description: "A visualisation tool I made for a project investigating the change in sentiment of music lyrics over time",
        language: "Python",
        created: "2024-03-20",
        updated: "2024-03-20",
        url: "https://github.com/Ilube-C/Sentiment-Analysis-Visualisation",
        topics: ["NLP", "Visualisation"],
        image: "images/sentiment viz.webp"
    },
    {
        name: "Predicting-HLMI-with-GTC",
        title: "Predicting HLMI with Game Theory Complexity",
        description: "By observing the trend over time of AI surpassing peak human performance at games of increasing Game Tree Complexity, I try to predict when Human Level Machine Intelligence will be achieved.",
        language: "Python",
        created: "2024-01-10",
        updated: "2024-01-15",
        url: "https://github.com/Ilube-C/Predicting-HLMI-with-GTC",
        topics: ["AI"],
        image: "images/GTC.webp"
    },
    {
        name: "Chess-Variant-AI",
        title: "Chess Variant AI",
        description: "Started as A-level project allowing users to create and play their own chess variants, since then have added a general AI that can play any user defined variant (custom heuristics, min-max with alpha-beta pruning)",
        language: "Python",
        created: "2023-07-04",
        updated: "2025-06-29",
        url: "https://github.com/Ilube-C/Chess-Variant-AI",
        topics: ["AI"],
        image: "images/Chess Variant AI.webp"
    }
];

// Group projects by topics
function groupByTopics(projects) {
    const groups = {};

    projects.forEach(project => {
        project.topics.forEach(topic => {
            if (!groups[topic]) {
                groups[topic] = [];
            }
            groups[topic].push(project);
        });
    });

    return groups;
}

// Create project card HTML
function createProjectCard(project) {
    const imageContent = (project.image.startsWith('http') || project.image.startsWith('images/'))
        ? `<img src="${project.image}" alt="${project.title}">`
        : project.image;

    return `
        <div class="project-card">
            <div class="project-image">
                ${imageContent}
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                ${project.language ? `<span class="language-tag">${project.language}</span>` : ''}
                <span class="date-tag">Created: ${new Date(project.created).toLocaleDateString()}</span>
                <span class="date-tag">Updated: ${new Date(project.updated).toLocaleDateString()}</span>
            </div>
            <a href="${project.url}" target="_blank" class="project-link">View on GitHub →</a>
        </div>
    `;
}

// Render projects
function renderProjects(viewType) {
    const container = document.getElementById('projectsContainer');
    let html = '';

    if (viewType === 'chronological') {
        html = '<div class="projects-grid">' + projects.map(createProjectCard).join('') + '</div>';
    }
    else if (viewType === 'topics') {
        const topicOrder = ['NLP', 'ML', 'AI', 'Visualisation', 'Consulting'];
        const groups = groupByTopics(projects);
        topicOrder.forEach(topic => {
            if (groups[topic]) {
                html += `
                    <div class="topic-group">
                        <h2>${topic}</h2>
                        <div class="projects-grid">
                            ${groups[topic].map(createProjectCard).join('')}
                        </div>
                    </div>
                `;
            }
        });
    }
    else if (viewType === 'custom') {
        const customOrder = [
            'Options-Pricing-Model',
            'Can-SAEs-disentangle-superposed-features',
            'Pride-and-Prejudice-NLP',
            'ESGD',
            'Student-grades-data-project',
            'Chess-Variant-AI'
        ];
        const priorityProjects = customOrder
            .map(name => projects.find(p => p.name === name))
            .filter(p => p);
        const remainingProjects = projects.filter(p => !customOrder.includes(p.name));
        const orderedProjects = [...priorityProjects, ...remainingProjects];
        html = '<div class="projects-grid">' + orderedProjects.map(createProjectCard).join('') + '</div>';
    }

    container.innerHTML = html;
}

// Event listener for view selection
document.getElementById('viewSelect').addEventListener('change', (e) => {
    renderProjects(e.target.value);
});

// Initial render
renderProjects('custom');

// ============================================
// Chat Sidebar Functionality
// ============================================

// API key loaded from config.js (not committed to repo)
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${window.GEMINI_API_KEY || ''}`;

let chatHistory = [];
let isWaitingForResponse = false;

// Generate system prompt with project context
function getSystemPrompt() {
    const projectSummaries = projects.map(p =>
        `- "${p.title}": ${p.description} (Topics: ${p.topics.join(', ')}, Language: ${p.language})`
    ).join('\n');

    return `You are a helpful assistant on Ilube-C's portfolio website. You help visitors learn about the projects showcased here. Be concise, friendly, and informative. Here are the projects in this portfolio:

${projectSummaries}

Answer questions about these projects based on the information provided. If asked about something not related to these projects, politely redirect the conversation back to the portfolio. Keep responses brief and focused.`;
}

// Toggle chat sidebar
function toggleChat() {
    const sidebar = document.getElementById('chatSidebar');
    const toggleBtn = document.querySelector('.chat-toggle-btn');

    sidebar.classList.toggle('open');
    toggleBtn.classList.toggle('active');
}

// Add message to chat
function addMessage(text, isUser) {
    const messagesContainer = document.getElementById('chatMessages');
    const suggestions = document.getElementById('chatSuggestions');
    const welcome = document.querySelector('.chat-welcome');

    // Hide welcome and suggestions after first message
    if (welcome) welcome.style.display = 'none';
    if (suggestions) suggestions.style.display = 'none';

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'assistant'}`;
    messageDiv.textContent = text;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message typing';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// Call Gemini API
async function callGeminiAPI(userMessage) {
    chatHistory.push({ role: 'user', content: userMessage });

    // Build conversation context
    const conversationContext = chatHistory.map(msg =>
        `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
    ).join('\n');

    const fullPrompt = `${getSystemPrompt()}\n\nConversation so far:\n${conversationContext}\n\nRespond to the user's last message concisely:`;

    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: fullPrompt
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        const assistantMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';

        chatHistory.push({ role: 'assistant', content: assistantMessage });
        return assistantMessage;

    } catch (error) {
        console.error('Gemini API error:', error);
        return 'Sorry, there was an error connecting to the chat service. Please try again.';
    }
}

// Send chat message
async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const sendBtn = document.querySelector('.chat-send-btn');
    const message = input.value.trim();

    if (!message || isWaitingForResponse) return;

    // Clear input and disable
    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;
    isWaitingForResponse = true;

    // Add user message
    addMessage(message, true);

    // Show typing indicator
    showTypingIndicator();

    // Get response from Gemini
    const response = await callGeminiAPI(message);

    // Hide typing and show response
    hideTypingIndicator();
    addMessage(response, false);

    // Re-enable input
    input.disabled = false;
    sendBtn.disabled = false;
    isWaitingForResponse = false;
    input.focus();
}

// Handle Enter key in chat input
function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Send suggestion as message
function sendSuggestion(btn) {
    const input = document.getElementById('chatInput');
    input.value = btn.textContent;
    sendChatMessage();
}
