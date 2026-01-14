// Repository data from GitHub
const projects = [
    {
        name: "Options-Pricing-Model",
        title: "Options Pricing Model",
        description: "Implementation of a binomial tree model for options pricing, visualising option values across different steps and moves.",
        details: "Uses the Cox-Ross-Rubinstein (CRR) binomial tree model to price European and American options. The tree is built recursively, calculating up and down movements based on volatility. Option values are computed via backward induction from expiry to present. Visualizations show the price tree structure and how option values change across different time steps and stock price movements.",
        language: "Python",
        created: "2026-01-13",
        updated: "2026-01-13",
        url: "https://github.com/Ilube-C/Cox-Ross-Rubenstein-options-pricing-model/blob/main/Cox_Ross_Rubinstein.ipynb",
        topics: ["ML", "Visualisation"],
        image: "images/options_pricing.png"
    },
    {
        name: "Can-SAEs-disentangle-superposed-features",
        title: "Can SAEs Disentangle Superposed Features",
        description: "Toy models experiment to analyse the validity of Anthropic's approach to interpreting an LLM and deepen our understanding of superposition in neural networks",
        details: "Investigates Sparse Autoencoders (SAEs) as a mechanistic interpretability tool following Anthropic's research. Creates toy models with known ground-truth features to test whether SAEs can recover individual features from superposed representations. Explores how neural networks compress more features than dimensions (superposition) and whether SAEs can disentangle them. Includes 3D visualizations of feature geometry and activation patterns.",
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
        details: "Applies Named Entity Recognition (NER) to identify character mentions throughout the novel. Performs sentiment analysis on text surrounding each character mention to track how sentiment toward characters evolves through the narrative. Uses stochastic denoising to smooth noisy sentiment signals while preserving meaningful trends. Visualizes Mr. Darcy's sentiment arc showing his transformation from villain to hero in Elizabeth's perception.",
        language: "Python",
        created: "2024-02-01",
        updated: "2024-02-01",
        url: "https://github.com/Ilube-C/Sentiment-of-main-characters-throughout-pride-and-prejudice/blob/main/NLP%20project%20denoised.ipynb",
        topics: ["NLP", "Visualisation"],
        image: "images/Pride and Prejudice Sentiment.webp"
    },
    {
        name: "ESGD",
        title: "Evolutionary Stochastic Gradient Descent",
        description: "Implementation, tutorial and mathematical framing of Evolutionary Stochastic Gradient Descent optimization algorithm from ESGD Neurips",
        details: "Implements the ESGD algorithm from NeurIPS research which combines evolutionary strategies with stochastic gradient descent. Provides mathematical derivation of the algorithm, explaining how it uses population-based search to escape local minima while maintaining gradient-based efficiency. Includes Jupyter tutorial walking through the algorithm step-by-step with visualizations of the optimization landscape.",
        language: "Jupyter Notebook",
        created: "2025-06-29",
        updated: "2025-06-29",
        url: "https://github.com/Ilube-C/ESGD/blob/main/ESGD.ipynb",
        topics: ["ML"],
        image: "images/ESGD.png"
    },
    {
        name: "Student-grades-data-project",
        title: "Student Grades Data Project",
        description: "Data analysis project examining the fairness and authenticity of different grading strategies",
        details: "Analyzes student grade distributions to evaluate different grading strategies for fairness and authenticity. Compares approaches like curve grading, absolute thresholds, and percentile-based methods. Uses 3D visualizations to show how grade distributions change under different policies. Examines whether grading methods accurately reflect student performance or introduce systematic biases.",
        language: "Python",
        created: "2023-11-01",
        updated: "2023-11-08",
        url: "https://github.com/Ilube-C/Student-grades-data-project/blob/main/Stats%20student%20grades%20project.ipynb",
        topics: ["Visualisation"],
        image: "images/Student grades data 3d.webp"
    },
    {
        name: "Model-Complexity-Class-Imbalance",
        title: "How is model complexity affected by class imbalance?",
        description: "Study exploring how different classification architectures [Covariance, Log Reg, MLP] handle variation in class imbalance across train and test data.",
        details: "Systematic study comparing how Covariance-based classifiers, Logistic Regression, and Multi-Layer Perceptrons respond to varying class imbalance ratios. Tests scenarios where train and test distributions differ in class balance. Measures how model complexity (capacity) affects robustness to imbalance. Finds that simpler models can outperform complex ones when class distributions shift between training and deployment.",
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
        details: "Consultancy project for The Latin Programme charity analyzing whether Latin instruction improves academic outcomes. Uses statistical regression analysis to control for confounding variables (socioeconomic status, prior attainment). Visualizes results with boxplots showing grade distributions for Latin vs non-Latin students. Provides evidence-based findings to support the charity's educational mission.",
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
        details: "Consulting engagement with London Strategic Consulting analyzing content creator economics. Built financial models to assess profitability across different content types and platforms. Provided data-driven recommendations for client's acquisition strategy, identifying which content creator profiles offer best ROI. Delivered insights on market trends and valuation metrics in the creator economy.",
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
        details: "Applies NLP techniques to ancient Roman texts to quantify the Senate's declining influence under Augustus. Analyzes frequency and context of Senate mentions in primary sources across different time periods. Uses sentiment analysis to detect changes in how authors portrayed senatorial authority. Provides computational evidence supporting the historical thesis that Augustus systematically diminished senatorial power while maintaining republican facades.",
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
        details: "Interactive visualization tool for exploring sentiment trends in music lyrics over decades. Processes lyrics through sentiment analysis models and aggregates scores by year/genre. Creates animated and static visualizations showing how emotional tone in popular music has evolved. Built as a reusable tool that can be applied to any text corpus for temporal sentiment analysis.",
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
        details: "Analyzes the historical progression of AI beating humans at games of increasing Game Tree Complexity (GTC) - from checkers to chess to Go. Plots GTC against the year AI achieved superhuman performance and fits trend lines. Extrapolates to estimate when AI might master tasks at human-level general complexity. Discusses limitations of using game complexity as a proxy for general intelligence.",
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
        details: "Built using Object-Oriented Programming (OOP) principles with classes for Board, Piece, and Game. The board is represented as an 8x8 2D array where each cell contains a piece object or null. Users can define custom pieces by specifying movement patterns as coordinate offsets (e.g., knight moves as [(-2,-1), (-2,1), ...])​. Custom piece values and board setups are configurable. The AI uses minimax search with alpha-beta pruning to efficiently explore the game tree. Position evaluation uses customizable heuristics based on material count, piece-square tables, and mobility. The system can play any user-defined variant without modification to the core AI logic.",
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

// API key injected during build from GitHub secret
const GEMINI_API_KEY = '__GEMINI_API_KEY__';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

let chatHistory = [];
let isWaitingForResponse = false;

// Generate system prompt with project context
function getSystemPrompt() {
    const projectSummaries = projects.map(p =>
        `- "${p.title}": ${p.description}${p.details ? `\n  Implementation: ${p.details}` : ''}\n  (Topics: ${p.topics.join(', ')}, Language: ${p.language})`
    ).join('\n\n');

    return `You are a helpful assistant on Ilube-C's portfolio website. You help visitors learn about the projects showcased here. Be concise, friendly, and informative. Here are the projects in this portfolio:

${projectSummaries}

Answer questions about these projects based on the information provided. You can discuss implementation details, technologies used, and methodologies. If asked about something not related to these projects, politely redirect the conversation back to the portfolio. Keep responses brief and focused.`;
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

// Call Chat API (Vercel backend with GitHub code access)
async function callGeminiAPI(userMessage) {
    chatHistory.push({ role: 'user', content: userMessage });

    try {
        // Try Vercel API first (has GitHub code access)
        const apiUrl = window.location.hostname.includes('vercel.app') || window.location.hostname === 'localhost'
            ? '/api/chat'
            : 'https://ilube-c-github-io.vercel.app/api/chat';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: userMessage,
                history: chatHistory.slice(0, -1) // Don't include the message we just added
            })
        });

        if (response.ok) {
            const data = await response.json();
            const assistantMessage = data.response;
            chatHistory.push({ role: 'assistant', content: assistantMessage });
            return assistantMessage;
        }

        // Fall back to direct Gemini API if Vercel API fails
        console.log('Vercel API unavailable, falling back to direct Gemini API');
        return await callGeminiDirectly(userMessage);

    } catch (error) {
        console.error('Chat API error:', error);
        // Fall back to direct Gemini API
        return await callGeminiDirectly(userMessage);
    }
}

// Direct Gemini API call (fallback)
async function callGeminiDirectly(userMessage) {
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

// Open chat sidebar by default on page load
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('chatSidebar');
    const toggleBtn = document.querySelector('.chat-toggle-btn');
    if (sidebar && toggleBtn) {
        sidebar.classList.add('open');
        toggleBtn.classList.add('active');
    }
});
