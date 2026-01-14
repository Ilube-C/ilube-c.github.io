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
renderProjects('chronological');
