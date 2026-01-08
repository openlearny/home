const topics = {
    "Introduction": [
        {
            id: "what-is-js",
            title: "What is JavaScript?",
            content: `
        <h1>What is JavaScript?</h1>
        <p>JavaScript is a programming language used to make web pages interactive.</p>
        <div class="code-block">
          <pre>console.log("Hello, JavaScript!");</pre>
        </div>
      `
        },
        {
            id: "history",
            title: "History of JavaScript",
            content: `
        <h1>History of JavaScript</h1>
        <p>JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape.</p>
        <p>Originally called Mocha, then LiveScript, it was finally renamed to JavaScript.</p>
      `
        },
        {
            id: "where-used",
            title: "Where JS Runs",
            content: `
        <h1>Where JS Runs</h1>
        <p>JavaScript can run in two main environments:</p>
        <ul>
            <li><strong>Client-side:</strong> In the browser (Chrome, Firefox, Safari).</li>
            <li><strong>Server-side:</strong> Using Node.js or Deno.</li>
        </ul>
      `
        }
    ],
    "Core Concepts": [
        {
            id: "variables",
            title: "Variables",
            content: `
        <h1>Variables</h1>
        <p>Variables are containers for storing data values. In modern JavaScript, we use <code>let</code> and <code>const</code>.</p>
        <div class="code-block">
          <pre>
let name = "John";
const pi = 3.14;
          </pre>
        </div>
      `
        },
        {
            id: "datatypes",
            title: "Data Types",
            content: `
        <h1>Data Types</h1>
        <p>JavaScript variables can hold different data types:</p>
        <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Object</li>
            <li>Array</li>
        </ul>
        <div class="code-block">
          <pre>let isDone = true; // Boolean</pre>
        </div>
      `
        },
        {
            id: "operators",
            title: "Operators",
            content: `
        <h1>Operators</h1>
        <p>We use operators to perform arithmetic or logic.</p>
        <div class="code-block">
          <pre>
let sum = 10 + 5; // Addition
let isEqual = 5 === 5; // Comparison
          </pre>
        </div>
      `
        },
        {
            id: "conditions",
            title: "Conditions",
            content: `
        <h1>Conditions</h1>
        <p>Conditional statements are used to perform different actions based on different conditions.</p>
        <div class="code-block">
          <pre>
if (hour < 18) {
  greeting = "Good day";
}          </pre>
        </div>
      `
        }
    ],
    "Functions": [
        {
            id: "functions",
            title: "Functions",
            content: `
        <h1>Functions</h1>
        <p>A function is a block of code designed to perform a particular task.</p>
        <div class="code-block">
          <pre>
function greet(name) {
  return "Hello " + name;
}          </pre>
        </div>
      `
        },
        {
            id: "arrow",
            title: "Arrow Functions",
            content: `
        <h1>Arrow Functions</h1>
        <p>Arrow functions allow for a shorter syntax for writing function expressions.</p>
        <div class="code-block">
          <pre>const add = (a, b) => a + b;</pre>
        </div>
      `
        },
        {
            id: "scope",
            title: "Scope",
            content: `
        <h1>Scope</h1>
        <p>Scope determines the accessibility (visibility) of variables.</p>
        <ul>
            <li><strong>Global Scope:</strong> Accessible everywhere.</li>
            <li><strong>Block Scope:</strong> Accessible only inside the block (inside <code>{}</code>).</li>
        </ul>
      `
        }
    ]
};

// 1. FLATTEN DATA: Create a single array of all topics for easy navigation (Next/Prev)
const allTopics = [];
Object.values(topics).forEach(categoryTopics => {
    allTopics.push(...categoryTopics);
});

// Select DOM elements
const sidebarNav = document.querySelector(".sidebar-nav");
const article = document.getElementById("doc-article");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 2. RENDER SIDEBAR: Generate headers and links based on the grouping
function renderSidebar() {
    sidebarNav.innerHTML = ""; // Clear existing content

    // Iterate over the keys (Introduction, Core Concepts, etc.)
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
                // Optional: prevent default if you want to handle scrolling manually, 
                // but usually default behavior is fine for hash updates.
                loadTopic(globalIndex);
            });

            groupDiv.appendChild(link);
        });

        sidebarNav.appendChild(groupDiv);
    });
}

// Initial render of the sidebar
renderSidebar();

// Select the newly created links for styling updates
const sidebar_Links = document.querySelectorAll(".sidebar-nav a");

let currentIndex = 0;

// 3. LOAD TOPIC LOGIC (Updated to use allTopics)
function loadTopic(index) {
    // Safety check to ensure index is valid
    if (index < 0 || index >= allTopics.length) return;

    currentIndex = index;
    const topic = allTopics[index];

    // 1. Render Content
    article.innerHTML = topic.content;
    // --- NEW: Call the function to add buttons after HTML is inserted ---
    addCopyButtons();
    // 2. Button Visibility Logic
    // If first item, hide Prev button. Otherwise, reset display (show it).
    if (index === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = ""; // Reverts to your CSS default (e.g., inline-block or flex)
    }

    // If last item, hide Next button. Otherwise, reset display (show it).
    if (index === allTopics.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = ""; // Reverts to your CSS default
    }

    // 3. Update URL Hash
    if (history.pushState) {
        history.replaceState(null, null, `#${topic.id}`);
    } else {
        location.hash = `#${topic.id}`;
    }

    // 4. Update Sidebar Highlight
    setActiveLink(index);
}

function setActiveLink(index) {
    sidebar_Links.forEach(l => l.classList.remove("active"));
    // Add active class to the link corresponding to the current index
    if (sidebar_Links[index]) {
        sidebar_Links[index].classList.add("active");
    }
}

// 4. BUTTON EVENT LISTENERS
prevBtn.addEventListener("click", () => {
    loadTopic(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
    loadTopic(currentIndex + 1);
});

// 5. HANDLE REFRESH / DIRECT LINKING
function loadFromHash() {
    const id = location.hash.replace("#", "");
    const index = allTopics.findIndex(t => t.id === id);

    // Load specific index, or default to 0 if hash not found
    loadTopic(index === -1 ? 0 : index);
}

window.addEventListener("hashchange", loadFromHash);
// Store SVGs as strings so you don't clutter your HTML data

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
  // Select all code blocks inside the article
  const blocks = document.querySelectorAll("#doc-article .code-block");

  blocks.forEach((block) => {
    // 1. Check if button already exists to prevent duplicates
    if (block.querySelector(".copy-btn")) return;

    // 2. Create the button element
    const button = document.createElement("button");
    button.className = "copy-btn";
    button.setAttribute("aria-label", "Copy code");
    
    // 3. Inject the SVGs (Default: Show Copy, Hide Check)
    button.innerHTML = `
        <span class="copy-icon">${copyIcon}</span>
        <span class="check-icon" style="display: none;">${checkIcon}</span>
    `;

    // 4. Add Click Event for Copying
    button.addEventListener("click", async () => {
      const pre = block.querySelector("pre");
      const code = pre.innerText;

      try {
        // Copy to clipboard
        await navigator.clipboard.writeText(code);

        // Toggle Icons
        const copySpan = button.querySelector(".copy-icon");
        const checkSpan = button.querySelector(".check-icon");

        copySpan.style.display = "none";
        checkSpan.style.display = "block";

        // Revert back after 2 seconds
        setTimeout(() => {
          copySpan.style.display = "block";
          checkSpan.style.display = "none";
        }, 2000);

      } catch (err) {
        console.error("Failed to copy!", err);
      }
    });

    // 5. Append button to the code block
    block.appendChild(button);
  });
}
// Initial Load
loadFromHash();
