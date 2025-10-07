// Repository data from GitHub
const projects = [
    {
        name: "Can-SAEs-disentangle-superposed-features",
        title: "Can SAEs Disentangle Superposed Features",
        description: "Research project exploring Sparse Autoencoders and feature disentanglement in machine learning models.",
        language: "Research",
        created: "2025-09-13",
        updated: "2025-09-20",
        url: "https://github.com/Ilube-C/Can-SAEs-disentangle-superposed-features",
        topics: ["ML", "Visualisation"],
        image: "images/3d_geometry_8_3_8_s0.86_uniform.png"
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
        name: "Chess-Variant-AI",
        title: "Chess Variant AI",
        description: "Artificial intelligence system designed to play and analyze chess variants using advanced algorithms.",
        language: "Python",
        created: "2023-07-04",
        updated: "2025-06-29",
        url: "https://github.com/Ilube-C/Chess-Variant-AI",
        topics: ["AI"],
        image: "images/Chess Variant AI.webp"
    },
    {
        name: "ESGD",
        title: "Evolutionary Stochastic Gradient Descent",
        description: "An implementation and tutorial of Evolutionary Stochastic Gradient Descent optimization algorithm.",
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
        description: "Data analysis project examining student performance and academic outcomes through statistical modeling.",
        language: "Python",
        created: "2023-11-01",
        updated: "2023-11-08",
        url: "https://github.com/Ilube-C/Student-grades-data-project",
        topics: ["Visualisation"],
        image: "images/Student grades data 3d.webp"
    },
    {
        name: "Pride-and-Prejudice-NLP",
        title: "Pride and Prejudice NLP Analysis",
        description: "Natural Language Processing analysis of Jane Austen's Pride and Prejudice, exploring linguistic patterns and character interactions.",
        language: "Python",
        created: "2024-02-01",
        updated: "2024-02-01",
        url: "https://github.com/Ilube-C/Pride-and-Prejudice-NLP",
        topics: ["NLP", "Visualisation"],
        image: "images/Pride and Prejudice Sentiment.webp"
    },
    {
        name: "London-Strategic-Consulting",
        title: "London Strategic Consulting",
        description: "My contributions as a technical consultant for a client in need of content creation research",
        language: "Python",
        created: "2023-11-05",
        updated: "2023-11-12",
        url: "https://github.com/Ilube-C/London-Strategic-Consulting",
        topics: ["Consulting"],
        image: "https://raw.githubusercontent.com/Ilube-C/London-Strategic-Consulting/main/Graphs/Figure.png"
    },
    {
        name: "The-Latin-Programme-Consultancy-project",
        title: "The Latin Programme Consultancy",
        description: "Research I did for the charity I volunteer at which aims to demonstrate the positive effect studying Latin has on general academic attainment.",
        language: "Python",
        created: "2023-09-15",
        updated: "2023-09-22",
        url: "https://github.com/Ilube-C/The-Latin-Programme-Consultancy-project",
        topics: ["Consulting"],
        image: "images/Boxplot regression Latin programme.webp"
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

    container.innerHTML = html;
}

// Event listener for view selection
document.getElementById('viewSelect').addEventListener('change', (e) => {
    renderProjects(e.target.value);
});

// Initial render
renderProjects('chronological');
