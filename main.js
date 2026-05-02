document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-links a, .footer-section a');

    // Simple routing
    const renderPage = (page) => {
        content.innerHTML = '';
        content.classList.remove('fade-in');
        void content.offsetWidth; // Trigger reflow
        content.classList.add('fade-in');

        switch(page) {
            case 'home':
                renderHome();
                break;
            case 'jobs':
                renderJobs();
                break;
            case 'prep':
                renderPrep();
                break;
            case 'companies':
                renderCompanies();
                break;
            case 'dsa':
                renderDSA();
                break;
            default:
                renderHome();
        }

        // Update active class
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.dataset.page === page);
        });
    };

    const renderHome = () => {
        content.innerHTML = `
            <section class="hero">
                <div class="hero-image-container">
                    <img src="hero_illustration_1777651139107.png" alt="Career Growth" class="hero-illustration">
                </div>
                <h1>Unlock Your <span>Dream Career</span></h1>
                <p>The ultimate hub for job seekers and career builders. Prepare with the best materials and land top roles at tech giants.</p>
                <div class="hero-actions">
                    <button class="btn btn-primary" onclick="window.app.renderPage('jobs')">Explore Jobs</button>
                    <button class="btn btn-secondary" onclick="window.app.renderPage('prep')">Start Preparing</button>
                </div>
            </section>
            
            <section class="grid">
                <div class="card" onclick="window.app.renderPage('jobs')">
                    <span class="card-icon">💼</span>
                    <span class="card-tag">Hiring Now</span>
                    <h3>Job Portal</h3>
                    <p>Curated listings from top-tier companies across the globe.</p>
                </div>
                <div class="card" onclick="window.app.renderPage('prep')">
                    <span class="card-icon">📚</span>
                    <span class="card-tag">Learn</span>
                    <h3>Preparation Hub</h3>
                    <p>Master Aptitude, Technical skills, and HR interviews.</p>
                </div>
                <div class="card" onclick="window.app.renderPage('dsa')">
                    <span class="card-icon">💻</span>
                    <span class="card-tag">Exclusive</span>
                    <h3>DSA Master Sheet</h3>
                    <p>Topic-wise problems curated by industry experts.</p>
                </div>
            </section>
        `;
    };

    const renderJobs = () => {
        content.innerHTML = `
            <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Latest <span>Opportunities</span></h2>
            <div class="grid">
                ${appData.jobs.map(job => `
                    <div class="card job-item">
                        <img src="tech_logos_set_1777652188169.png" class="card-image-bg" alt="">
                        <div class="job-header">
                            <div>
                                <span class="card-tag">${job.company}</span>
                                <h3>${job.title}</h3>
                                <p style="color: var(--text-muted)">${job.location} &bull; ${job.type}</p>
                            </div>
                        </div>
                        <div class="job-footer">
                            <span style="font-weight: 600; color: var(--primary)">${job.salary}</span>
                            <button class="btn btn-secondary btn-sm" onclick="window.app.showModal('Applied Successfully!', 'Your application for ${job.title} at ${job.company} has been sent.')">Apply</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    };

    const renderPrep = () => {
        content.innerHTML = `
            <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Preparation <span>Modules</span></h2>
            
            <h3 style="margin: 2rem 0 1rem;">Aptitude & Reasoning</h3>
            <div class="grid">
                ${appData.prep.aptitude.map(item => `
                    <div class="card">
                        <img src="prep_illustrations_set_1777652587636.png" class="card-image-bg" alt="">
                        <span class="card-icon">🧠</span>
                        <h3>${item.title}</h3>
                        <p>${item.problems} Practice Problems</p>
                        <span class="card-tag">${item.difficulty}</span>
                    </div>
                `).join('')}
            </div>

            <h3 style="margin: 3rem 0 1rem;">Technical & Core Subjects</h3>
            <div class="grid">
                ${appData.prep.technical.map(item => `
                    <div class="card">
                        <img src="prep_illustrations_set_1777652587636.png" class="card-image-bg" alt="">
                        <span class="card-icon">⚙️</span>
                        <h3>${item.title}</h3>
                        <p>${item.notes}</p>
                        <span class="card-tag">${item.level}</span>
                    </div>
                `).join('')}
            </div>

            <h3 style="margin: 3rem 0 1rem;">HR & Behavioral Interview</h3>
            <div class="grid">
                ${appData.prep.hr.map(item => `
                    <div class="card">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                        <button class="btn btn-secondary btn-sm" style="margin-top: 1rem;">View Details</button>
                    </div>
                `).join('')}
            </div>
        `;
    };

    const renderCompanies = () => {
        content.innerHTML = `
            <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Hiring <span>Processes</span></h2>
            <div class="grid">
                ${appData.companies.map(co => `
                    <div class="card">
                        <h3 style="color: var(--primary)">${co.name}</h3>
                        <div style="margin-top: 1rem;">
                            <h4 style="font-size: 0.9rem; color: var(--text-muted)">Pattern:</h4>
                            <p style="font-size: 0.9rem; margin-bottom: 1rem;">${co.pattern}</p>
                            
                            <h4 style="font-size: 0.9rem; color: var(--text-muted)">Eligibility:</h4>
                            <p style="font-size: 0.9rem; margin-bottom: 1rem;">${co.eligibility}</p>
                            
                            <h4 style="font-size: 0.9rem; color: var(--text-muted)">Syllabus:</h4>
                            <p style="font-size: 0.9rem;">${co.syllabus}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    };

    const renderDSA = () => {
        content.innerHTML = `
            <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">DSA <span>Master Sheet</span></h2>
            <div style="max-width: 800px; margin: 0 auto;">
                ${appData.dsaSheet.map(topic => `
                    <div style="margin-bottom: 2rem;">
                        <h3 class="topic-header">${topic.topic} <span>${topic.problems.length} Problems</span></h3>
                        <ul class="problem-list card">
                            ${topic.problems.map(p => `
                                <li class="problem-item">
                                    <span>${p.name}</span>
                                    <span class="card-tag" style="margin: 0">${p.difficulty}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    };

    // Attach listeners
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            renderPage(page);
        });
    });

    // Modal Logic
    const modalContainer = document.getElementById('modal-container');
    const showModal = (title, message) => {
        modalContainer.innerHTML = `
            <div class="modal">
                <h2>${title}</h2>
                <p>${message}</p>
                <button class="btn btn-primary" onclick="window.app.closeModal()">Awesome!</button>
            </div>
        `;
        modalContainer.classList.add('active');
    };

    const closeModal = () => {
        modalContainer.classList.remove('active');
    };

    // Google Login Mock
    const googleLogin = document.getElementById('google-login');
    googleLogin.addEventListener('click', () => {
        showModal('Signed in with Google', 'Welcome back to BNS JOBS! Your profile is now synced.');
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // Initial render
    renderPage('home');

    // Expose for internal use
    window.app = { renderPage, showModal, closeModal };
});
