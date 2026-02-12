/* --- 1. MOCK DATA (The "Database") --- */
const db = {
    characters: [
        { id: 'c1', name: 'Zero-Cool', role: 'Hacker', desc: 'Expert in bypass algorithms and stealth protocols.' },
        { id: 'c2', name: 'Viper', role: 'Enforcer', desc: 'Heavy weapons specialist. Former corporate security.' },
        { id: 'c3', name: 'Glitch', role: 'Drone Pilot', desc: 'Controls a swarm of nano-bots for surveillance.' }
    ],
    locations: [
        { id: 'l1', name: 'Sector 7 Slums', status: 'High Danger', desc: 'The lowest level of the city. Lawless zone.' },
        { id: 'l2', name: 'Neon Plaza', status: 'Safe Zone', desc: 'Commercial district controlled by the Syndicate.' }
    ]
};

/* --- 2. VIEW TEMPLATES (The "HTML Generators") --- */
const Views = {
    home: () => `
        <div class="hero">
            <h1>WELCOME TO NEON-7</h1>
            <p>Authorized personnel only. Please select a databank to browse.</p>
            <p style="margin-top: 20px; opacity: 0.7;">System Status: <span class="blink">ONLINE</span></p>
        </div>
    `,
    
    about: () => `
        <h1>SYSTEM INFO</h1>
        <p>This archive contains classified data regarding the Neon-7 conflict.</p>
        <br>
        <p><strong>Version:</strong> v2.4.0</p>
        <p><strong>Maintainer:</strong> The Resistance</p>
        <p><strong>Encryption:</strong> AES-4096 (Bypassed)</p>
    `,

    listCharacters: () => {
        const cards = db.characters.map(char => `
            <div class="card" onclick="window.router.navigateTo('/characters/${char.id}')">
                <h2>${char.name}</h2>
                <p>Role: ${char.role}</p>
                <small>Click for details >></small>
            </div>
        `).join('');
        return `<h1>OPERATIVES</h1><div class="grid-container">${cards}</div>`;
    },

    detailCharacter: (id) => {
        const char = db.characters.find(c => c.id === id);
        if (!char) return `<h1>Error</h1><p>Operative not found.</p>`;
        return `
            <h1>${char.name} // FILE</h1>
            <div class="card" style="cursor: default;">
                <h3>Class: ${char.role}</h3>
                <hr style="margin: 15px 0; border: 0; border-top: 1px dashed var(--text-color);">
                <p>${char.desc}</p>
                <br>
                <a href="/characters" class="btn" data-link> < Back to List</a>
            </div>
        `;
    },

    listLocations: () => {
        const list = db.locations.map(loc => `
            <div class="card">
                <h2>${loc.name}</h2>
                <p>Status: ${loc.status}</p>
                <p>${loc.desc}</p>
            </div>
        `).join('');
        return `<h1>SECTORS</h1><div class="grid-container">${list}</div>`;
    }
};

/* --- 3. ROUTER LOGIC (The "Engine") --- */
const app = document.getElementById('app');
const loader = document.getElementById('loading-overlay');

const routes = [
    { path: '/', view: Views.home },
    { path: '/about', view: Views.about },
    { path: '/characters', view: Views.listCharacters },
    { path: '/characters/:id', view: Views.detailCharacter }, // Dynamic route
    { path: '/locations', view: Views.listLocations }
];

// Helper to simulate network delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const router = async () => {
    // 1. Show Loading Indicator
    loader.classList.remove('hidden');
    
    // 2. Simulate network request time
    await wait(400); 

    // 3. Find matching route
    const currentPath = window.location.pathname;
    
    // Basic route matching logic
    let match = routes.find(route => route.path === currentPath);
    let viewHtml = '';

    if (match) {
        viewHtml = match.view();
    } else {
        // Handle Dynamic Routes (e.g. /characters/c1)
        const dynamicMatch = routes.find(r => r.path.includes(':id'));
        const pathParts = currentPath.split('/'); // ["", "characters", "c1"]
        
        if (dynamicMatch && pathParts[1] === 'characters' && pathParts[2]) {
            viewHtml = dynamicMatch.view(pathParts[2]);
        } else {
            viewHtml = `<h1>404</h1><p>Data fragment lost...</p>`;
        }
    }

    // 4. Inject HTML and hide loader
    app.innerHTML = viewHtml;
    loader.classList.add('hidden');
};

// Function to navigate without reloading
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

// Expose navigateTo globally so inline onclicks can use it
window.router = { navigateTo };

/* --- 4. EVENT LISTENERS --- */

// Handle Back/Forward Browser Buttons
window.addEventListener("popstate", router);

// Handle Navigation Links (Delegation)
document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

// Theme Toggler
const themeBtn = document.getElementById('theme-toggle');
let isArcade = false;

themeBtn.addEventListener('click', () => {
    isArcade = !isArcade;
    if (isArcade) {
        document.documentElement.setAttribute('data-theme', 'arcade');
        themeBtn.innerText = "Theme: ARCADE";
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.innerText = "Theme: TERMINAL";
    }
});

/* --- 5. INITIAL LOAD --- */
document.addEventListener("DOMContentLoaded", () => {
    router();
});