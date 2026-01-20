const data = {
    // Domain 1: Web Development
    "web-core": {
        domain: "Web Development",
        topics: {
            "HTML": {
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
            },

            "CSS": {
                "Introduction": [
                    {
                        "id": "css-introduction",
                        "title": "CSS Introduction",
                        "content": `
                            <h1>CSS Introduction</h1>
                            <p>CSS is the language we use to style an HTML document.</p>
                            <div class="code-block">
                                <pre>body {
          background-color: lightblue;
        }

        h1 {
          color: white;
          text-align: center;
        }</pre>
                            </div>
                        `
                    }
                ]
            },
            
            "JS" : {
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
            },

            "SQL" : {
            "Introduction": [
                {
                    id: "what-is-a-database",
                    title: "What is a Database?",
                    content: `

        <h1>What is a Database?</h1>
        <p>A database is an organized collection of data stored electronically so it can be easily accessed, managed, updated, and retrieved.</p>
        <p>In simple words:</p>
        <p>A database is where data lives in a structured, controlled, and searchable way instead of being scattered everywhere.</p>

        <h1>Why Do We Need Databases?</h1>

        <ol>
          <li>
            <p><strong>Files Don’t Scale, Databases Do</strong></p>
            <p>Text files, Excel sheets, and JSON files fail as data grows. They become slow, hard to manage, and error-prone. Databases are designed to handle millions or even billions of records efficiently using structured storage and indexing. Large systems cannot survive on files.</p>
          </li>
          <li>
            <p><strong>Fast Data Retrieval</strong></p>
            <p>Databases are optimized for speed. They allow complex queries such as fetching users based on time, activity, or conditions in seconds. Searching data in files requires scanning line by line, which is slow and inefficient. Speed is critical in real applications.</p>
          </li>
          <li>
            <p><strong>Data Consistency and Accuracy</strong></p>
            <p>Databases enforce strict rules like unique IDs, valid data types, and proper relationships between tables. These constraints prevent invalid or duplicate data. File-based systems do not enforce such rules, making data corruption easy. Incorrect data breaks systems.</p>
          </li>
          <li>
            <p><strong>Multi-User Access</strong></p>
            <p>Databases allow hundreds or thousands of users to read and write data simultaneously without corruption. They manage concurrency safely. Files cannot handle multiple users properly and often get corrupted. Real-world applications always have multiple users.</p>
          </li>
          <li>
            <p><strong>Security</strong></p>
            <p>Databases provide authentication and access control, defining who can read, write, or modify data. Files are easier to leak, copy, or misuse. Poor security leads to data breaches, which can destroy organizations.</p>
          </li>
          <li>
            <p><strong>Backup and Recovery</strong></p>
            <p>Databases support automatic backups and recovery mechanisms. Even if the system crashes, data can be restored. Hardware failure is unavoidable, and databases are built with this reality in mind. Files offer limited and unreliable recovery options.</p>
          </li>
          <li>
            <p><strong>Relationship Between Data</strong></p>
            <p>Databases store and manage relationships between data entities such as users, orders, and payments. This reflects real-world connections. Files store data independently and lack natural relational structure. Real-world data is interconnected.</p>
          </li>
        </ol>

        <h1>Types of Databases</h1>

        <ol>
          <li>
            <p><strong>Relational Databases (RDBMS)</strong></p>
            <p>Data is stored in tables with rows and columns. Relationships are maintained using keys, and data is accessed using SQL. These databases ensure strong consistency and are widely used in traditional applications.</p>
            <p>Examples: MySQL, PostgreSQL, Oracle Database</p>
          </li>
          <li>
            <p><strong>NoSQL Databases</strong></p>
            <p>Designed for large-scale, distributed systems. They do not follow a fixed table structure and handle unstructured or semi-structured data efficiently. Best suited for high scalability and flexibility.</p>
            <p>Examples: MongoDB, Cassandra</p>
          </li>
          <li>
            <p><strong>Hierarchical Databases</strong></p>
            <p>Data is organized in a tree-like structure where each record has a single parent. Fast for simple relationships but inflexible for complex data. Mostly outdated today.</p>
            <p>Example: IBM IMS</p>
          </li>
          <li>
            <p><strong>Network Databases</strong></p>
            <p>Data is stored using graph-like structures, allowing multiple parent-child relationships. More flexible than hierarchical databases but complex to design and manage.</p>
            <p>Example: CODASYL</p>
          </li>
          <li>
            <p><strong>Object-Oriented Databases</strong></p>
            <p>Data is stored as objects, similar to object-oriented programming concepts. Used where complex data and tight integration with programming languages are required.</p>
            <p>Example: ObjectDB</p>
          </li>
          <li>
            <p><strong>Distributed Databases</strong></p>
            <p>Data is spread across multiple physical locations but appears as a single database to users. Improves performance, availability, and fault tolerance.</p>
            <p>Example: Google Spanner</p>
          </li>
          <li>
            <p><strong>Cloud Databases</strong></p>
            <p>Databases hosted and managed on cloud platforms. They offer scalability, automatic backups, and high availability with minimal maintenance.</p>
            <p>Examples: Amazon RDS, Firebase</p>
          </li>
          <li>
            <p><strong>Graph Databases</strong></p>
            <p>Data is stored as nodes and relationships. Ideal for applications involving complex relationships like social networks and recommendation systems.</p>
            <p>Example: Neo4j</p>
          </li>
          <li>
            <p><strong>Time-Series Databases</strong></p>
            <p>Optimized for storing time-stamped data such as logs, metrics, and sensor data. Designed for fast writes and time-based queries.</p>
            <p>Example: InfluxDB</p>
          </li>
          <li>
            <p><strong>Data Warehouses</strong></p>
            <p>Used for analytical processing and reporting. They store historical data optimized for complex queries rather than transactions.</p>
            <p>Example: Amazon Redshift</p>
          </li>
        </ol>
        `
                }, {
                    id: "what-is-sql",
                    title: "What is SQL?",
                    content: `

        <h1>What is SQL?</h1>
        <p>SQL (Structured Query Language) is a standard language used to create, store, retrieve, update, and manage data in relational databases.</p>

        <h1>Key Characteristics of SQL</h1>

        <ol>
          <li>
            <p><strong>SQL works with table-based databases</strong></p>
            <p>SQL is designed for relational databases where data is stored in tables made of rows and columns. Each table represents an entity, and tables are connected using keys. SQL queries operate directly on these tables.</p>
          </li>
          <li>
            <p><strong>It follows a fixed schema</strong></p>
            <p>In SQL databases, the structure of data is defined before inserting data. Each column has a fixed data type and constraints. This ensures consistency but makes structural changes slower compared to flexible systems.</p>
          </li>
          <li>
            <p><strong>It supports transactions and ACID properties</strong></p>
            <p>SQL databases support transactions, which group multiple operations into a single unit. They follow ACID properties (Atomicity, Consistency, Isolation, Durability), ensuring data remains correct even during failures or concurrent access.</p>
          </li>
          <li>
            <p><strong>It is used in most traditional database systems</strong></p>
            <p>SQL is the industry standard and is used in banking, finance, education, enterprise systems, and government databases where reliability, accuracy, and structured data are critical.</p>
          </li>
        </ol>

        <h1>What SQL Is Used For</h1>
        <ul>
          <li>Creating databases and tables</li>
          <li>Inserting, updating, and deleting data</li>
          <li>Retrieving specific data using queries</li>
          <li>Controlling access to data</li>
          <li>Maintaining data consistency</li>
        </ul>

        <h1>SQL vs NoSQL Databases</h1>

        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>SQL Databases</th>
              <th>NoSQL Databases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Structure</td>
              <td>Structured tables (rows &amp; columns)</td>
              <td>Documents, key-value, column, graph</td>
            </tr>
            <tr>
              <td>Schema</td>
              <td>Fixed schema</td>
              <td>Dynamic / schema-less</td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>Vertical scaling</td>
              <td>Horizontal scaling</td>
            </tr>
            <tr>
              <td>Query Language</td>
              <td>SQL</td>
              <td>DB-specific</td>
            </tr>
            <tr>
              <td>Consistency</td>
              <td>Strong (ACID)</td>
              <td>Eventual (BASE)</td>
            </tr>
            <tr>
              <td>Transactions</td>
              <td>Fully supported</td>
              <td>Limited / varies</td>
            </tr>
            <tr>
              <td>Performance</td>
              <td>Best for complex queries</td>
              <td>Best for high-speed operations</td>
            </tr>
            <tr>
              <td>Relationships</td>
              <td>Joins supported</td>
              <td>App-level handling</td>
            </tr>
            <tr>
              <td>Use Cases</td>
              <td>Banking, ERP, finance</td>
              <td>Social media, IoT, big data</td>
            </tr>
            <tr>
              <td>Examples</td>
              <td>MySQL, PostgreSQL</td>
              <td>MongoDB, Cassandra</td>
            </tr>
          </tbody>
        </table>
        `
                },
                {
                    id: "table-in-sql",
                    title: "Table in SQL",
                    content: `

        <h1>Table in SQL</h1>

        <p>A table in SQL is the core unit of storage in a relational database. If you don’t understand tables, you don’t understand SQL. Period.</p>

        <h3>Straight definition</h3>
        <p>A table is a structured collection of data stored in rows and columns.</p>
        <ul>
          <li>Rows → individual records (one student, one order, one user)</li>
          <li>Columns → attributes of those records (id, name, age, price)</li>
        </ul>

        <h3>Example</h3>
        <p>STUDENTS</p>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>branch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Shobhit</td>
              <td>21</td>
              <td>CSE</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rahul</td>
              <td>22</td>
              <td>ECE</td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li>Each row = one student</li>
          <li>Each column = one property of a student</li>
        </ul>

        <h3>Important properties of a table</h3>

        <ol>
          <li>
            <p><strong>Fixed schema</strong></p>
            <ul>
              <li>You define columns and their data types before inserting data.</li>
              <li>This is strict by design, not a limitation.</li>
            </ul>
          </li>
          <li>
            <p><strong>Primary key</strong></p>
            <ul>
              <li>Uniquely identifies each row.</li>
              <li>If your table doesn’t have one, it’s poorly designed.</li>
            </ul>
          </li>
          <li>
            <p><strong>Constraints</strong></p>
            <ul>
              <li>NOT NULL, UNIQUE, CHECK, FOREIGN KEY</li>
              <li>These prevent garbage data. Databases don’t trust developers.</li>
            </ul>
          </li>
          <li>
            <p><strong>Relations</strong></p>
            <ul>
              <li>Tables connect to other tables using keys.</li>
              <li>That’s why it’s called a relational database.</li>
            </ul>
          </li>
        </ol>
        `
                }


            ],
            "SQL Statements":[
                {
        id: "what-are-sql-statements",
        title: "What are SQL Statements?",
        content: `

        <h1>What are SQL Statements?</h1>

        <p>SQL statements are commands used to interact with a database.</p>
        <p>Almost everything you do in a database—reading data, inserting data, updating data, deleting data, or changing structure—is done using SQL statements.</p>
        <p>SQL statements are made of keywords that are simple and descriptive.</p>

        <h3>Example</h3>
        <p>The following SQL statement retrieves all records from a table named Customers:</p>

        <div class="code-block">
          <pre>SELECT * FROM Customers;</pre>
        </div>

        <ul>
          <li>SELECT → specifies what to retrieve</li>
          <li>* → means all columns</li>
          <li>FROM Customers → specifies the table</li>
        </ul>

        <h3>Important Rules to Remember</h3>

        <ol>
          <li>
            <p><strong>SQL is Case-Insensitive</strong></p>
            <div class="code-block">
              <pre>select * from customers;
        SELECT * FROM CUSTOMERS;</pre>
            </div>
            <p>Both are valid and identical.</p>
            <p>Convention:</p>
            <p>SQL keywords are usually written in UPPERCASE for readability.</p>
          </li>
          <li>
            <p><strong>Semicolon (;) in SQL</strong></p>
            <ul>
              <li>Some database systems require a semicolon</li>
              <li>Semicolon is the standard separator when executing multiple SQL statements together</li>
            </ul>
            <p>Example:</p>
            <div class="code-block">
              <pre>SELECT * FROM Customers;
        SELECT * FROM Orders;</pre>
            </div>
            <p>Best practice: Always end SQL statements with ;</p>
          </li>
        </ol>
        `
        },
        {
        id: "sql-commands",
        title: "SQL Commands & Categories",
        content: `

        <h1>SQL Commands</h1>

        <p>SQL commands are grouped based on what they control: data, tables, or the database itself.</p>
        <p>SQL commands are grouped into categories based on what they control: structure, data, access, or transactions.</p>
        <p>These categories help in understanding database behavior, writing correct queries, and answering exam questions accurately.</p>

        <h3>1. DDL — Data Definition Language</h3>
        <p>DDL commands are used to define, modify, and delete the structure of database objects such as tables, databases, and indexes.</p>

        <p><strong>Key Characteristics</strong></p>
        <ul>
          <li>Works on schema and structure</li>
          <li>Changes are auto-committed</li>
          <li>Cannot be rolled back in most database systems</li>
        </ul>

        <p><strong>Common DDL Commands</strong></p>
        <ul>
          <li>CREATE – creates database objects</li>
          <li>ALTER – modifies existing objects</li>
          <li>DROP – deletes objects permanently</li>
          <li>TRUNCATE – removes all records but keeps structure</li>
        </ul>

        <h3>2. DML — Data Manipulation Language</h3>
        <p>DML commands are used to insert, update, and delete data inside database tables.</p>

        <p><strong>Key Characteristics</strong></p>
        <ul>
          <li>Works on table data</li>
          <li>Requires WHERE clause for safe operations</li>
          <li>Changes can be rolled back</li>
        </ul>

        <p><strong>Common DML Commands</strong></p>
        <ul>
          <li>INSERT – adds new records</li>
          <li>UPDATE – modifies existing records</li>
          <li>DELETE – removes records</li>
        </ul>

        <h3>3. DQL — Data Query Language</h3>
        <p>DQL commands are used to retrieve data from the database.</p>

        <p><strong>Key Characteristics</strong></p>
        <ul>
          <li>Read-only operations</li>
          <li>Does not modify data</li>
          <li>Most frequently used SQL command</li>
        </ul>

        <p><strong>Common DQL Command</strong></p>
        <ul>
          <li>SELECT</li>
        </ul>

        <h3>4. DCL — Data Control Language</h3>
        <p>DCL commands control user access and permissions to database objects.</p>

        <p><strong>Key Characteristics</strong></p>
        <ul>
          <li>Used in multi-user environments</li>
          <li>Controls security and authorization</li>
        </ul>

        <p><strong>Common DCL Commands</strong></p>
        <ul>
          <li>GRANT – gives permissions</li>
          <li>REVOKE – removes permissions</li>
        </ul>

        <h3>5. TCL — Transaction Control Language</h3>
        <p><strong>Purpose</strong></p>
        <p>TCL commands manage database transactions and ensure data consistency.</p>

        <p><strong>Key Characteristics</strong></p>
        <ul>
          <li>Used with DML commands</li>
          <li>Ensures ACID properties</li>
          <li>Helps recover from errors</li>
        </ul>

        <p><strong>Common TCL Commands</strong></p>
        <ul>
          <li>COMMIT – saves changes permanently</li>
          <li>ROLLBACK – undoes changes</li>
          <li>SAVEPOINT – sets a rollback point</li>
        </ul>

        <h3>One-Glance Summary Table</h3>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Full Form</th>
              <th>Purpose</th>
              <th>Commands</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DDL</td>
              <td>Data Definition Language</td>
              <td>Structure</td>
              <td>CREATE, ALTER, DROP, TRUNCATE</td>
            </tr>
            <tr>
              <td>DML</td>
              <td>Data Manipulation Language</td>
              <td>Data change</td>
              <td>INSERT, UPDATE, DELETE</td>
            </tr>
            <tr>
              <td>DQL</td>
              <td>Data Query Language</td>
              <td>Data retrieval</td>
              <td>SELECT</td>
            </tr>
            <tr>
              <td>DCL</td>
              <td>Data Control Language</td>
              <td>Permissions</td>
              <td>GRANT, REVOKE</td>
            </tr>
            <tr>
              <td>TCL</td>
              <td>Transaction Control Language</td>
              <td>Transactions</td>
              <td>COMMIT, ROLLBACK</td>
            </tr>
          </tbody>
        </table>
        `
        },
        {
        id: "create-sql-command",
        title: "CREATE — SQL Command",
        content: `

        <h1>CREATE — SQL Command</h1>

        <p>The CREATE command is used to create database objects.</p>
        <p>It defines the structure of objects, not the data inside them.</p>

        <h3>Database Objects Created Using CREATE</h3>
        <ul>
          <li>Database</li>
          <li>Table</li>
          <li>Index</li>
          <li>View</li>
          <li>Schema</li>
        </ul>

        <h3>1. CREATE DATABASE</h3>
        <p>Creates a new database.</p>
        <div class="code-block">
          <pre>CREATE DATABASE CollegeDB;</pre>
        </div>
        <p>To Creates a new database only if it does not already exist.

        This prevents an error when the database is already present</p>
        <div class="code-block">
          <pre>CREATE DATABASE IF NOT EXISTS DB;</pre>
        </div>
        <h3>2. CREATE TABLE</h3>
        <p>Creates a new table with specified columns and data types.</p>
        <div class="code-block">
          <pre>CREATE TABLE Students (
            id INT PRIMARY KEY,
            name VARCHAR(50),
            age INT
        );</pre>
        </div>

        <h3>3. CREATE INDEX</h3>
        <p>Creates an index to improve search performance.</p>
        <div class="code-block">
          <pre>CREATE INDEX idx_name
        ON Students(name);</pre>
        </div>

        <h3>4. CREATE VIEW</h3>
        <p>Creates a virtual table based on a query.</p>
        <div class="code-block">
          <pre>CREATE VIEW StudentView AS
        SELECT name, age FROM Students;</pre>
        </div>

        <h3>Key Characteristics of CREATE</h3>
        <ul>
          <li>Belongs to DDL</li>
          <li>Changes are auto-committed</li>
          <li>Cannot be rolled back in most databases</li>
          <li>Affects structure, not records</li>
        </ul>
        `
        },
        {
        id: "use-sql-command",
        title: "USE — SQL Command",
        content: `

        <h1>USE — SQL Command</h1>

        <p>The USE command is used to select a database so that all subsequent SQL statements are executed on that database.</p>
        <p>In simple words: it tells SQL which database to work with.</p>


        <h3>Syntax</h3>
        <div class="code-block">
          <pre>USE database_name;</pre>
        </div>

        <h3>Example</h3>
        <div class="code-block">
          <pre>USE CollegeDB;

        SELECT * FROM Students;</pre>

        </div>

        <p>Here:</p>
        <ul>
          <li>CollegeDB becomes the active database</li>
          <li>All queries after this run on CollegeDB</li>
        </ul>

        <h3>Key Characteristics</h3>
        <ul>
          <li>Works at the database level</li>
          <li>Does not create or modify data</li>
          <li>Only changes the current working database</li>
          <li>Required when multiple databases exist on the server</li>
        </ul>

        <h3>Important Points</h3>
        <ul>
          <li>USE must be executed before table operations</li>
          <li>No USE → SQL may throw “No database selected”</li>
          <li>Supported by databases like MySQL and SQL Server</li>
        </ul>
        `
        },
        {
        id: "drop-sql-command",
        title: "DROP — SQL Command",
        content: `

        <h1>DROP — SQL Command</h1>

        <p>The DROP command is used to permanently delete database objects.</p>
        <p>It removes:</p>
        <ul>
          <li>the structure</li>
          <li>the data</li>
          <li>all related metadata</li>
        </ul>
        <p>There is no undo in most databases.</p>

        <h3>Database Objects That Can Be Dropped</h3>
        <ul>
          <li>Database</li>
          <li>Table</li>
          <li>View</li>
          <li>Index</li>
          <li>Schema</li>
        </ul>

        <h3>1. DROP DATABASE</h3>
        <p>Deletes an entire database.</p>
        <div class="code-block">
          <pre>DROP DATABASE CollegeDB;</pre>
        </div>
        <p>⚠️ Deletes all tables, data, and objects inside the database.</p>
        <div class="code-block">
          <pre>DROP DATABASE IF EXISTS db;</pre>
        </div>
        <p>Deletes a database only if it exists.

        This prevents an error when the database is not present.</p>
        <h3>2. DROP TABLE</h3>
        <p>Deletes a table completely.</p>
        <div class="code-block">
          <pre>DROP TABLE Students;</pre>
        </div>
        <p>Both table structure and data are lost.</p>

        <h3>3. DROP INDEX</h3>
        <p>Deletes an index.</p>
        <div class="code-block">
          <pre>DROP INDEX idx_name;</pre>
        </div>

        <h3>4. DROP VIEW</h3>
        <p>Deletes a view.</p>
        <div class="code-block">
          <pre>DROP VIEW StudentView;</pre>
        </div>

        <h3>Key Characteristics</h3>
        <ul>
          <li>Belongs to DDL</li>
          <li>Auto-committed</li>
          <li>Cannot be rolled back in most DBMS</li>
          <li>Deletes objects permanently</li>
        </ul>

        <h3>DROP vs DELETE vs TRUNCATE (Exam Favorite)</h3>

        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Deletes Structure</th>
              <th>Deletes Data</th>
              <th>Rollback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DROP</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>❌ No</td>
            </tr>
            <tr>
              <td>TRUNCATE</td>
              <td>No</td>
              <td>Yes (all)</td>
              <td>❌ No</td>
            </tr>
            <tr>
              <td>DELETE</td>
              <td>No</td>
              <td>Yes (selected)</td>
              <td>✅ Yes</td>
            </tr>
          </tbody>
        </table>
        `
        },
        {
        id: "insert-sql-command",
        title: "INSERT — SQL Command",
        content: `

        <h1>INSERT — SQL Command</h1>

        <p>The INSERT command is used to add new records (rows) into a table.</p>
        <p>It only affects data, not table structure.</p>

        <h3>Basic Syntax</h3>
        <div class="code-block">
          <pre>INSERT INTO table_name (column1, column2, ...)
        VALUES (value1, value2, ...);</pre>
        </div>

        <h3>Example</h3>
        <div class="code-block">
          <pre>INSERT INTO Students (id, name, age)
        VALUES (1, 'Shobhit', 21);</pre>
        </div>

        <p>This adds one new row to the Students table.</p>

        <h3>Insert Without Column Names</h3>
        <div class="code-block">
          <pre>INSERT INTO Students
        VALUES (2, 'Rahul', 22);</pre>
        </div>
        <p>⚠️ Values must match the exact column order.</p>

        <h3>Insert Multiple Rows</h3>
        <div class="code-block">
          <pre>INSERT INTO Students (id, name, age)
        VALUES
        (3, 'Amit', 20),
        (4, 'Neha', 21);</pre>
        </div>

        <h3>Final Table: Students</h3>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Shobhit</td>
              <td>21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rahul</td>
              <td>22</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Amit</td>
              <td>20</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Neha</td>
              <td>21</td>
            </tr>
          </tbody>
        </table>

        <h3>Key Characteristics</h3>
        <ul>
          <li>Belongs to DML</li>
          <li>Modifies table data</li>
          <li>Can be rolled back before COMMIT</li>
          <li>Must follow data types and constraints</li>
        </ul>

        <h3>Important Rules</h3>
        <ul>
          <li>Violating constraints (PRIMARY KEY, NOT NULL) causes errors</li>
          <li>Missing required columns causes failure</li>
          <li>Safer to always specify column names</li>
        </ul>
        `
        },
        {
        id: "show-sql-command",
        title: "SHOW — SQL Command",
        content: `

        <h1>SHOW — SQL Command</h1>

        <p>The SHOW command is used to display database metadata, such as databases, tables, columns, indexes, and server information.</p>
        <p>It is used for inspection, not for modifying data or structure.</p>

        <h3>1. Show all databases</h3>
        <div class="code-block">
          <pre>SHOW DATABASES;</pre>
        </div>

        <h3>2. Show all tables in the current database</h3>
        <div class="code-block">
          <pre>SHOW TABLES;</pre>
        </div>

        <h3>3. Show table structure</h3>
        <div class="code-block">
          <pre>SHOW COLUMNS FROM Students;</pre>
        </div>
        <p>or</p>
        <div class="code-block">
          <pre>DESCRIBE Students;</pre>
        </div>

        <h3>4. Show indexes of a table</h3>
        <div class="code-block">
          <pre>SHOW INDEX FROM Students;</pre>
        </div>

        <h3>Key Characteristics</h3>
        <ul>
          <li>Read-only command</li>
          <li>Does not change data or structure</li>
          <li>Useful for understanding schema</li>
          <li>MySQL-specific (not portable to all DBMS)</li>
        </ul>

        <h3>Important Points</h3>
        <ul>
          <li>SHOW is not ANSI-standard SQL</li>
          <li>Used mainly in MySQL</li>
          <li>Alternatives in standard SQL:</li>
        </ul>
        <ul>
          <li>INFORMATION_SCHEMA</li>
          <li>DESCRIBE (DB-specific)</li>
        </ul>
        `
        },
        {
        id: "data-types-in-sql",
        title: "Data Types in SQL",
        content: `

        <h1>Data Types in SQL</h1>

        <p>Data types define what kind of data a column can store.</p>
        <p>They exist to prevent garbage data, save memory, and optimize performance.</p>
        <p>If you misuse data types, your database becomes slow, buggy, and unreliable.</p>

        <h3>1. Numeric Data Types</h3>
        <p>Used to store numbers.</p>

        <p><strong>Integer Types</strong></p>
        <ul>
          <li>INT → whole numbers</li>
          <li>SMALLINT → smaller range integers</li>
          <li>BIGINT → very large integers</li>
        </ul>
        <div class="code-block">
          <pre>age INT;</pre>
        </div>

        <p><strong>Decimal / Floating Types</strong></p>
        <ul>
          <li>DECIMAL(p, s) / NUMERIC(p, s) → exact values (money)</li>
          <li>FLOAT → approximate values</li>
          <li>DOUBLE → larger floating-point numbers</li>
        </ul>
        <div class="code-block">
          <pre>salary DECIMAL(10,2);</pre>
        </div>

        <p><strong>Rule:</strong></p>
        <ul>
          <li>Money → DECIMAL</li>
          <li>Measurements → FLOAT</li>
        </ul>

        <h3>2. Character / String Data Types</h3>
        <p>Used to store text.</p>
        <ul>
          <li>CHAR(n) → fixed-length string</li>
          <li>VARCHAR(n) → variable-length string</li>
          <li>TEXT → long text</li>
        </ul>
        <div class="code-block">
          <pre>name VARCHAR(50);</pre>
        </div>

        <p><strong>Reality check:</strong></p>
        <ul>
          <li>CHAR wastes space</li>
          <li>VARCHAR is what you’ll use 90% of the time</li>
        </ul>

        <h3>3. Date and Time Data Types</h3>
        <p>Used to store dates and timestamps.</p>
        <ul>
          <li>DATE → YYYY-MM-DD</li>
          <li>TIME → HH:MM:SS</li>
          <li>DATETIME → date + time</li>
          <li>TIMESTAMP → date + time (with timezone handling)</li>
        </ul>
        <div class="code-block">
          <pre>created_at TIMESTAMP;</pre>
        </div>

        <h3>4. Boolean Data Type</h3>
        <p>Used for true/false values.</p>
        <ul>
          <li>BOOLEAN / BOOL</li>
          <li>Stored as TRUE/FALSE or 1/0</li>
        </ul>
        <div class="code-block">
          <pre>is_active BOOLEAN;</pre>
        </div>

        <h3>5. Binary Data Types</h3>
        <p>Used to store files or raw data.</p>
        <ul>
          <li>BINARY</li>
          <li>VARBINARY</li>
          <li>BLOB → images, videos, PDFs</li>
        </ul>
        <div class="code-block">
          <pre>profile_pic BLOB;</pre>
        </div>

        <p><strong>Brutal truth:</strong></p>
        <p>Storing large files in DB is often a bad idea. Use file storage instead.</p>

        <h3>6. Special / Advanced Data Types (DB-specific)</h3>
        <ul>
          <li>ENUM → fixed set of values</li>
          <li>SET → multiple predefined values</li>
          <li>JSON → structured JSON data (MySQL, PostgreSQL)</li>
        </ul>
        <div class="code-block">
          <pre>status ENUM('active', 'inactive');</pre>
        </div>

        <h3>Summary Table</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Data Types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Numeric</td>
              <td>INT, SMALLINT, BIGINT, DECIMAL, FLOAT</td>
            </tr>
            <tr>
              <td>String</td>
              <td>CHAR, VARCHAR, TEXT</td>
            </tr>
            <tr>
              <td>Date/Time</td>
              <td>DATE, TIME, DATETIME, TIMESTAMP</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>BOOLEAN</td>
            </tr>
            <tr>
              <td>Binary</td>
              <td>BINARY, VARBINARY, BLOB</td>
            </tr>
            <tr>
              <td>Special</td>
              <td>ENUM, JSON</td>
            </tr>
          </tbody>
        </table>
        `
        },
        {
        id: "constraints-in-sql",
        title: "What are Constraints in SQL?",
        content: `

        <h1>What are Constraints in SQL?</h1>

        <p>Constraints are rules applied to table columns to control the data that can be stored in a database.</p>
        <p>They exist to prevent invalid, duplicate, or inconsistent data.</p>
        <p>In short: constraints protect data integrity.</p>

        <h3>Why Constraints Matter</h3>
        <p>Without constraints:</p>
        <ul>
          <li>Duplicate data spreads</li>
          <li>Invalid values enter tables</li>
          <li>Relationships break</li>
          <li>Applications fail silently</li>
        </ul>
        <p>A database without constraints is just an Excel sheet with a server.</p>

        <h3>Types of SQL Constraints</h3>

        <h3>1. PRIMARY KEY</h3>
        <ul>
          <li>Uniquely identifies each row</li>
          <li>Cannot be NULL</li>
          <li>Only one per table</li>
        </ul>
        <div class="code-block">
          <pre>id INT PRIMARY KEY;</pre>
        </div>

        <h3>2. FOREIGN KEY</h3>
        <ul>
          <li>Links one table to another</li>
          <li>Maintains referential integrity</li>
        </ul>
        <div class="code-block">
          <pre>FOREIGN KEY (dept_id) REFERENCES Department(id);</pre>
        </div>

        <h3>3. UNIQUE</h3>
        <ul>
          <li>Ensures all values in a column are different</li>
          <li>Allows one NULL (DB-dependent)</li>
        </ul>
        <div class="code-block">
          <pre>email VARCHAR(100) UNIQUE;</pre>
        </div>

        <h3>4. NOT NULL</h3>
        <ul>
          <li>Prevents NULL values</li>
        </ul>
        <div class="code-block">
          <pre>name VARCHAR(50) NOT NULL;</pre>
        </div>

        <h3>5. CHECK</h3>
        <ul>
          <li>Ensures values meet a condition</li>
        </ul>
        <div class="code-block">
          <pre>age INT CHECK (age &gt;= 18);</pre>
        </div>

        <h3>6. DEFAULT</h3>
        <ul>
          <li>Assigns a default value if none is provided</li>
        </ul>
        <div class="code-block">
          <pre>status VARCHAR(10) DEFAULT 'active';</pre>
        </div>

        <h3>Constraints Example (Complete Table)</h3>
        <div class="code-block">
          <pre>CREATE TABLE Students (
            id INT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(100) UNIQUE,
            age INT CHECK (age &gt;= 18),
            status VARCHAR(10) DEFAULT 'active'
        );</pre>
        </div>

        <h3>Key Characteristics</h3>
        <ul>
          <li>Enforced by the database, not the application</li>
          <li>Improve data quality</li>
          <li>Reduce bugs and invalid states</li>
          <li>Essential for multi-user systems</li>
        </ul>
        `
        },
        {
        id: "select-sql-command",
        title: "SELECT — SQL Command",
        content: `

        <h1>SELECT — SQL Command</h1>

        <p>The SELECT command is used to retrieve data from one or more tables in a database.</p>
        <p>It does not modify data — it only reads it.</p>

        <h3>Basic Syntax</h3>
        <div class="code-block">
          <pre>SELECT column1, column2, ...
        FROM table_name;</pre>
        </div>

        <p>To select all columns:</p>
        <div class="code-block">
          <pre>SELECT * FROM table_name;</pre>
        </div>

        <h3>Example</h3>
        <div class="code-block">
          <pre>SELECT name, age
        FROM Students;</pre>
        </div>
        <p>This retrieves only the name and age columns from the Students table.</p>

        <h3>Common SELECT Clauses</h3>

        <p><strong>WHERE – Filter records</strong></p>
        <div class="code-block">
          <pre>SELECT * FROM Students
        WHERE age &gt; 20;</pre>
        </div>

        <p><strong>DISTINCT – Remove duplicates</strong></p>
        <div class="code-block">
          <pre>SELECT DISTINCT city
        FROM Students;</pre>
        </div>

        <p><strong>ORDER BY – Sort results</strong></p>
        <div class="code-block">
          <pre>SELECT * FROM Students
        ORDER BY age DESC;</pre>
        </div>

        <p><strong>LIMIT – Restrict number of rows</strong></p>
        <div class="code-block">
          <pre>SELECT * FROM Students
        LIMIT 5;</pre>
        </div>

        <h3>Aggregate Functions (Used with SELECT)</h3>
        <ul>
          <li>COUNT()</li>
          <li>SUM()</li>
          <li>AVG()</li>
          <li>MIN()</li>
          <li>MAX()</li>
        </ul>

        <div class="code-block">
          <pre>SELECT COUNT(*) FROM Students;</pre>
        </div>

        <h3>GROUP BY – Group rows</h3>
        <div class="code-block">
          <pre>SELECT age, COUNT(*)
        FROM Students
        GROUP BY age;</pre>
        </div>

        <h3>HAVING – Filter groups</h3>
        <div class="code-block">
          <pre>SELECT age, COUNT(*)
        FROM Students
        GROUP BY age
        HAVING COUNT(*) &gt; 1;</pre>
        </div>

        <h3>Key Characteristics</h3>
        <ul>
          <li>Read-only operation</li>
          <li>Can retrieve data from multiple tables (JOINs)</li>
          <li>Most frequently used SQL command</li>
          <li>Core of reporting and analytics</li>
        </ul>

        <h3>SELECT vs INSERT / UPDATE / DELETE</h3>
        <table>
          <thead>
            <tr>
              <th>SELECT</th>
              <th>INSERT / UPDATE / DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reads data</td>
              <td>Modifies data</td>
            </tr>
            <tr>
              <td>Safe</td>
              <td>Risky</td>
            </tr>
            <tr>
              <td>No rollback needed</td>
              <td>Rollback required</td>
            </tr>
          </tbody>
        </table>
        `
        }

            ]
            }
        }
    },

    // Domain 2: DSA
    "dsa": {
        domain: "Data Structures",
        topics: {
            "SORTING ALGORITHMS":{
              "Introduction":[
                {
id: "sorting-algorithms",
title: "Sorting Algorithms",
content: `

<h1>Sorting Algorithms</h1>
<p>Sorting algorithms are procedures used to rearrange elements of a data structure (array/list) in a specific order, usually ascending or descending, based on a comparison key.</p>

<h3>Why sorting matters:</h3>
<ul>
  <li>Enables binary search</li>
  <li>Improves data readability</li>
  <li>Critical for efficient algorithms (scheduling, greedy, interval problems)</li>
  <li>Many problems are unsolvable or inefficient without sorting</li>
</ul>

<h3>List of All Major Sorting Algorithms</h3>

<h3>Comparison-Based Sorting</h3>
<ol>
  <li>Bubble Sort</li>
  <li>Selection Sort</li>
  <li>Insertion Sort</li>
  <li>Merge Sort</li>
  <li>Quick Sort</li>
  <li>Heap Sort</li>
</ol>

<h3>Non-Comparison-Based Sorting</h3>
<ol start="7">
  <li>Counting Sort</li>
  <li>Radix Sort</li>
  <li>Bucket Sort</li>
</ol>

<h3>Comparison Table</h3>
<table>
  <thead>
    <tr>
      <th>Algorithm</th>
      <th>Best Time</th>
      <th>Average Time</th>
      <th>Worst Time</th>
      <th>Space</th>
      <th>Stable</th>
      <th>In-place</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bubble Sort</td>
      <td>O(n)</td>
      <td>O(n²)</td>
      <td>O(n²)</td>
      <td>O(1)</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Selection Sort</td>
      <td>O(n²)</td>
      <td>O(n²)</td>
      <td>O(n²)</td>
      <td>O(1)</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Insertion Sort</td>
      <td>O(n)</td>
      <td>O(n²)</td>
      <td>O(n²)</td>
      <td>O(1)</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Merge Sort</td>
      <td>O(n log n)</td>
      <td>O(n log n)</td>
      <td>O(n log n)</td>
      <td>O(n)</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Quick Sort</td>
      <td>O(n log n)</td>
      <td>O(n log n)</td>
      <td>O(n²)</td>
      <td>O(log n)</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Heap Sort</td>
      <td>O(n log n)</td>
      <td>O(n log n)</td>
      <td>O(n log n)</td>
      <td>O(1)</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Counting Sort</td>
      <td>O(n+k)</td>
      <td>O(n+k)</td>
      <td>O(n+k)</td>
      <td>O(k)</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Radix Sort</td>
      <td>O(d(n+k))</td>
      <td>O(d(n+k))</td>
      <td>O(d(n+k))</td>
      <td>O(n+k)</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Bucket Sort</td>
      <td>O(n+k)</td>
      <td>O(n+k)</td>
      <td>O(n²)</td>
      <td>O(n)</td>
      <td>Depends</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

<h3>1. Bubble Sort</h3>
<ul>
  <li>Repeatedly swap adjacent elements if they are in wrong order</li>
  <li>Largest element “bubbles” to the end</li>
  <li>Adaptive (best case O(n) with swap flag)</li>
</ul>
<p>Reality check:</p>
<p>Used only for teaching. Using it in real systems is stupid.</p>

<h3>2. Selection Sort</h3>
<ul>
  <li>Select minimum element and place it at correct position</li>
  <li>Number of swaps is minimal</li>
</ul>
<p>Key point:</p>
<p>Not stable. Time complexity is always O(n²), no matter what.</p>

<h3>3. Insertion Sort</h3>
<ul>
  <li>Insert each element into its correct position in sorted part</li>
  <li>Works like sorting playing cards</li>
</ul>
<p>When it shines:</p>
<ul>
  <li>Nearly sorted arrays</li>
  <li>Small input sizes</li>
</ul>

<h3>4. Merge Sort</h3>
<ul>
  <li>Divide array into halves</li>
  <li>Sort each half recursively</li>
  <li>Merge sorted halves</li>
</ul>
<p>Strengths:</p>
<ul>
  <li>Guaranteed O(n log n)</li>
  <li>Stable</li>
</ul>
<p>Weakness:</p>
<p>Extra memory usage</p>

<h3>5. Quick Sort</h3>
<ul>
  <li>Choose a pivot</li>
  <li>Partition elements around pivot</li>
  <li>Recursively sort partitions</li>
</ul>
<p>Truth most people miss:</p>
<ul>
  <li>Fast in practice</li>
  <li>Worst case happens with bad pivot selection</li>
</ul>
<p>Used internally in many standard libraries (with safeguards).</p>

<h3>6. Heap Sort</h3>
<ul>
  <li>Build a max heap</li>
  <li>Repeatedly extract maximum</li>
</ul>
<p>Key traits:</p>
<ul>
  <li>In-place</li>
  <li>No worst-case degradation</li>
</ul>
<p>Downside:</p>
<p>Not stable and slower than Quick Sort in practice.</p>

<h3>7. Counting Sort</h3>
<ul>
  <li>Count frequency of each element</li>
  <li>Prefix sum to place elements</li>
</ul>
<p>Condition:</p>
<p>Works only when range of elements is small</p>
<p>No comparisons → not comparison-based.</p>

<h3>8. Radix Sort</h3>
<ul>
  <li>Sort digit by digit (LSD or MSD)</li>
  <li>Uses Counting Sort internally</li>
</ul>
<p>Used when:</p>
<ul>
  <li>Sorting integers or fixed-length strings</li>
</ul>

<h3>9. Bucket Sort</h3>
<ul>
  <li>Distribute elements into buckets</li>
  <li>Sort each bucket individually</li>
</ul>
<p>Works best when:</p>
<ul>
  <li>Data is uniformly distributed</li>
</ul>
<p>Worst case can degrade badly.</p>
`
}


              ]
            },

            "SEARCHING ALGORITHMS":{
              "Introduction":[
                {
id: "searching-algorithms",
title: "Searching Algorithms",
content: `

<h1>Searching Algorithms</h1>
<p>Searching algorithms are techniques used to locate a target element (key) in a data structure such as an array, list, or file, and return its position or existence.</p>
<p>Searching is not about finding only — it’s about finding efficiently under given constraints (sorted/unsorted, size, access type).</p>

<h3>List of Searching Algorithms</h3>

<h3>Basic Searching</h3>
<ol>
  <li>Linear Search</li>
  <li>Binary Search</li>
</ol>

<h3>Advanced / Special-Case Searching</h3>
<ol start="3">
  <li>Jump Search</li>
  <li>Interpolation Search</li>
  <li>Exponential Search</li>
  <li>Fibonacci Search</li>
</ol>

<h3>Non-Comparison / Direct Access</h3>
<ol start="7">
  <li>Hashing (Hash Table Search)</li>
</ol>

<h3>Comparison Table of Searching Algorithms</h3>
<table>
  <thead>
    <tr>
      <th>Algorithm</th>
      <th>Data Must Be Sorted</th>
      <th>Best Time</th>
      <th>Average Time</th>
      <th>Worst Time</th>
      <th>Space</th>
      <th>Practical Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Linear Search</td>
      <td>❌</td>
      <td>O(1)</td>
      <td>O(n)</td>
      <td>O(n)</td>
      <td>O(1)</td>
      <td>✔ (small data)</td>
    </tr>
    <tr>
      <td>Binary Search</td>
      <td>✅</td>
      <td>O(1)</td>
      <td>O(log n)</td>
      <td>O(log n)</td>
      <td>O(1)</td>
      <td>✔✔✔</td>
    </tr>
    <tr>
      <td>Jump Search</td>
      <td>✅</td>
      <td>O(√n)</td>
      <td>O(√n)</td>
      <td>O(√n)</td>
      <td>O(1)</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Interpolation Search</td>
      <td>✅</td>
      <td>O(log log n)</td>
      <td>O(log log n)</td>
      <td>O(n)</td>
      <td>O(1)</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Exponential Search</td>
      <td>✅</td>
      <td>O(1)</td>
      <td>O(log n)</td>
      <td>O(log n)</td>
      <td>O(1)</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Fibonacci Search</td>
      <td>✅</td>
      <td>O(log n)</td>
      <td>O(log n)</td>
      <td>O(log n)</td>
      <td>O(1)</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Hashing</td>
      <td>❌</td>
      <td>O(1)</td>
      <td>O(1)</td>
      <td>O(n)</td>
      <td>O(n)</td>
      <td>✔✔</td>
    </tr>
  </tbody>
</table>

<h3>1. Linear Search</h3>
<ul>
  <li>Check elements one by one</li>
  <li>No sorting required</li>
  <li>Works on arrays and linked lists</li>
</ul>
<p>Only acceptable for small or unsorted data.</p>

<h3>2. Binary Search</h3>
<ul>
  <li>Repeatedly halves the search space</li>
  <li>Requires sorted data</li>
  <li>Uses mid element comparison</li>
</ul>
<p>Binary Search on unsorted data is logically wrong, not inefficient.</p>

<h3>3. Jump Search</h3>
<ul>
  <li>Jump ahead by fixed steps (√n)</li>
  <li>Then do linear search in that block</li>
  <li>Requires sorted data</li>
</ul>
<p>Academic algorithm. Rare in real systems.</p>

<h3>4. Interpolation Search</h3>
<ul>
  <li>Predicts position using value distribution</li>
  <li>Faster than Binary Search for uniform data</li>
</ul>
<p>Performance collapses if data isn’t uniformly distributed.</p>

<h3>5. Exponential Search</h3>
<ul>
  <li>Finds range by doubling index size</li>
  <li>Applies Binary Search in that range</li>
</ul>
<p>Used when Array size is unknown or infinite.</p>

<h3>6. Fibonacci Search</h3>
<ul>
  <li>Uses Fibonacci numbers instead of mid</li>
  <li>Reduces comparisons</li>
</ul>
<p>Mostly exam-oriented, not industry-used.</p>

<h3>7. Hashing (Hash Table Search)</h3>
<ul>
  <li>Computes index using hash function</li>
  <li>Direct access to element</li>
</ul>
<p>Trade-off:</p>
<p>Speed vs memory + collision handling.</p>
`
}

              ],
              "Linear Search":[
                {
id: "linear-search",
title: "Linear Search",
content: `

<h1>Linear Search</h1>
<p>Linear Search scans elements one by one from start to end until the target is found or the collection ends. It exists because it works on unsorted data and requires no preprocessing, at the cost of speed.</p>

<h3>When to Use:</h3>
<ul>
  <li>Data is unsorted</li>
  <li>Dataset is very small</li>
  <li>Single or very few searches</li>
  <li>Simplicity matters more than performance</li>
  <li>Data structure allows only sequential access (linked list)</li>
</ul>

<h3>Step-by-Step Logic:</h3>
<ul>
  <li>Start from index 0</li>
  <li>Compare current element with target</li>
  <li>If match found, return index</li>
  <li>Move to next element</li>
  <li>If end is reached, return not found</li>
</ul>

<h3>Example:</h3>
<p>Array: [4, 2, 9, 1], target = 9</p>
<ul>
  <li>Compare 4 → no</li>
  <li>Compare 2 → no</li>
  <li>Compare 9 → found at index 2</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(n) worst & average, O(1) best</li>
  <li>Space: O(1)</li>
</ul>

<h3>Common Pitfalls:</h3>
<ul>
  <li>Using it on large datasets blindly</li>
  <li>Forgetting worst-case cost is always O(n)</li>
  <li>Expecting early exit when target doesn’t exist</li>
  <li>Re-running linear search repeatedly instead of sorting once</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>int linearSearch(vector&lt;int&gt;&amp; arr, int target) {
    for (int i = 0; i &lt; arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}</pre>
</div>

<p>if your data is sorted and you still use linear search, you’re wasting time—yours and the CPU’s. Use it only when constraints force you to.</p>
`
},


              ],
              "Binary Search":[
                {
id: "binary-search",
title: "Binary Search",
content: `

<h1>Binary Search</h1>
<p>Binary Search is a divide-and-conquer algorithm that repeatedly halves the search space to locate a target in a sorted array. It exists to reduce search time from linear to logarithmic by exploiting order. If the data isn’t sorted, this algorithm is invalid—no exceptions.</p>

<h3>When to Use:</h3>
<ul>
  <li>Array or range is sorted (or monotonic condition holds)</li>
  <li>Random access is available (arrays, not linked lists)</li>
  <li>Constraints demand O(log n) time</li>
  <li>Problems asking for first/last occurrence, bounds, or feasibility</li>
  <li>“Minimum / maximum possible value” with a yes/no check (binary search on answer)</li>
</ul>

<h3>Step-by-Step Logic:</h3>
<ul>
  <li>Initialize low = 0, high = n − 1</li>
  <li>While low ≤ high</li>
  <li>Compute mid safely</li>
  <li>Compare mid element with target</li>
  <li>Eliminate half of the search space</li>
  <li>Repeat until found or range becomes invalid</li>
</ul>

<h3>Example:</h3>
<p>Array: [1, 3, 5, 7, 9], target = 7</p>
<ul>
  <li>mid = 5 → too small → move right</li>
  <li>mid = 7 → match → found</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1) iterative, O(log n) recursive</li>
</ul>

<h3>Common Pitfalls:</h3>
<ul>
  <li>Using it on unsorted data (logical bug, not syntax)</li>
  <li>Infinite loops due to wrong boundary updates</li>
  <li>Overflow in mid = (l + r) / 2</li>
  <li>Confusing &lt; vs &lt;= in loop condition</li>
  <li>Breaking correctness with duplicates</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>int binarySearch(vector&lt;int&gt;&amp; arr, int target) {
    int l = 0, r = arr.size() - 1;
    while (l &lt;= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] &lt; target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}</pre>
</div>

<p>binary search isn’t “easy.” Most wrong answers come from bad boundaries, not bad logic. If you can’t prove your loop invariants, you don’t understand it yet.</p>
`
},
{
id: "lower-bound-and-upper-bound",
title: "Lower Bound and Upper Bound",
content: `

<h1>Lower Bound and Upper Bound</h1>

<h2>Lower Bound</h2>
<p>Lower Bound finds the first index where the value is greater than or equal to the target in a sorted array. This is a binary-search variant used to determine insertion position without breaking order. If the array isn’t sorted, the result is meaningless.</p>

<h3>When to Use:</h3>
<ul>
  <li>Finding insertion index in sorted data</li>
  <li>Counting occurrences of an element</li>
  <li>Range-based problems</li>
  <li>Coordinate compression</li>
  <li>Any problem involving duplicates + binary search</li>
</ul>

<h3>Step-by-Step Logic:</h3>
<ul>
  <li>Initialize l = 0, r = n</li>
  <li>While l &lt; r</li>
  <li>Compute mid safely</li>
  <li>If arr[mid] &lt; target, discard left half</li>
  <li>Else, discard right half</li>
  <li>l ends at first index where arr[l] ≥ target</li>
</ul>

<h3>Example:</h3>
<p>Array: [1, 2, 2, 2, 4, 5], target = 2</p>
<ul>
  <li>mid → comparisons shrink range</li>
  <li>Final l = 1 → correct lower bound</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>Common Pitfalls:</h3>
<ul>
  <li>Using r = n - 1 instead of n</li>
  <li>Writing while (l &lt;= r) and breaking invariants</li>
  <li>Mixing &lt; and &lt;= incorrectly</li>
  <li>Assuming target must exist</li>
  <li>Applying on unsorted array</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>int lowerBound(vector&lt;int&gt;&amp; arr, int target) {
    int l = 0, r = arr.size();
    while (l &lt; r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] &lt; target)
            l = mid + 1;
        else
            r = mid;
    }
    return l;
}</pre>
</div>

<h2>Upper Bound</h2>
<p>Upper Bound finds the first index where the value is strictly greater than the target in a sorted array. It’s a binary-search variant used to skip all occurrences of the target. If the array isn’t sorted, this is logically invalid.</p>

<h3>When to Use:</h3>
<ul>
  <li>Counting frequency of an element (upper - lower)</li>
  <li>Finding insertion point after all duplicates</li>
  <li>Range queries with duplicates</li>
  <li>Coordinate compression</li>
  <li>Any “strictly greater than” boundary problem</li>
</ul>

<h3>Step-by-Step Logic:</h3>
<ul>
  <li>Initialize l = 0, r = n</li>
  <li>While l &lt; r</li>
  <li>Compute mid safely</li>
  <li>If arr[mid] &lt;= target, discard left half</li>
  <li>Else, discard right half</li>
  <li>l ends at first index where arr[l] &gt; target</li>
</ul>

<h3>Example:</h3>
<p>Array: [1, 2, 2, 2, 4, 5], target = 2</p>
<ul>
  <li>Lower Bound → 1</li>
  <li>Upper Bound → 4</li>
  <li>All 2s lie in [1, 4)</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>Common Pitfalls:</h3>
<ul>
  <li>Using &lt; target instead of &lt;= target</li>
  <li>Setting r = n - 1 and breaking correctness</li>
  <li>Writing while (l &lt;= r) and causing infinite loops</li>
  <li>Assuming returned index always exists in array</li>
  <li>Applying on unsorted data</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>int upperBound(vector&lt;int&gt;&amp; arr, int target) {
    int l = 0, r = arr.size();
    while (l &lt; r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] &lt;= target)
            l = mid + 1;
        else
            r = mid;
    }
    return l;
}</pre>
</div>
`
}

              ]
            },

            "ARRAYS PROBLEMS":{
      "Easy" : [
        {
id: "88-merge-sorted-array",
title: "88. Merge Sorted Array",
content: `

<h1>88. Merge Sorted Array</h1>
<p>Merge two sorted arrays <code>nums1</code> and <code>nums2</code> into <code>nums1</code> as one sorted array in-place.</p>

<h3>Approach (Three Pointers from Back):</h3>
<ul>
  <li>Use pointer <code>i</code> at end of valid elements in <code>nums1</code></li>
  <li>Use pointer <code>j</code> at end of <code>nums2</code></li>
  <li>Use pointer <code>k</code> at end of <code>nums1</code> buffer</li>
  <li>Place the larger of <code>nums1[i]</code> and <code>nums2[j]</code> at <code>nums1[k]</code></li>
  <li>Decrement pointers accordingly until one array is exhausted</li>
</ul>

<h3>Complexity:</h3>
<p>Time: O(n + m)</p>
<p>Space: O(1)</p>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    void merge(vector&lt;int&gt;&amp; nums1, int m, vector&lt;int&gt;&amp; nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;

    while (j &gt;= 0) {
        if (i &gt;= 0 &amp;&amp; nums1[i] &gt; nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Starts merging from the back to avoid overwriting valid data</li>
  <li>Compares current largest elements of both arrays</li>
  <li>Places the larger element at the end position</li>
  <li>Continues until all elements of <code>nums2</code> are merged</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Always merge from the back; front merge breaks data</li>
  <li>Loop condition must be <code>j &gt;= 0</code>, not <code>i &gt;= 0</code></li>
  <li>If <code>nums1</code> is empty initially, copy <code>nums2</code> directly</li>
  <li>Extra zeros in <code>nums1</code> are placeholders, not values</li>
  <li>Works only because <code>nums1</code> has enough buffer space</li>
</ul>
`
},
      ],
      "Medium":[
        {
"id": "18-4sum",
"title": "18. 4Sum",
"content": `

<h1>18. 4Sum</h1>

<p>Find all unique quadruplets in the array whose sum equals the target.</p>

<h3>Approach (Two Pointers after Sorting):</h3>
<ul>
  <li>Sort the array to enable two-pointer technique and duplicate skipping</li>
  <li>Fix first two indices i and j using nested loops</li>
  <li>Use two pointers k and l for remaining two elements</li>
  <li>Move pointers based on current sum vs target</li>
  <li>Skip duplicates at all four positions to ensure uniqueness</li>
</ul>

<h3>Complexity:</h3>
<p>Time: O(n³)</p>
<p>Space: O(1) ignoring output</p>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; fourSum(vector&lt;int&gt;&amp; nums, int target) {
        vector&lt;vector&lt;int&gt;&gt; res;
        int n = nums.size();
        sort(nums.begin(), nums.end());
        for (int i = 0; i &lt; n; i++) {
            if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) continue;
            for (int j = i + 1; j &lt; n; j++) {
                if (j &gt; i + 1 &amp;&amp; nums[j] == nums[j - 1]) continue;
                int k = j + 1, l = n - 1;
                while (k &lt; l) {
                    long long sum = (long long)nums[i] + nums[j] + nums[k] + nums[l];
                    if (sum == target) {
                        res.push_back({nums[i], nums[j], nums[k], nums[l]});
                        k++; l--;
                        while (k &lt; l &amp;&amp; nums[k] == nums[k - 1]) k++;
                        while (k &lt; l &amp;&amp; nums[l] == nums[l + 1]) l--;
                    } else if (sum &lt; target) {
                        k++;
                    } else {
                        l--;
                    }
                }
            }
        }
        return res;
    }
};</pre>
</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Sorts the array to manage duplicates and apply two pointers</li>
  <li>Uses two loops to fix the first two elements</li>
  <li>Applies two-pointer scan for the remaining pair</li>
  <li>Uses long long to avoid integer overflow</li>
  <li>Skips repeated values to avoid duplicate quadruplets</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Not skipping duplicates causes duplicate answers</li>
  <li>Using int for sum can overflow on large values</li>
  <li>j must start from i+1 and k from j+1 to avoid reuse</li>
  <li>Sorting is mandatory for correctness</li>
  <li>Early pruning is optional but not required</li>
</ul>
`
},
{
id: "56-merge-intervals",
title: "56. Merge Intervals",
content: `

<h1>56. Merge Intervals</h1>
<p>Merge all overlapping intervals and return the non-overlapping intervals covering all ranges.</p>

<h3>Approach (Sorting + Greedy Interval Merging):</h3>
<ul>
  <li>Sort intervals by starting time</li>
  <li>Initialize current interval with the first interval</li>
  <li>Compare next interval’s start with current end</li>
  <li>Merge by extending end if overlapping</li>
  <li>Push current interval when no overlap occurs</li>
  <li>Add the last interval after loop ends</li>
</ul>

<h3>Complexity:</h3>
<p>Time: O(n log n)</p>
<p>Space: O(1) ignoring output</p>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    vector&lt;vector&lt;int&gt;&gt; merge(vector&lt;vector&lt;int&gt;&gt;&amp; intervals) {
        sort(intervals.begin(), intervals.end());
        vector&lt;vector&lt;int&gt;&gt; res;

    vector&lt;int&gt; curr = intervals[0];
    for (int i = 1; i &lt; intervals.size(); i++) {
        if (intervals[i][0] &lt;= curr[1]) {
            curr[1] = max(curr[1], intervals[i][1]);
        } else {
            res.push_back(curr);
            curr = intervals[i];
        }
    }
    res.push_back(curr);
    return res;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Sorts intervals to ensure ordered processing</li>
  <li>Maintains a running merged interval</li>
  <li>Merges overlapping intervals by updating end</li>
  <li>Stores completed intervals when overlap breaks</li>
  <li>Pushes final interval after traversal</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Sorting by start time is mandatory</li>
  <li>Overlap condition is next.start &lt;= current.end</li>
  <li>Single interval input must return itself</li>
  <li>Forgetting final push causes WA</li>
  <li>Greedy works because earliest start dominates later choices</li>
</ul>
`
},
{
id: "152-maximum-product-subarray",
title: "152. Maximum Product Subarray",
content: `

<h1>152. Maximum Product Subarray</h1>
<p>Find the contiguous subarray within an array that has the largest product.</p>

<h2>Approach (Prefix–Suffix Product Scan):</h2>
<ul>
  <li>Maintain running product from left to right (prefix)</li>
  <li>Maintain running product from right to left (suffix)</li>
  <li>Reset product to 1 when it becomes zero</li>
  <li>At each index, take maximum of prefix and suffix</li>
  <li>Handles negative numbers implicitly via reverse traversal</li>
</ul>

<h3>Complexity:</h3>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int maxProduct(vector&lt;int&gt;&amp; nums) {
        int n = nums.size();
        long long prefix = 1, suffix = 1;
        int ans = INT_MIN;

    for (int i = 0; i &lt; n; i++) {
        prefix = (prefix == 0 ? 1 : prefix) * nums[i];
        suffix = (suffix == 0 ? 1 : suffix) * nums[n - 1 - i];
        ans = max(ans, (int)max(prefix, suffix));
    }
    return ans;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Traverses array once while computing prefix and suffix products</li>
  <li>Resets product when zero breaks continuity</li>
  <li>Considers both directions to handle odd negative counts</li>
  <li>Updates maximum product at every step</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Single-direction scan fails when negatives count is odd</li>
  <li>Zero must reset product, otherwise future values corrupt</li>
  <li>Prefix–suffix avoids explicit min tracking</li>
  <li>Works even when maximum subarray lies at the end</li>
  <li>INT_MIN initialization is necessary for all-negative arrays</li>
</ul>

<h2>Approach (Dynamic Programming with Max–Min Tracking):</h2>
<ul>
  <li>Track both maximum and minimum product ending at current index</li>
  <li>Negative numbers can flip max ↔ min, so store previous values</li>
  <li>Reset product tracking when encountering zero</li>
  <li>Update global maximum at each step</li>
  <li>Single pass solution</li>
</ul>

<h3>Complexity:</h3>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int maxProduct(vector&lt;int&gt;&amp; nums) {
        int maxProd = nums[0], minProd = nums[0], ans = nums[0];

    for (int i = 1; i &lt; nums.size(); i++) {
        int cur = nums[i];
        int prevMax = maxProd, prevMin = minProd;

        maxProd = max({cur, prevMax * cur, prevMin * cur});
        minProd = min({cur, prevMax * cur, prevMin * cur});

        ans = max(ans, maxProd);
    }
    return ans;
}


};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initializes max and min products with first element</li>
  <li>Stores previous max and min before updating</li>
  <li>Computes new max and min including current element</li>
  <li>Updates global answer at every index</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Tracking only max fails for negative numbers</li>
  <li>Zero breaks subarrays; logic must allow reset</li>
  <li>Initializing with nums[0] avoids extra conditions</li>
  <li>Order of updates matters; store previous values</li>
  <li>Works even when all numbers are negative</li>
</ul>
`
}

      ],
      "Hard":[
        {
id: "493-reverse-pairs",
title: "493. Reverse Pairs",
content: `

<h1>493. Reverse Pairs</h1>
<p>Count the number of pairs ((i, j)) such that (i &lt; j) and (nums[i] &gt; 2 × nums[j]).</p>

<h3>Approach (Modified Merge Sort):</h3>
<ul>
  <li>Split the array using divide-and-conquer</li>
  <li>Count reverse pairs between left and right halves before merging</li>
  <li>Use two pointers where right pointer moves monotonically</li>
  <li>Merge two sorted halves using a temporary array</li>
  <li>Maintain sorted order for higher recursion levels</li>
</ul>

<h3>Complexity:</h3>
<p>Time: O(n log n)</p>
<p>Space: O(n)</p>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int mergeSort(vector&lt;int&gt;&amp; nums, int l, int r) {
        if (l &gt;= r) return 0;


    int mid = l + (r - l) / 2;
    int cnt = mergeSort(nums, l, mid) + mergeSort(nums, mid + 1, r);

    int j = mid + 1;
    for (int i = l; i &lt;= mid; i++) {
        while (j &lt;= r &amp;&amp; (long long)nums[i] &gt; 2LL * nums[j]) j++;
        cnt += (j - (mid + 1));
    }

    vector&lt;int&gt; temp;
    int i = l;
    j = mid + 1;

    while (i &lt;= mid &amp;&amp; j &lt;= r) {
        if (nums[i] &lt;= nums[j]) temp.push_back(nums[i++]);
        else temp.push_back(nums[j++]);
    }

    while (i &lt;= mid) temp.push_back(nums[i++]);
    while (j &lt;= r) temp.push_back(nums[j++]);

    for (int k = 0; k &lt; temp.size(); k++) {
        nums[l + k] = temp[k];
    }

    return cnt;
}

int reversePairs(vector&lt;int&gt;&amp; nums) {
    return mergeSort(nums, 0, nums.size() - 1);
}


};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Recursively divides the array into sorted halves</li>
  <li>Counts valid reverse pairs using two pointers across halves</li>
  <li>Uses a temporary array to merge two sorted subarrays</li>
  <li>Copies merged result back to original array</li>
  <li>Returns accumulated count from all merge steps</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Never reset pointer j inside left loop</li>
  <li>long long is mandatory to avoid overflow</li>
  <li>Counting must happen before merging</li>
  <li>Negative values still satisfy the condition correctly</li>
  <li>Incorrect merge logic breaks future pair counts</li>
</ul>
`
},

      ]
            },

            "BINARY SEARCH PROBLEMS":{
              "Easy":[
                {
id: "704-binary-search",
title: "704. Binary Search",
content: `

<h1>704. Binary Search</h1>
<p>Search for a target value in a sorted array and return its index, or −1 if not found.</p>

<h3>Approach (Iterative Binary Search):</h3>
<ul>
  <li>Works only on a sorted array</li>
  <li>Maintain two pointers l and r defining search space</li>
  <li>Compute mid safely to avoid overflow</li>
  <li>Discard half of the array each iteration</li>
  <li>Continue until target is found or range becomes empty</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int search(vector&lt;int&gt;&amp; nums, int target) {
        int l = 0, r = nums.size() - 1;
        while (l &lt;= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] &lt; target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }
};</pre>
</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initializes search boundaries on full array</li>
  <li>Computes mid index without overflow</li>
  <li>Narrows search space based on comparison</li>
  <li>Returns index immediately when found</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Array must be sorted, no exceptions</li>
  <li>Use l &lt;= r, not l &lt; r</li>
  <li>Mid calculation (l + r) / 2 can overflow</li>
  <li>Works for single-element arrays</li>
  <li>Returns −1 when target doesn’t exist</li>
</ul>

<p>binary search is simple only on paper. Most wrong answers come from bad boundaries, not bad logic. If you mess up l, r, or mid, the algorithm collapses.</p>
`
},
{
id: "35-search-insert-position",
title: "35. Search Insert Position",
content: `

<h1>35. Search Insert Position</h1>
<p>Find the index where the target should be inserted in a sorted array to maintain order.</p>

<h3>Approach (Binary Search – Lower Bound):</h3>
<ul>
  <li>Array is already sorted</li>
  <li>Maintain search space with l and r</li>
  <li>Look for first position where value ≥ target</li>
  <li>Shrink right when mid ≥ target</li>
  <li>Final l is the insertion index</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int searchInsert(vector&lt;int&gt;&amp; nums, int target) {
        int l = 0, r = nums.size() - 1;
        while (l &lt;= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] &gt;= target)
                r = mid - 1;
            else
                l = mid + 1;
        }
        return l;
    }
};</pre>
</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Uses binary search to locate lower bound</li>
  <li>Moves right boundary when mid can be an answer</li>
  <li>Moves left boundary when mid is too small</li>
  <li>Returns l as the correct insert position</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>This is lower_bound, not plain binary search</li>
  <li>Returning l works even if target is larger than all elements</li>
  <li>Works for empty insertion at beginning or end</li>
  <li>Using nums[mid] == target special-case is unnecessary</li>
  <li>Most mistakes come from returning r instead of l</li>
</ul>
`
}


              ],
              "Medium":[
                {
id: "34-find-first-and-last-position-of-element-in-sorted-array",
title: "34. Find First and Last Position of Element in Sorted Array",
content: `

<h1>34. Find First and Last Position of Element in Sorted Array</h1>
<p>Find the starting and ending position of a given target value in a sorted array.</p>

<h3>Approach (Binary Search – Lower & Upper Bound):</h3>
<ul>
  <li>Use binary search to find first occurrence (lower bound)</li>
  <li>Use binary search to find position just after last occurrence (upper bound)</li>
  <li>Validate if target exists at lower bound</li>
  <li>Compute last index as <code>upper − 1</code></li>
  <li>Avoid linear scan completely</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    vector&lt;int&gt; searchRange(vector&lt;int&gt;&amp; nums, int target) {
        int n = nums.size();
        int l = 0, r = n - 1, first = -1, last = -1;

    // Find first occurrence
    while (l &lt;= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] &gt;= target) r = mid - 1;
        else l = mid + 1;
    }
    if (l == n || nums[l] != target) return {-1, -1};
    first = l;

    // Find last occurrence
    l = 0; r = n - 1;
    while (l &lt;= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] &lt;= target) l = mid + 1;
        else r = mid - 1;
    }
    last = r;

    return {first, last};
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>First binary search finds the leftmost target index</li>
  <li>Second binary search finds rightmost target index</li>
  <li>Checks existence before computing range</li>
  <li>Returns both indices in one pass logic</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>This is pure lower_bound + upper_bound logic</li>
  <li>If target doesn’t exist, return <code>[-1, -1]</code></li>
  <li>Do not expand linearly after finding one index</li>
  <li>Boundaries matter more than comparisons</li>
  <li>Works for duplicates and single-element arrays</li>
</ul>
`
},
{
id: "33-search-in-rotated-sorted-array",
title: "33. Search in Rotated Sorted Array",
content: `

<h1>33. Search in Rotated Sorted Array</h1>
<p>Search for a target in a rotated sorted array with no duplicates in O(log n) time.</p>

<h3>Approach (Modified Binary Search):</h3>
<ul>
  <li>Use binary search with two pointers</li>
  <li>Identify which half is sorted at each step</li>
  <li>Check if target lies in the sorted half</li>
  <li>Discard the unsorted half accordingly</li>
  <li>Continue until found or search space exhausted</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int search(vector&lt;int&gt;&amp; nums, int target) {
        int l = 0, r = nums.size() - 1;
        while (l &lt;= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;


        if (nums[l] &lt;= nums[mid]) {
            if (nums[l] &lt;= target &amp;&amp; target &lt; nums[mid])
                r = mid - 1;
            else
                l = mid + 1;
        } else {
            if (nums[mid] &lt; target &amp;&amp; target &lt;= nums[r])
                l = mid + 1;
            else
                r = mid - 1;
        }
    }
    return -1;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initialize binary search bounds</li>
  <li>Compute mid index safely</li>
  <li>Check if mid element is target</li>
  <li>Detect which half is sorted</li>
  <li>Narrow search to the valid half</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>One half is always sorted</li>
  <li>Wrong boundary checks cause WA</li>
  <li>Must include equality in comparisons</li>
  <li>Works only when no duplicates exist</li>
</ul>
`
},
{
id: "81-search-in-rotated-sorted-array-ii",
title: "81. Search in Rotated Sorted Array II",
content: `

<h1>81. Search in Rotated Sorted Array II</h1>
<p>Search for a target in a rotated sorted array that may contain duplicates.</p>

<h3>Approach (Modified Binary Search with Duplicate Handling):</h3>
<ul>
  <li>Use binary search with two pointers</li>
  <li>If middle equals target, return true</li>
  <li>When left, mid, and right are equal, shrink bounds</li>
  <li>Otherwise detect the sorted half</li>
  <li>Decide which half to discard based on target range</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n) average, O(n) worst-case</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    bool search(vector&lt;int&gt;&amp; nums, int target) {
        int l = 0, r = nums.size() - 1;
        while (l &lt;= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return true;

        if (nums[l] == nums[mid] &amp;&amp; nums[mid] == nums[r]) {
            l++;
            r--;
        } else if (nums[l] &lt;= nums[mid]) {
            if (nums[l] &lt;= target &amp;&amp; target &lt; nums[mid])
                r = mid - 1;
            else
                l = mid + 1;
        } else {
            if (nums[mid] &lt; target &amp;&amp; target &lt;= nums[r])
                l = mid + 1;
            else
                r = mid - 1;
        }
    }
    return false;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initialize binary search bounds</li>
  <li>Return true if mid matches target</li>
  <li>Shrink bounds when duplicates block ordering</li>
  <li>Identify sorted half when possible</li>
  <li>Move search to valid half</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Duplicates break strict O(log n) guarantee</li>
  <li>nums[l] == nums[mid] == nums[r] is the critical case</li>
  <li>Forgetting to shrink bounds causes infinite loop</li>
  <li>Same logic as LC 33 once duplicates are skipped</li>
</ul>
`
},
{
id: "153-find-minimum-in-rotated-sorted-array",
title: "153. Find Minimum in Rotated Sorted Array",
content: `

<h1>153. Find Minimum in Rotated Sorted Array</h1>
<p>Find the minimum element in a rotated sorted array with <strong>no duplicates</strong> in O(log n).</p>

<h3>Approach (Binary Search on Rotation Point):</h3>
<ul>
  <li>Use binary search on the array</li>
  <li>Compare mid with right to detect unsorted side</li>
  <li>Minimum always lies in the unsorted half</li>
  <li>Shrink search space toward the pivot</li>
  <li>Stop when left meets right</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int findMin(vector&lt;int&gt;&amp; nums) {
        int l = 0, r = nums.size() - 1;
        while (l &lt; r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] &gt; nums[r])
                l = mid + 1;
            else
                r = mid;
        }
        return nums[l];
    }
};</pre>
</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initialize search bounds</li>
  <li>Compute mid safely</li>
  <li>If mid is greater than right, minimum is on right side</li>
  <li>Otherwise minimum lies on left including mid</li>
  <li>Loop ends at minimum index</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Array is sorted except at rotation point</li>
  <li>Comparing with <code>nums[r]</code> is crucial</li>
  <li>Do not use <code>&lt;=</code> in loop condition</li>
  <li>Works only when duplicates are not present</li>
</ul>
`
},
{
id: "540-single-element-in-a-sorted-array",
title: "540. Single Element in a Sorted Array",
content: `

<h1>540. Single Element in a Sorted Array</h1>
<p>Find the single element in a sorted array where every other element appears exactly twice.</p>

<h3>Approach (Binary Search on Index Parity):</h3>
<ul>
  <li>Use binary search on indices</li>
  <li>Exploit pairing pattern around the single element</li>
  <li>Ensure mid is even for valid pair checking</li>
  <li>Compare mid with mid + 1 to detect broken pair</li>
  <li>Narrow search to the side containing the single element</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int singleNonDuplicate(vector&lt;int&gt;&amp; nums) {
        int l = 0, r = nums.size() - 1;
        while (l &lt; r) {
            int mid = l + (r - l) / 2;
            if (mid % 2 == 1) mid--;
            if (nums[mid] == nums[mid + 1])
                l = mid + 2;
            else
                r = mid;
        }
        return nums[l];
    }
};</pre>
</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initialize binary search bounds</li>
  <li>Force mid to be even index</li>
  <li>Check if current pair is valid</li>
  <li>Skip valid pairs entirely</li>
  <li>Converge to the single element</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Index parity is the core trick</li>
  <li>Forgetting to normalize mid causes WA</li>
  <li>Works only because array is sorted</li>
  <li>Exactly one single element is guaranteed</li>
</ul>
`
},
{
id: "162-find-peak-element",
title: "162. Find Peak Element",
content: `

<h1>162. Find Peak Element</h1>
<p>Find a peak element (greater than its neighbors) and return its index in O(log n).</p>

<h3>Approach (Binary Search on Slope):</h3>
<ul>
  <li>Use binary search on indices</li>
  <li>Compare mid with mid + 1 to detect slope direction</li>
  <li>If descending, peak lies on left including mid</li>
  <li>If ascending, peak lies on right</li>
  <li>Converge to any valid peak</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(log n)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int findPeakElement(vector&lt;int&gt;&amp; nums) {
        int l = 0, r = nums.size() - 1;
        while (l &lt; r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] &gt; nums[mid + 1])
                r = mid;
            else
                l = mid + 1;
        }
        return l;
    }
};</pre>
</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initialize binary search bounds</li>
  <li>Compare mid with next element</li>
  <li>Move left when slope is down</li>
  <li>Move right when slope is up</li>
  <li>End when pointers meet at peak</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Peak is guaranteed to exist</li>
  <li>Boundaries act as −∞ implicitly</li>
  <li>Never access mid − 1, avoid bounds issues</li>
  <li>Any peak index is acceptable</li>
</ul>
`
},
{
id: "875-koko-eating-bananas",
title: "875. Koko Eating Bananas",
content: `

<h1>875. Koko Eating Bananas</h1>
<p>Find the minimum integer eating speed so Koko can finish all banana piles within h hours.</p>

<h3>Approach (Binary Search on Answer):</h3>
<ul>
  <li>Search space is eating speed from 1 to max pile size</li>
  <li>Feasibility check: compute total hours needed for a given speed</li>
  <li>Use ceiling division to count hours per pile</li>
  <li>If total hours ≤ h, try smaller speed</li>
  <li>Otherwise, increase speed</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(n log M)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int minEatingSpeed(vector&lt;int&gt;&amp; piles, int h) {
        int l = 1, r = 0;
        for (int x : piles) r = max(r, x);

    while (l &lt; r) {
        int mid = l + (r - l) / 2;
        long long hours = 0;
        for (int x : piles) {
            hours += (x + mid - 1) / mid;
        }
        if (hours &lt;= h) r = mid;
        else l = mid + 1;
    }
    return l;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initialize binary search bounds using minimum and maximum possible speeds</li>
  <li>Use binary search to test a candidate speed</li>
  <li>Compute total hours using ceiling division for each pile</li>
  <li>Shrink right bound if speed is feasible</li>
  <li>Otherwise move left bound up</li>
  <li>Return the minimum feasible speed</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li><code>(x + k - 1) / k</code> is mandatory to avoid undercounting hours</li>
  <li>Using <code>int</code> for total hours can overflow; use <code>long long</code></li>
  <li>Binary search condition must be <code>l &lt; r</code>, not <code>l &lt;= r</code></li>
  <li>Answer is always within <code>[1, max(piles)]</code></li>
  <li>No need to sort piles</li>
</ul>
`
}







              ]
            }
            
        }
    }
};