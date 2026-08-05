// Project data lives in projects.json - the single source of truth, shared
// with the chat backend (api/chat.js). Add new projects there, not here, or
// the site and the chat bot will disagree about what exists.
let projects = [];

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
        const sorted = [...projects].sort((a, b) => new Date(b.updated) - new Date(a.updated));
        html = '<div class="projects-grid">' + sorted.map(createProjectCard).join('') + '</div>';
    }
    else if (viewType === 'topics') {
        // Any topic missing from this list renders nowhere - keep it in sync
        // with the topics used in projects.json.
        const topicOrder = ['ML', 'AI', 'NLP', 'Statistics', 'Finance', 'Visualisation', 'Web', 'Consulting'];
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
            'netzero-map-agent',
            'Options-Pricing-Model',
            'Can-SAEs-disentangle-superposed-features',
            'Pride-and-Prejudice-NLP',
            'ESGD',
            'Model-Complexity-Class-Imbalance',
            'persona_experiments',
            'coinsoft',
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

// Load the shared project data, then do the initial render.
async function init() {
    try {
        const response = await fetch('projects.json?v=39');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        projects = await response.json();
    } catch (error) {
        console.error('Could not load projects.json:', error);
        document.getElementById('projectsContainer').innerHTML =
            '<p class="load-error">Could not load projects. Please refresh the page.</p>';
        return;
    }

    renderProjects(document.getElementById('viewSelect').value);
}

init();

// ============================================
// Chat Sidebar Functionality
// ============================================

// The Gemini API key is held server-side by the Vercel function
// (process.env.GEMINI_API_KEY) and is deliberately never shipped to the browser.

let chatHistory = [];
let isWaitingForResponse = false;

// Toggle chat sidebar
function toggleChat() {
    const sidebar = document.getElementById('chatSidebar');
    const toggleBtn = document.querySelector('.chat-toggle-btn');
    const backdrop = document.getElementById('chatBackdrop');

    sidebar.classList.toggle('open');
    toggleBtn.classList.toggle('active');
    backdrop.classList.toggle('visible');
}

// Render the small subset of Markdown that Gemini actually emits.
//
// HTML is escaped BEFORE any tags are introduced, so markup in the model's
// reply is inert and this cannot become an XSS vector. Only the tags built
// below can ever reach the DOM - do not reorder these steps.
function renderMarkdown(text) {
    const escapeHtml = str => str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Bold before italic, so ** isn't consumed by the single-* rule.
    const inline = str => escapeHtml(str)
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');

    const blocks = [];
    let listItems = null;

    for (const line of text.split('\n')) {
        const bullet = line.match(/^\s*[*-]\s+(.*)$/);
        if (bullet) {
            // Bullets are matched per-line before italics, so a leading "* "
            // reads as a list marker rather than an unclosed emphasis.
            (listItems = listItems || []).push(`<li>${inline(bullet[1])}</li>`);
            continue;
        }
        if (listItems) {
            blocks.push(`<ul>${listItems.join('')}</ul>`);
            listItems = null;
        }
        if (line.trim()) blocks.push(`<p>${inline(line)}</p>`);
    }
    if (listItems) blocks.push(`<ul>${listItems.join('')}</ul>`);

    return blocks.join('');
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
    // Visitor input is never rendered as markup - only model replies are.
    if (isUser) {
        messageDiv.textContent = text;
    } else {
        messageDiv.innerHTML = renderMarkdown(text);
    }

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

        // No browser-side fallback by design: a fallback would require the API
        // key in client code, where anyone can read it out of script.js.
        console.error(`Chat API returned ${response.status}`);
        chatHistory.pop(); // drop the unanswered user turn
        return 'Sorry, the chat service is unavailable right now. Please try again shortly.';

    } catch (error) {
        console.error('Chat API error:', error);
        chatHistory.pop(); // drop the unanswered user turn
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
