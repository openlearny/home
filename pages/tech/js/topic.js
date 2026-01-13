/* =========================================
   1. DATA SELECTION LOGIC
   ========================================= */

// Get the 'course' parameter from the URL (e.g., ?course=html)
const urlParams = new URLSearchParams(window.location.search);
const courseParam = urlParams.get('course');

// Handle case where no course is selected
if (!courseParam) {
    document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:50px;'>No Topic selected. Please select a Topic from the learn.</h2>";
    throw new Error("No course parameter in URL");
}

// Normalize the key (User types 'html', we need 'HTML' to match JSON key)
const courseKey = courseParam.toUpperCase();

// Select the specific course data from data.js
const topics = data[courseKey];

// Verify data exists
if (!topics) {
    document.body.innerHTML = `<h2 style='color:white; text-align:center; margin-top:50px;'>Topic "${courseKey}" not found.</h2>`;
    throw new Error("Course key not found in data object");
}

/* =========================================
   2. INITIALIZATION & FLATTENING
   ========================================= */

// Flatten data logic...
const allTopics = [];
Object.values(topics).forEach(categoryTopics => {
    allTopics.push(...categoryTopics);
});

// Select DOM elements
const sidebarNav = document.querySelector(".sidebar-nav");
const article = document.getElementById("doc-article");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// --- NEW CODE STARTS HERE ---
const sidebarTitle = document.querySelector(".sidebar-header h3"); // Select the H3
if (sidebarTitle) {
    sidebarTitle.textContent = `${courseKey} Basics`; // Updates text to "HTML Basics" or "CSS Basics"
}
// --- NEW CODE ENDS HERE ---

let sidebar_Links = []; 
let currentIndex = 0;
/* =========================================
   3. RENDER SIDEBAR
   ========================================= */

function renderSidebar() {
    sidebarNav.innerHTML = ""; // Clear existing content

    // Iterate over the categories (Introduction, Core Concepts, etc.)
    Object.keys(topics).forEach(category => {
        // Create the group container
        const groupDiv = document.createElement("div");
        groupDiv.className = "nav-group";

        // Create the Category Header (h4)
        const title = document.createElement("h4");
        title.textContent = category;
        groupDiv.appendChild(title);

        // Iterate over the topics in this category
        topics[category].forEach(topic => {
            const link = document.createElement("a");
            link.textContent = topic.title;
            link.href = `#${topic.id}`;

            // Find the global index of this topic in our flattened array
            const globalIndex = allTopics.findIndex(t => t.id === topic.id);

            link.addEventListener("click", (e) => {
                loadTopic(globalIndex);
            });

            groupDiv.appendChild(link);
        });

        sidebarNav.appendChild(groupDiv);
    });

    // Update global reference to links for highlighting logic
    sidebar_Links = document.querySelectorAll(".sidebar-nav a");
}

/* =========================================
   4. TOPIC LOADING LOGIC
   ========================================= */

function loadTopic(index) {
    // Safety check
    if (index < 0 || index >= allTopics.length) return;

    currentIndex = index;
    const topic = allTopics[index];

    // 1. Render Content
    article.innerHTML = topic.content;
    
    // 2. Add Copy Buttons to new content
    addCopyButtons();

    // 3. Button Visibility Logic
    prevBtn.style.display = index === 0 ? "none" : "";
    nextBtn.style.display = index === allTopics.length - 1 ? "none" : "";

    // 4. Update URL Hash
    if (history.pushState) {
        history.replaceState(null, null, `#${topic.id}`);
    } else {
        location.hash = `#${topic.id}`;
    }

    // 5. Update Sidebar Highlight
    setActiveLink(index);
}

function setActiveLink(index) {
    sidebar_Links.forEach(l => l.classList.remove("active"));
    if (sidebar_Links[index]) {
        sidebar_Links[index].classList.add("active");
    }
}

/* =========================================
   5. NAVIGATION HANDLERS
   ========================================= */

prevBtn.addEventListener("click", () => {
    loadTopic(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
    loadTopic(currentIndex + 1);
});

// Handle Refresh / Direct Linking
function loadFromHash() {
    const id = location.hash.replace("#", "");
    const index = allTopics.findIndex(t => t.id === id);

    // Load specific index, or default to 0 if hash not found
    loadTopic(index === -1 ? 0 : index);
}

window.addEventListener("hashchange", loadFromHash);

/* =========================================
   6. COPY BUTTON LOGIC
   ========================================= */

const copyIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>`;

const checkIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>`;

function addCopyButtons() {
    const blocks = document.querySelectorAll("#doc-article .code-block");

    blocks.forEach((block) => {
        if (block.querySelector(".copy-btn")) return;

        const button = document.createElement("button");
        button.className = "copy-btn";
        button.setAttribute("aria-label", "Copy code");

        button.innerHTML = `
        <span class="copy-icon">${copyIcon}</span>
        <span class="check-icon" style="display: none;">${checkIcon}</span>
    `;

        button.addEventListener("click", async () => {
            const pre = block.querySelector("pre");
            // Use textContent to preserve formatting but avoid HTML tags
            const code = pre.innerText; 

            try {
                await navigator.clipboard.writeText(code);

                const copySpan = button.querySelector(".copy-icon");
                const checkSpan = button.querySelector(".check-icon");

                copySpan.style.display = "none";
                checkSpan.style.display = "block";

                setTimeout(() => {
                    copySpan.style.display = "block";
                    checkSpan.style.display = "none";
                }, 2000);

            } catch (err) {
                console.error("Failed to copy!", err);
            }
        });

        block.appendChild(button);
    });
}

/* =========================================
   7. START APP
   ========================================= */

// Render the sidebar first
renderSidebar();

// Load content based on URL Hash
loadFromHash();