const topics = {
    "Introduction": [
        {
"id": "html-introduction",
"title": "HTML Introduction",
"content": `

<h1>HTML Introduction</h1>
<p class="date">Latest Update - 8 Jan 2025</p>

<p>HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines how content such as text, images, and links appears in a web browser using tags and elements.</p>

<h3>Key Points</h3>
<ul>
  <li>HTML is a markup language, not a programming language.</li>
  <li>It annotates text to define structure and layout.</li>
  <li>HTML is static by nature.</li>
  <li>For styling and interactivity, HTML is combined with CSS and JavaScript.</li>
</ul>

<h1>Basic HTML Document Structure</h1>

<p>A basic HTML document follows a fixed structure that tells the browser how to interpret and display the content.</p>

<h3>Example</h3>
<div class="code-block">
  <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Webpage&lt;/h1&gt;
    &lt;p&gt;This is my first paragraph of text!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
</div>


<ul>
  <li>&lt;!DOCTYPE html&gt; defines the HTML version.</li>
  <li>&lt;html&gt; is the root element.</li>
  <li>&lt;head&gt; contains metadata like the page title.</li>
  <li>&lt;body&gt; contains visible content.</li>
</ul>

<h1>HTML Elements and HTML Tags</h1>

<p>An HTML element is the complete structure consisting of an opening tag, content, and a closing tag.</p>
<p>An HTML tag is the keyword enclosed in angle brackets that defines the element type.</p>

<h3>Key Points</h3>
<ul>
  <li>Elements include tags + content.</li>
  <li>Tags tell the browser what kind of content to expect.</li>
  <li>Some elements may not have closing tags.</li>
</ul>

<h3>Example</h3>
<div class="code-block">
  <pre>&lt;p class=&quot;text&quot;&gt;Hello World&lt;/p&gt;</pre>
</div>
<ul>
  <li>&lt;p&gt; is the tag.</li>
  <li>Hello World is the content.</li>
  <li>The entire line is an HTML element.</li>
</ul>

<h1>How HTML Works (Step-by-Step)</h1>

<p>HTML works by being written as a file, saved with a .html extension, interpreted by a browser, and rendered into a visual webpage.</p>

<table border="1" width="100%" height="400" style="border-collapse: collapse; text-align: center;">
  <tr>
    <td colspan="2">&lt;header&gt;</td>
  </tr>
  <tr>
    <td colspan="2">&lt;nav&gt;</td>
  </tr>
  <tr>
    <td>&lt;section&gt;</td>
    <td rowspan="2">&lt;aside&gt;</td>
  </tr>
  <tr>
    <td>&lt;article&gt;</td>
  </tr>
  <tr>
    <td colspan="2">&lt;footer&gt;</td>
  </tr>
</table>

<h3>Step 1: HTML Page Structure</h3>
<ul>
  <li>HTML provides the basic structure of a webpage.</li>
  <li>&lt;!DOCTYPE html&gt; defines the version.</li>
  <li>&lt;html&gt; wraps the entire document.</li>
  <li>&lt;head&gt; contains metadata.</li>
  <li>&lt;body&gt; contains visible content.</li>
</ul>

<h3>Step 2: Saving the File</h3>
<ul>
  <li>File is saved with a .html extension.</li>
  <li>This makes it recognizable as a web file.</li>
  <li>It can be opened in any browser.</li>
</ul>

<h3>Step 3: Opening in a Browser</h3>
<ul>
  <li>Open the file in browsers like Chrome or Firefox.</li>
  <li>The browser reads and interprets HTML code.</li>
</ul>

<h3>Step 4: Rendering the Page</h3>
<ul>
  <li>Browser processes each HTML tag.</li>
  <li>Converts raw code into structured content.</li>
</ul>

<h3>Step 5: Displaying Content</h3>
<ul>
  <li>Final webpage appears on the screen.</li>
  <li>Errors in HTML affect how the page displays.</li>
</ul>

<h1>Interaction of HTML, CSS, and JavaScript</h1>

<p>HTML, CSS, and JavaScript work together to create modern web pages by separating structure, design, and behavior.</p>

<h3>Key Points</h3>
<ul>
  <li>HTML defines structure.</li>
  <li>CSS controls appearance.</li>
  <li>JavaScript adds interactivity.</li>
  <li>Together, they create user-friendly web pages.</li>
</ul>

<h3>Analogy</h3>
<ul>
  <li>HTML → Car frame (structure)</li>
  <li>CSS → Paint and design (style)</li>
  <li>JavaScript → Engine (behavior)</li>
</ul>

<h1>Example: HTML + CSS + JavaScript</h1>

<div class="code-block">
  <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;HTML, CSS and JS Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h2&gt;Welcome to My Webpage&lt;/h2&gt;
  &lt;p&gt;This structure is built using HTML, styled with CSS, and made interactive with JS.&lt;/p&gt;
  &lt;button onclick=&quot;showMessage()&quot;&gt;Click Me&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
</div>


<ul>
  <li>HTML creates the structure.</li>
  <li>CSS (externally) styles the elements.</li>
  <li>JavaScript handles the button interaction.</li>
</ul>

<h1>HTML Attributes</h1>

<p>HTML attributes provide additional information about elements. They are written inside the opening tag as name=&quot;value&quot; pairs.</p>

<h3>Key Points</h3>
<ul>
  <li>Attributes are placed inside opening tags.</li>
  <li>They control behavior and appearance.</li>
  <li>An element can have multiple attributes.</li>
  <li>Values are usually enclosed in double quotes.</li>
</ul>

<h3>Example</h3>
<div class="code-block">
  <pre>&lt;a href=&quot;https://www.example.com/&quot;&gt;Visit Example&lt;/a&gt;</pre>
</div>


<ul>
  <li>href is an attribute of the &lt;a&gt; tag.</li>
  <li>It defines the destination URL of the link.</li>
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
