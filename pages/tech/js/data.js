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
            "BIT MANIPULATION":{
              "Introduction":[
                {
id: "introduction-to-bit-manipulation",
title: "Introduction",
content: `

<h1>Introduction</h1>

<p>Bit Manipulation is a technique that operates directly on binary representations of numbers using bitwise operators. It exists to solve problems more efficiently by exploiting low-level properties of integers instead of using loops, extra memory, or arithmetic-heavy logic.</p>

<h2>When to Use:</h2>
<ul>
  <li>Problems involving parity, toggling, masking, or binary states</li>
  <li>Constraints demand O(1) space or faster-than-linear solutions</li>
  <li>Questions mentioning powers of two, XOR properties, or bit counts</li>
  <li>Situations where frequency or uniqueness must be inferred without extra memory</li>
</ul>

<h2>Step-by-Step Logic:</h2>
<ul>
  <li>Represent numbers in binary form</li>
  <li>Use bitwise operators to inspect or modify specific bits</li>
  <li>Apply algebraic properties of XOR, AND, OR</li>
  <li>Reduce problems by canceling or isolating bits</li>
</ul>
`
},
{
id: "ones-complement-and-twos-complement",
title: "Understanding One's Complement and Two's Complement",
content: `

<h1>Understanding One's Complement and Two's Complement</h1>

<h2>One's Complement</h2>
<p>The one's complement of a binary number is obtained by flipping all the bits.</p>

<p>Example: The one's complement of 13 (binary 1101):</p>

<p>Binary of 13     : 0000 1101</p>
<p>One's Complement : 1111 0010</p>

<h2>Two's Complement</h2>
<p>The two's complement is obtained by taking the one's complement of a number and adding 1.</p>

<p>Example: The two's complement of 13 (binary 1101):</p>

<p>One's Complement : 1111 0010</p>
<p>Add 1            : 1111 0011</p>
`
}

              ],
              "Binary Number Conversion":[
                {
id: "decimal-to-binary",
title: "Decimal to Binary",
content: `

<h1>Decimal to Binary</h1>

<p>Convert a decimal number to binary by repeatedly dividing by 2 and tracking remainders.</p>

<h2>Steps</h2>
<ol>
  <li>Divide the number by 2.</li>
  <li>Write down the remainder (0 or 1).</li>
  <li>Replace the number with the quotient.</li>
  <li>Repeat until the number becomes 0.</li>
  <li>Read remainders from bottom to top.</li>
</ol>

<p>Example: Convert 13 to binary</p>

<p>13 ÷ 2 = 6 remainder 1</p>
<p>6  ÷ 2 = 3 remainder 0</p>
<p>3  ÷ 2 = 1 remainder 1</p>
<p>1  ÷ 2 = 0 remainder 1</p>

<p>Read bottom → top: 1101</p>

<p>So,</p>
<p>13 (decimal) = 1101 (binary)</p>
`
},
{
id: "binary-to-decimal",
title: "Binary to Decimal",
content: `

<h1>Binary to Decimal</h1>

<p>Convert binary to decimal by multiplying each bit by powers of 2 based on its position.</p>

<h2>Rule</h2>
<p>From right to left:</p>
<p>position starts at 0</p>
<p>multiply each bit by 2^position and sum.</p>

<p>Example: Convert 1101 to decimal</p>

<p>1 × 2^0 = 1</p>
<p>0 × 2^1 = 0</p>
<p>1 × 2^2 = 4</p>
<p>1 × 2^3 = 8</p>

<p>Sum = 1 + 0 + 4 + 8 = 13</p>

<p>So,</p>
<p>1101 (binary) = 13 (decimal)</p>
`
}

              ],
              "Bitwise Operators":[
                {
id: "and-operator",
title: "AND Operator (&)",
content: `

<h1>AND Operator (&)</h1>

<p>If both corresponding bits are 1, the resulting bit is 1; otherwise, it is 0.</p>

<p>13: 1101</p>
<p> 7: 0111</p>
<p>&amp;  : 0101 → 5</p>
`
},
{
id: "or-operator",
title: "OR Operator (|)",
content: `

<h1>OR Operator (|)</h1>

<p>If either corresponding bit is 1, the resulting bit is 1.</p>

<p>13: 1101</p>
<p> 7: 0111</p>
<p>|  : 1111 → 15</p>
`
},
{
id: "xor-operator",
title: "XOR Operator (^)",
content: `

<h1>XOR Operator (^)</h1>

<p>If bits differ, the result is 1; if the same, result is 0.</p>

<p>13: 1101</p>
<p> 7: 0111</p>
<p>^  : 1010 → 10</p>
`
},
{
id: "not-operator",
title: "NOT Operator (~)",
content: `

<h1>NOT Operator (~)</h1>

<p>Flips all bits of the number.</p>

<p> 5: 0000 0101</p>
<p>~5: 1111 1010 → -6 (in two's complement)</p>
`
},
{
id: "shift-operators",
title: "Shift Operators",
content: `

<h1>Shift Operators</h1>

<p>Right Shift (>>): Shifts bits to the right, fills left with 0s.</p>
<p>13 >> 1 = 0110 → 6</p>

<p>Left Shift (<<): Shifts bits to the left, fills right with 0s.</p>
<p>13 << 1 = 11010 → 26</p>
`
}

              ],
              "Bit Manipulation Tricks and Techniques":[
                {
id: "bit-manipulation-tricks-and-techniques",
title: "Bit Manipulation Tricks and Techniques",
content: `

<h1>Bit Manipulation Tricks and Techniques</h1>

<h2>1. Swapping Two Numbers Without a Third Variable</h2>
<p>A = A ^ B</p>
<p>B = A ^ B</p>
<p>A = A ^ B</p>

<h2>2. Checking if the i-th Bit is Set</h2>
<p>(1 << i) &amp; num   → set if result ≠ 0</p>
<p>(num >> i) &amp; 1   → set if result ≠ 0</p>

<h2>3. Setting the i-th Bit</h2>
<p>num | (1 << i)</p>

<h2>4. Clearing the i-th Bit</h2>
<p>num &amp; ~(1 << i)</p>

<h2>5. Toggling the i-th Bit</h2>
<p>num ^ (1 << i)</p>
`
}

              ]
            },

            "ARRAYS PROBLEMS":{
      "Easy" : [
        {
id: "1752-check-if-array-is-sorted-and-rotated",
title: "1752. Check if Array Is Sorted and Rotated",
content: ` <h1>1752. Check if Array Is Sorted and Rotated</h1> <p>Check whether an array is non-decreasing and possibly rotated some number of times.</p>


<h2>Approach (Circular Array + Inversion Counting Technique):</h2>
<ul>
  <li>Count positions where nums[i] &gt; nums[(i+1)%n]</li>
  <li>Use modulo to treat array as circular</li>
  <li>Valid sorted-rotated array has at most one such inversion</li>
  <li>If inversions ≤ 1 → return true</li>
  <li>Otherwise → return false</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {


public:
bool check(vector<int>& nums) {
int n = nums.size();
int count = 0;


    for(int i = 0; i &lt; n; i++) {
        if(nums[i] &gt; nums[(i + 1) % n]) {
            count++;
        }
    }
    
    return count &lt;= 1;
}


};</pre> </div>


<h2>Code Explanation:</h2>
<ul>
  <li>Iterate through entire array including circular comparison</li>
  <li>Compare each element with next using modulo</li>
  <li>Increment count when order decreases</li>
  <li>If more than one decrease found, array cannot be sorted-rotated</li>
  <li>Return whether count is at most one</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Must compare last element with first using modulo</li>
  <li>Duplicates are allowed (non-decreasing, not strictly increasing)</li>
  <li>Single element array is always valid</li>
  <li>Strictly sorted array (no rotation) also returns true</li>
  <li>More than one drop means multiple disorder points → invalid</li>
</ul>


`
},
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
},
{
id: "1482-minimum-number-of-days-to-make-m-bouquets",
title: "1482. Minimum Number of Days to Make m Bouquets",
content: `

<h1>1482. Minimum Number of Days to Make m Bouquets</h1>
<p>Find the minimum day such that it is possible to make m bouquets using k adjacent flowers.</p>

<h3>Approach (Binary Search on Answer):</h3>
<ul>
  <li>Search days between minimum and maximum bloom day</li>
  <li>For a given day, check feasibility by counting consecutive bloomed flowers</li>
  <li>Form a bouquet whenever k consecutive flowers are bloomed</li>
  <li>Reset consecutive count after forming a bouquet</li>
  <li>If total bouquets ≥ m, day is feasible</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(n log D)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    bool canMake(vector&lt;int&gt;&amp; bloomDay, int m, int k, int day) {
        int bouquets = 0, cnt = 0;
        for (int x : bloomDay) {
            if (x &lt;= day) {
                cnt++;
                if (cnt == k) {
                    bouquets++;
                    cnt = 0;
                }
            } else {
                cnt = 0;
            }
        }
        return bouquets &gt;= m;
    }

int minDays(vector&lt;int&gt;&amp; bloomDay, int m, int k) {
    long long need = 1LL * m * k;
    if (need &gt; bloomDay.size()) return -1;

    int l = *min_element(bloomDay.begin(), bloomDay.end());
    int r = *max_element(bloomDay.begin(), bloomDay.end());

    while (l &lt; r) {
        int mid = l + (r - l) / 2;
        if (canMake(bloomDay, m, k, mid)) r = mid;
        else l = mid + 1;
    }
    return l;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Early exit if total required flowers exceed available flowers</li>
  <li>Binary search over possible days</li>
  <li>Feasibility function counts adjacent bloomed flowers</li>
  <li>Increment bouquet count when k consecutive flowers are found</li>
  <li>Reset counter on unbloomed flower</li>
  <li>Narrow search to minimum feasible day</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Always check <code>m * k &gt; n</code> first or you’ll get WA</li>
  <li>Bouquets require adjacency; sorting breaks the logic</li>
  <li>Reset consecutive count after forming a bouquet</li>
  <li>Use <code>long long</code> for <code>m * k</code> to avoid overflow</li>
  <li>Binary search is on days, not indices</li>
</ul>
`
},
{
id: "1283-find-the-smallest-divisor-given-a-threshold",
title: "1283. Find the Smallest Divisor Given a Threshold",
content: `

<h1>1283. Find the Smallest Divisor Given a Threshold</h1>
<p>Find the smallest positive integer divisor such that the sum of ⌈nums[i] / divisor⌉ over all elements is ≤ threshold.</p>

<h3>Approach (Binary Search on Answer):</h3>
<ul>
  <li>Search divisor in range [1, max(nums)]</li>
  <li>For a given divisor, compute sum using ceiling division</li>
  <li>If sum ≤ threshold, divisor is feasible</li>
  <li>Try smaller divisor to minimize answer</li>
  <li>Otherwise increase divisor</li>
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
    int smallestDivisor(vector&lt;int&gt;&amp; nums, int threshold) {
        int l = 1, r = 0;
        for (int x : nums) r = max(r, x);

    while (l &lt; r) {
        int mid = l + (r - l) / 2;
        long long sum = 0;
        for (int x : nums) {
            sum += (x + mid - 1) / mid;
        }
        if (sum &lt;= threshold) r = mid;
        else l = mid + 1;
    }
    return l;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Initialize binary search bounds using valid divisor limits</li>
  <li>Test a candidate divisor using ceiling division</li>
  <li>Accumulate the transformed sum safely using long long</li>
  <li>Shrink right bound if constraint is satisfied</li>
  <li>Otherwise move left bound upward</li>
  <li>Return minimum valid divisor</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li><code>(x + d - 1) / d</code> is required; plain division gives WA</li>
  <li>Using <code>int</code> for sum can overflow for large inputs</li>
  <li>Binary search is on divisor values, not array indices</li>
  <li>Lower bound is always 1, never 0</li>
  <li>Guaranteed solution exists per problem constraints</li>
</ul>
`
},
{
id: "1011-capacity-to-ship-packages-within-d-days",
title: "1011. Capacity To Ship Packages Within D Days",
content: `

<h1>1011. Capacity To Ship Packages Within D Days</h1>
<p>Find the minimum ship capacity so all packages can be shipped within D days while preserving order.</p>

<h3>Approach (Binary Search on Answer):</h3>
<ul>
  <li>Search capacity between max single package weight and total weight</li>
  <li>For a given capacity, simulate shipping greedily day by day</li>
  <li>Accumulate weights until capacity is exceeded, then move to next day</li>
  <li>Count required days for the given capacity</li>
  <li>If days ≤ D, capacity is feasible</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li>Time: O(n log S)</li>
  <li>Space: O(1)</li>
</ul>

<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    bool canShip(vector&lt;int&gt;&amp; weights, int D, int cap) {
        int days = 1, cur = 0;
        for (int w : weights) {
            if (cur + w &gt; cap) {
                days++;
                cur = 0;
            }
            cur += w;
        }
        return days &lt;= D;
    }

int shipWithinDays(vector&lt;int&gt;&amp; weights, int D) {
    int l = 0, r = 0;
    for (int w : weights) {
        l = max(l, w);
        r += w;
    }

    while (l &lt; r) {
        int mid = l + (r - l) / 2;
        if (canShip(weights, D, mid)) r = mid;
        else l = mid + 1;
    }
    return l;
}

};</pre>

</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Set binary search bounds using constraints of the problem</li>
  <li>Simulate shipping process to check feasibility</li>
  <li>Increment day count when capacity is exceeded</li>
  <li>Greedily fill each day as much as possible</li>
  <li>Shrink or expand search space based on feasibility</li>
  <li>Return minimum valid capacity</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Lower bound must be max weight, not average</li>
  <li>Preserving order is mandatory; sorting breaks correctness</li>
  <li>Days start from 1, not 0</li>
  <li>Using greedy fill minimizes days for a given capacity</li>
  <li>Binary search on capacity, not days</li>
</ul>
`
},
{
id: "1539-kth-missing-positive-number",
title: "1539. Kth Missing Positive Number",
content: `

<h1>1539. Kth Missing Positive Number</h1>
<p>Find the k-th missing positive integer from a strictly increasing sorted array.</p>

<h3>Approach (Binary Search on Missing Count):</h3>
<ul>
  <li>Missing count before index i is <code>arr[i] - (i + 1)</code></li>
  <li>Binary search for smallest index where missing count ≥ k</li>
  <li>If k is larger than total missing inside array, answer is beyond last element</li>
  <li>Use lower-bound style binary search</li>
  <li>Compute result directly from index and k</li>
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
    int findKthPositive(vector&lt;int&gt;&amp; arr, int k) {
        int l = 0, r = arr.size();
        while (l &lt; r) {
            int mid = l + (r - l) / 2;
            int missing = arr[mid] - (mid + 1);
            if (missing &lt; k) l = mid + 1;
            else r = mid;
        }
        return l + k;
    }
};</pre>
</div>

<h3>Code Explanation:</h3>
<ul>
  <li>Binary search over indices, not values</li>
  <li>Compute how many numbers are missing before mid</li>
  <li>Move right if missing count is insufficient</li>
  <li>Otherwise shrink to the left half</li>
  <li>Final index l determines how many existing numbers are before answer</li>
  <li>Result is index offset plus k</li>
</ul>

<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>Formula <code>arr[i] - (i + 1)</code> is the core trick; miss this and you brute-force</li>
  <li>Answer can lie beyond the last array element</li>
  <li>Binary search upper bound must be <code>n</code>, not <code>n-1</code></li>
  <li>Off-by-one errors in missing count cause WA</li>
  <li>Linear scan is acceptable but this is the optimal solution</li>
</ul>
`
},
{
id: "search-a-2d-matrix",
title: "74. Search a 2D Matrix",
content: `

<h1>74. Search a 2D Matrix</h1>

<p>Search for a target value in a row-wise sorted 2D matrix where each row’s first element is greater than the previous row’s last.</p>

<h2>Approach (Binary Search on Virtual 1D Array):</h2>
<ul>
  <li>Treat the 2D matrix as a flattened sorted 1D array</li>
  <li>Total elements = rows × cols, indices range from 0 to n*m−1</li>
  <li>Map 1D index to 2D using row = idx / cols, col = idx % cols</li>
  <li>Apply standard binary search on this virtual array</li>
  <li>Compare target with mapped matrix element</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(log(n*m))</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    bool searchMatrix(vector&lt;vector&lt;int&gt;&gt;&amp; matrix, int target) {
        int n = matrix.size();
        int m = matrix[0].size();

    int l = 0, r = n * m - 1;

    while (l &lt;= r) {
        int mid = l + (r - l) / 2;
        int row = mid / m;
        int col = mid % m;

        if (matrix[row][col] == target) return true;
        if (matrix[row][col] &lt; target) l = mid + 1;
        else r = mid - 1;
    }
    return false;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Uses matrix dimensions to simulate a flattened sorted array</li>
  <li>Converts mid index into row and column positions</li>
  <li>Performs binary search comparisons directly on matrix values</li>
  <li>Narrows search space based on comparison result</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Forgetting mid → (row, col) mapping leads to wrong access</li>
  <li>Overflow risk avoided using l + (r − l) / 2</li>
  <li>Assumes matrix is non-empty; empty matrix needs guard</li>
  <li>Row-wise binary search separately is unnecessary and slower</li>
  <li>Works only because matrix is globally sorted, not just row-sorted</li>
</ul>
`
},
{
id: "search-a-2d-matrix-ii",
title: "240. Search a 2D Matrix II",
content: `

<h1>240. Search a 2D Matrix II</h1>

<p>Search for a target in a matrix sorted in ascending order both row-wise and column-wise.</p>

<h2>Approach (Staircase Search from Top-Right):</h2>
<ul>
  <li>Start from the top-right corner of the matrix</li>
  <li>If current value equals target, return true</li>
  <li>If current value is greater than target, move left</li>
  <li>If current value is smaller than target, move down</li>
  <li>Each move eliminates one row or one column</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n + m)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    bool searchMatrix(vector&lt;vector&lt;int&gt;&gt;&amp; matrix, int target) {
        int n = matrix.size();
        int m = matrix[0].size();

    int r = 0, c = m - 1;

    while (r &lt; n &amp;&amp; c &gt;= 0) {
        if (matrix[r][c] == target) return true;
        else if (matrix[r][c] &gt; target) c--;
        else r++;
    }
    return false;
}
}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Starts at top-right where left is smaller and down is larger</li>
  <li>Moves left to reduce value when current is too big</li>
  <li>Moves down to increase value when current is too small</li>
  <li>Stops when indices go out of matrix bounds</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Binary search does NOT work directly due to lack of global ordering</li>
  <li>Starting from top-left or bottom-right breaks monotonic elimination</li>
  <li>Forgetting bounds (r &lt; n, c ≥ 0) causes runtime error</li>
  <li>Works even with duplicate values in the matrix</li>
  <li>Empty matrix must be checked before accessing matrix[0]</li>
</ul>
`
},
{
id: "find-a-peak-element-ii",
title: "1901. Find a Peak Element II",
content: `

<h1>1901. Find a Peak Element II</h1>

<p>Find any peak element in a 2D grid where a peak is strictly greater than its four neighbors.</p>

<h2>Approach (Binary Search on Columns):</h2>
<ul>
  <li>Perform binary search on columns, not rows</li>
  <li>For a chosen mid column, find the row with maximum value</li>
  <li>Compare this max element with its left and right neighbors</li>
  <li>Move search to the side that has a larger neighbor</li>
  <li>A peak is guaranteed to exist due to boundary conditions</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n · log m)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    vector&lt;int&gt; findPeakGrid(vector&lt;vector&lt;int&gt;&gt;&amp; mat) {
        int n = mat.size();
        int m = mat[0].size();

    int l = 0, r = m - 1;

    while (l &lt;= r) {
        int mid = l + (r - l) / 2;

        int maxRow = 0;
        for (int i = 0; i &lt; n; i++) {
            if (mat[i][mid] &gt; mat[maxRow][mid])
                maxRow = i;
        }

        int left = (mid &gt; 0) ? mat[maxRow][mid - 1] : -1;
        int right = (mid &lt; m - 1) ? mat[maxRow][mid + 1] : -1;

        if (mat[maxRow][mid] &gt; left &amp;&amp; mat[maxRow][mid] &gt; right)
            return {maxRow, mid};
        else if (right &gt; mat[maxRow][mid])
            l = mid + 1;
        else
            r = mid - 1;
    }
    return {};
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Binary search narrows columns based on neighbor comparison</li>
  <li>Scans a column to find its maximum row index</li>
  <li>Uses left and right neighbors to decide search direction</li>
  <li>Returns position immediately when a peak condition is met</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Using row-wise binary search breaks correctness</li>
  <li>You must pick the maximum element in the mid column</li>
  <li>Boundary columns assume neighbors as −1 per constraints</li>
  <li>Time limit fails if you do full 2D scanning</li>
  <li>Any valid peak is acceptable, not necessarily global maximum</li>
</ul>
`
}














              ],
              "Hard":[
                {
id: "410-split-array-largest-sum",
title: "410. Split Array Largest Sum",
content: `

<h1>410.	Split Array Largest Sum</h1>
<p>Split an array into k non-empty continuous subarrays to minimize the maximum subarray sum.</p>
<h2>Approach (Binary Search on Answer):</h2>
<ul>
  <li>• Lower bound is the maximum element, upper bound is the total sum</li>
  <li>• Feasibility check: greedy split to count subarrays for a given max sum</li>
  <li>• If required subarrays &gt; k, mid is too small</li>
  <li>• If required subarrays ≤ k, try smaller maximum</li>
  <li>• Binary search for the minimal feasible maximum sum</li>
</ul>
<h3>Complexity:</h3>
<p>Time: O(n log(sum − max))</p>
<p>Space: O(1)</p>
<h3>C++ Reference Code:</h3>
<div class="code-block">
  <pre>class Solution {
public:
    int requiredSubarrays(vector&lt;int&gt;&amp; nums, long long maxSum) {
        int cnt = 1;
        long long curr = 0;
        for (int x : nums) {
            if (curr + x &gt; maxSum) {
                cnt++;
                curr = x;
            } else {
                curr += x;
            }
        }
        return cnt;
    }

int splitArray(vector&lt;int&gt;&amp; nums, int k) {
    long long l = *max_element(nums.begin(), nums.end());
    long long r = 0;
    for (int x : nums) r += x;

    while (l &lt; r) {
        long long mid = l + (r - l) / 2;
        if (requiredSubarrays(nums, mid) &lt;= k)
            r = mid;
        else
            l = mid + 1;
    }
    return (int)l;
}

};</pre>

</div>
<h3>Code Explanation:</h3>
<ul>
  <li>• requiredSubarrays greedily counts splits needed under a given maximum sum</li>
  <li>• Lower bound ensures no subarray is forced below max element</li>
  <li>• Binary search narrows to the smallest feasible maximum sum</li>
  <li>• Condition ensures at most k subarrays are used</li>
  <li>• Final l is the minimum possible largest subarray sum</li>
</ul>
<h3>Key Insights / Edge Cases:</h3>
<ul>
  <li>• Greedy split works because order must be preserved</li>
  <li>• Off-by-one errors in subarray count cause WA</li>
  <li>• Use long long to avoid overflow on sums</li>
  <li>• k = n forces answer to max element</li>
  <li>• k = 1 forces answer to total sum</li>
</ul>
`
},
{
id: "median-of-two-sorted-arrays",
title: "4. Median of Two Sorted Arrays",
content: `

<h1>4. Median of Two Sorted Arrays</h1>

<p>Find the median of two sorted arrays in O(log(min(n, m))) time.</p>

<h2>Approach (Binary Search on Partition):</h2>
<ul>
  <li>Always binary search on the smaller array to keep bounds valid</li>
  <li>Partition both arrays so left halves contain half of total elements</li>
  <li>Ensure max(left parts) ≤ min(right parts) for a valid partition</li>
  <li>Adjust partition using binary search based on comparison violations</li>
  <li>Compute median from boundary elements once partition is valid</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(log(min(n, m)))</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    double findMedianSortedArrays(vector&lt;int&gt;&amp; A, vector&lt;int&gt;&amp; B) {
        if (A.size() &gt; B.size()) return findMedianSortedArrays(B, A);

    int n = A.size(), m = B.size();
    int low = 0, high = n;

    while (low &lt;= high) {
        int cutA = (low + high) / 2;
        int cutB = (n + m + 1) / 2 - cutA;

        int leftA = (cutA == 0) ? INT_MIN : A[cutA - 1];
        int rightA = (cutA == n) ? INT_MAX : A[cutA];
        int leftB = (cutB == 0) ? INT_MIN : B[cutB - 1];
        int rightB = (cutB == m) ? INT_MAX : B[cutB];

        if (leftA &lt;= rightB &amp;&amp; leftB &lt;= rightA) {
            if ((n + m) % 2 == 0)
                return (max(leftA, leftB) + min(rightA, rightB)) / 2.0;
            else
                return max(leftA, leftB);
        } else if (leftA &gt; rightB) {
            high = cutA - 1;
        } else {
            low = cutA + 1;
        }
    }
    return 0.0;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Forces binary search on the smaller array to avoid invalid partitions</li>
  <li>Chooses partition indices so left side has half the total elements</li>
  <li>Uses sentinels (INT_MIN, INT_MAX) to handle edge partitions</li>
  <li>Validates correct partition using ordering constraints</li>
  <li>Computes median based on total length parity</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Forgetting to binary search the smaller array causes out-of-bounds access</li>
  <li>Using (n + m) / 2 instead of (n + m + 1) / 2 breaks odd-length cases</li>
  <li>Median comes from max(left) not min(right) for odd total length</li>
  <li>INT_MIN / INT_MAX are mandatory for clean boundary handling</li>
  <li>Works even when one array is empty</li>
</ul>
`
}


              ]
            },
            "STRINGS PROBLEMS":{
              "Easy":[
                {
id: "1021-remove-outermost-parentheses",
title: "1021. Remove Outermost Parentheses",
content: `

<h1>1021. Remove Outermost Parentheses</h1>

<p>Remove the outermost parentheses from every primitive valid parentheses substring.</p>

<h2>Approach (Depth Counter):</h2>
<ul>
  <li>Traverse the string while maintaining a balance counter</li>
  <li>Increment counter on '(' and decrement on ')'</li>
  <li>Skip '(' when counter is 0 (outermost opening)</li>
  <li>Skip ')' when counter becomes 0 after decrement (outermost closing)</li>
  <li>Append all other parentheses to result</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(n) ignoring output</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    string removeOuterParentheses(string s) {
        string res;
        int bal = 0;
        for(char c : s) {
            if(c == '(') {
                if(bal &gt; 0) res.push_back(c);
                bal++;
            } else {
                bal--;
                if(bal &gt; 0) res.push_back(c);
            }
        }
        return res;
    }
};</pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li><code>bal</code> tracks current nesting depth</li>
  <li>Outer '(' is detected when <code>bal == 0</code> before increment</li>
  <li>Outer ')' is detected when <code>bal == 0</code> after decrement</li>
  <li>Only non-outer parentheses are appended to result</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Primitive strings always start with '(' and end with ')'</li>
  <li>Order of increment/decrement is critical</li>
  <li>Appending before vs after balance update causes WA</li>
  <li>Works correctly for concatenated primitives</li>
</ul>
`
},
{
id: "1903-largest-odd-number-in-string",
title: "1903. Largest Odd Number in String",
content: `

<h1>1903. Largest Odd Number in String</h1>
<p>Given a numeric string, return the largest-valued odd-numbered substring that starts from index 0.</p>

<h2>Approach (Greedy Scan from End):</h2>
<ul>
  <li>An odd number must end with an odd digit</li>
  <li>Scan from right to left to find the last odd digit</li>
  <li>The substring from index 0 to that position is the largest possible odd number</li>
  <li>If no odd digit exists, no valid answer</li>
  <li>Avoid integer conversion to prevent overflow</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1) ignoring output</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    string largestOddNumber(string num) {
        for (int i = num.size() - 1; i &gt;= 0; i--) {
            if ((num[i] - &#39;0&#39;) % 2 == 1) {
                return num.substr(0, i + 1);
            }
        }
        return &quot;&quot;;
    }
};
  </pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Iterate from the last digit to the first</li>
  <li>Check if the digit is odd using modulo</li>
  <li>Return prefix ending at the first odd digit found</li>
  <li>If loop finishes, no odd digit exists</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Any suffix after the last odd digit makes the number even</li>
  <li>Leading zeros are allowed and preserved</li>
  <li>Empty result is required if all digits are even</li>
  <li>Do not parse into integers due to large constraints</li>
</ul>
`
},
{
id: "14-longest-common-prefix",
title: "14. Longest Common Prefix",
content: `

<h1>14. Longest Common Prefix</h1>
<p>Find the longest prefix string common to all strings in the array.</p>

<h2>Approach (Vertical Scanning):</h2>
<ul>
  <li>Use the first string as a reference prefix</li>
  <li>Compare characters column-wise across all strings</li>
  <li>Stop immediately on mismatch or string end</li>
  <li>Build prefix incrementally from left to right</li>
  <li>Early exit minimizes unnecessary comparisons</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n · m)</li>
  <li>Space: O(1) ignoring output</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    string longestCommonPrefix(vector&lt;string&gt;&amp; strs) {
        if (strs.empty()) return &quot;&quot;;
        for (int i = 0; i &lt; strs[0].size(); i++) {
            char c = strs[0][i];
            for (int j = 1; j &lt; strs.size(); j++) {
                if (i &gt;= strs[j].size() || strs[j][i] != c)
                    return strs[0].substr(0, i);
            }
        }
        return strs[0];
    }
};
  </pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Treat the first string as baseline</li>
  <li>Compare each character with same index in other strings</li>
  <li>Return prefix immediately on mismatch</li>
  <li>If no mismatch occurs, entire first string is the prefix</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Empty input array returns empty string</li>
  <li>If any string is empty, answer is empty</li>
  <li>Stop early to avoid TLE on long strings</li>
  <li>Horizontal scanning is slower for early mismatches</li>
</ul>
`
},
{
id: "205-isomorphic-strings",
title: "205. Isomorphic Strings",
content: `

<h1>205. Isomorphic Strings</h1>
<p>Determine if two strings are isomorphic, meaning characters in one string can be mapped one-to-one to characters in the other.</p>

<h2>Approach (Bidirectional Hash Mapping):</h2>
<ul>
  <li>Each character in <code>s</code> must map to exactly one character in <code>t</code></li>
  <li>Mapping must be consistent across all positions</li>
  <li>Enforce reverse mapping to prevent many-to-one relations</li>
  <li>Traverse both strings simultaneously</li>
  <li>Fail immediately on any conflict</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        vector&lt;int&gt; m1(256, -1), m2(256, -1);

    for (int i = 0; i &lt; s.size(); i++) {
        if (m1[s[i]] == -1 &amp;&amp; m2[t[i]] == -1) {
            m1[s[i]] = t[i];
            m2[t[i]] = s[i];
        } else if (m1[s[i]] != t[i] || m2[t[i]] != s[i]) {
            return false;
        }
    }
    return true;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Use two vectors for forward and reverse character mapping</li>
  <li>Initialize all mappings as unused</li>
  <li>Assign mappings only when both characters are unseen</li>
  <li>Reject immediately if an existing mapping mismatches</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>One-direction mapping causes incorrect acceptance</li>
  <li>Different length strings cannot be isomorphic</li>
  <li>Vector/array is faster and simpler than hash maps</li>
  <li>Same characters must map consistently throughout</li>
  <li>Early conflict detection avoids unnecessary traversal</li>
</ul>
`
},
{
id: "796-rotate-string",
title: "796. Rotate String",
content: `

<h1>796. Rotate String</h1>
<p>Check if <code>goal</code> can be obtained by rotating <code>s</code> any number of times.</p>

<h2>Approach (String Concatenation Check):</h2>
<ul>
  <li>Rotation preserves string length</li>
  <li>Any rotation of <code>s</code> must appear as a substring of <code>s + s</code></li>
  <li>Concatenate <code>s</code> with itself to cover all rotations</li>
  <li>Check if <code>goal</code> exists as a substring</li>
  <li>Reject immediately if lengths differ</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(n)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    bool rotateString(string s, string goal) {
        if (s.size() != goal.size()) return false;
        return (s + s).find(goal) != string::npos;
    }
};
  </pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Length mismatch means rotation is impossible</li>
  <li>Concatenate string with itself to simulate all rotations</li>
  <li>Use substring search to check presence of <code>goal</code></li>
  <li>Return true if found, otherwise false</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Empty strings are valid rotations of each other</li>
  <li>Do not attempt manual rotation loops — unnecessary</li>
  <li><code>find</code> handles all rotation positions implicitly</li>
  <li>Works only because rotation preserves order and length</li>
</ul>
`
},
{
id: "242-valid-anagram",
title: "242. Valid Anagram",
content: `

<h1>242. Valid Anagram</h1>
<p>Check whether two strings are anagrams of each other.</p>

<h2>Approach (Frequency Counting):</h2>
<ul>
  <li>Anagrams must have equal lengths</li>
  <li>Count frequency of each character in first string</li>
  <li>Decrease frequency using second string</li>
  <li>Any negative count indicates mismatch</li>
  <li>Fixed-size array/vector is sufficient for lowercase letters</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) return false;
        vector&lt;int&gt; freq(26, 0);

    for (char c : s) freq[c - &#39;a&#39;]++;
    for (char c : t) {
        if (--freq[c - &#39;a&#39;] &lt; 0) return false;
    }
    return true;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Reject immediately if lengths differ</li>
  <li>Increment count for each character in first string</li>
  <li>Decrement count using second string</li>
  <li>Negative count means extra character in <code>t</code></li>
  <li>All zero counts imply valid anagram</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Sorting-based solutions are slower</li>
  <li>Works only for lowercase English letters</li>
  <li>Frequency array avoids hash overhead</li>
  <li>Early failure prevents unnecessary traversal</li>
</ul>
`
},
{
id: "13-roman-to-integer",
title: "13. Roman to Integer",
content: `

<h1>13. Roman to Integer</h1>
<p>Convert a Roman numeral string into its integer value.</p>

<h2>Approach (Greedy Scan with Value Comparison):</h2>
<ul>
  <li>Map each Roman symbol to its integer value</li>
  <li>Traverse string from left to right</li>
  <li>If current value is less than next value, subtract it</li>
  <li>Otherwise, add the current value</li>
  <li>Subtractive cases are handled naturally by comparison</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    int romanToInt(string s) {
        unordered_map&lt;char, int&gt; val = {
            {&#39;I&#39;,1}, {&#39;V&#39;,5}, {&#39;X&#39;,10}, {&#39;L&#39;,50},
            {&#39;C&#39;,100}, {&#39;D&#39;,500}, {&#39;M&#39;,1000}
        };


    int res = 0;
    for (int i = 0; i &lt; s.size(); i++) {
        if (i + 1 &lt; s.size() &amp;&amp; val[s[i]] &lt; val[s[i + 1]])
            res -= val[s[i]];
        else
            res += val[s[i]];
    }
    return res;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Store integer values of Roman symbols</li>
  <li>Compare current symbol with the next one</li>
  <li>Subtract when a smaller value precedes a larger one</li>
  <li>Add otherwise to accumulate total</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Subtractive pairs like IV, IX, XL handled by logic</li>
  <li>No need to hardcode special cases</li>
  <li>Input is guaranteed to be valid Roman numeral</li>
  <li>Single-character strings work correctly</li>
</ul>
`
}






              ],
              "Medium":[
                {
id: "151-reverse-words-in-a-string",
title: "151. Reverse Words in a String",
content: `

<h1>151. Reverse Words in a String</h1>
<p>Reverse the order of words in a string, removing extra spaces and keeping single spaces between words.</p>

<h2>Approach (Two Pointers + String Parsing):</h2>
<ul>
  <li>Traverse string from end to start to capture words in reverse order</li>
  <li>Skip trailing and intermediate spaces explicitly</li>
  <li>Identify word boundaries using two pointers</li>
  <li>Append words to result with single space separation</li>
  <li>Avoid in-place modification to simplify space handling</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(n) ignoring output</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    string reverseWords(string s) {
        int n = s.size();
        string res;
        int i = n - 1;

    while (i &gt;= 0) {
        while (i &gt;= 0 &amp;&amp; s[i] == &#39; &#39;) i--;
        if (i &lt; 0) break;
        int j = i;
        while (j &gt;= 0 &amp;&amp; s[j] != &#39; &#39;) j--;
        if (!res.empty()) res += &#39; &#39;;
        res += s.substr(j + 1, i - j);
        i = j - 1;
    }
    return res;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Start scanning from the end to reverse word order</li>
  <li>Skip spaces to find the end of a word</li>
  <li>Use another pointer to find the start of the word</li>
  <li>Extract the word using substring</li>
  <li>Append words with controlled spacing</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Leading and trailing spaces must be ignored</li>
  <li>Multiple spaces between words collapse into one</li>
  <li>Do not reverse characters inside a word</li>
  <li>In-place reversal is error-prone due to spacing</li>
  <li>Empty or space-only strings should return empty output</li>
</ul>
`
}

              ]
            },
            "LINKED LIST PROBLEMS":{
              "Easy":[
                {
id: "876-middle-of-the-linked-list",
title: "876. Middle of the Linked List",
content: `

<h1>876. Middle of the Linked List</h1>
<p>Return the middle node of a singly linked list; if there are two middle nodes, return the second one.</p>

<h2>Approach (Fast and Slow Pointers):</h2>
<ul>
  <li>Use two pointers starting at head</li>
  <li>Slow pointer moves one step at a time</li>
  <li>Fast pointer moves two steps at a time</li>
  <li>When fast reaches the end, slow is at the middle</li>
  <li>Naturally returns second middle for even-length lists</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

    while (fast &amp;&amp; fast-&gt;next) {
        slow = slow-&gt;next;
        fast = fast-&gt;next-&gt;next;
    }
    return slow;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Initialize both pointers at head</li>
  <li>Advance slow by one and fast by two</li>
  <li>Loop ends when fast cannot move further</li>
  <li>Slow pointer points to required middle node</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Single-node list returns that node</li>
  <li>Even-length list returns second middle by design</li>
  <li>Avoid counting length — extra pass is unnecessary</li>
  <li>Fast pointer condition prevents null access</li>
</ul>
`
},
{
id: "206-reverse-linked-list",
title: "206. Reverse Linked List",
content: `

<h1>206. Reverse Linked List</h1>
<p>Reverse a singly linked list and return the new head.</p>

<h2>Approach (Iterative Pointer Reversal):</h2>
<ul>
  <li>Maintain three pointers: previous, current, next</li>
  <li>Traverse the list once</li>
  <li>Reverse the <code>next</code> pointer of each node</li>
  <li>Move pointers forward systematically</li>
  <li>Final previous pointer becomes new head</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;

    while (curr) {
        ListNode* nextNode = curr-&gt;next;
        curr-&gt;next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Initialize <code>prev</code> as null and <code>curr</code> as head</li>
  <li>Store next node before breaking the link</li>
  <li>Reverse current node’s pointer</li>
  <li>Advance both pointers forward</li>
  <li>Return <code>prev</code> as the new head</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Empty list returns null</li>
  <li>Single-node list remains unchanged</li>
  <li>Do not lose reference to next node</li>
  <li>Recursive solution uses extra stack space</li>
</ul>

<h2>Approach (Recursive Pointer Reversal):</h2>
<ul>
  <li>Base case: empty list or single node is already reversed</li>
  <li>Recursively reverse the rest of the list</li>
  <li>Fix the current node by reversing its next pointer</li>
  <li>Set current node’s next to null to avoid cycles</li>
  <li>Propagate new head back through recursion</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(n) due to recursion stack</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (!head || !head-&gt;next) return head;

    ListNode* newHead = reverseList(head-&gt;next);
    head-&gt;next-&gt;next = head;
    head-&gt;next = nullptr;

    return newHead;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Stop recursion at last node or empty list</li>
  <li>Reverse the list starting from second node</li>
  <li>Make next node point back to current node</li>
  <li>Break original forward link</li>
  <li>Return the head of reversed list</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Forgetting <code>head-&gt;next = nullptr</code> causes cycles</li>
  <li>Uses extra stack space compared to iterative</li>
  <li>Clean and elegant but risky for very deep lists</li>
  <li>Base case must handle single-node correctly</li>
</ul>

`
},
{
id: "141-linked-list-cycle",
title: "141. Linked List Cycle",
content: `

<h1>141. Linked List Cycle</h1>
<p>Determine if a linked list contains a cycle.</p>

<h2>Approach (Floyd’s Cycle Detection / Tortoise and Hare):</h2>
<ul>
  <li>Use two pointers moving at different speeds</li>
  <li>Slow pointer moves one step at a time</li>
  <li>Fast pointer moves two steps at a time</li>
  <li>If a cycle exists, fast and slow will meet</li>
  <li>If fast reaches null, no cycle exists</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (!head) return false;

    ListNode* slow = head;
    ListNode* fast = head;

    while (fast &amp;&amp; fast-&gt;next) {
        slow = slow-&gt;next;
        fast = fast-&gt;next-&gt;next;
        if (slow == fast) return true;
    }
    return false;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Initialize both pointers at head</li>
  <li>Move slow by one and fast by two nodes</li>
  <li>Check equality after each move</li>
  <li>Meeting point confirms a cycle</li>
  <li>Loop exit without meeting means no cycle</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Using <code>while (fast || fast-&gt;next)</code> causes runtime error</li>
  <li>Single node without self-loop returns false</li>
  <li>Self-looped single node returns true</li>
  <li>Hashing-based solutions waste extra space</li>
  <li>Floyd’s algorithm is optimal for this problem</li>
</ul>
`
},
{
id: "234-palindrome-linked-list",
title: "234. Palindrome Linked List",
content: `

<h1>234. Palindrome Linked List</h1>

<p>Check whether a singly linked list is a palindrome.</p>

<h2>Approach (Fast-Slow Pointer + Reverse Second Half):</h2>
<ul>
  <li>Use fast and slow pointers to find the middle</li>
  <li>Reverse the second half of the linked list</li>
  <li>Compare first half and reversed second half node by node</li>
  <li>Only need to traverse half the list for comparison</li>
  <li>Optional: list restoration is not required by problem</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if (!head || !head-&gt;next) return true;

    ListNode* slow = head;
    ListNode* fast = head;

    while (fast &amp;&amp; fast-&gt;next) {
        slow = slow-&gt;next;
        fast = fast-&gt;next-&gt;next;
    }

    ListNode* prev = nullptr;
    while (slow) {
        ListNode* nextNode = slow-&gt;next;
        slow-&gt;next = prev;
        prev = slow;
        slow = nextNode;
    }

    ListNode* left = head;
    ListNode* right = prev;

    while (right) {
        if (left-&gt;val != right-&gt;val) return false;
        left = left-&gt;next;
        right = right-&gt;next;
    }
    return true;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Find middle using fast and slow pointers</li>
  <li>Reverse list starting from middle</li>
  <li>Compare values from both ends</li>
  <li>Stop comparison when second half finishes</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Odd-length lists automatically skip the middle element</li>
  <li>Reversing from <code>slow</code> works for both even and odd lengths</li>
  <li>Do not compare beyond second half</li>
  <li>Hashing or array-based solutions waste space</li>
  <li>Forgetting to reverse causes false positives</li>
</ul>
`
},
{
id: "160-intersection-of-two-linked-lists",
title: "160. Intersection of Two Linked Lists",
content: `

<h1>160. Intersection of Two Linked Lists</h1>

<p>Find the node at which two singly linked lists intersect, or return null if they do not intersect.</p>

<h2>Approach (Two Pointers with Switching):</h2>
<ul>
  <li>Use two pointers starting at each list head</li>
  <li>Move each pointer one step at a time</li>
  <li>When a pointer reaches the end, redirect it to the other list’s head</li>
  <li>After at most two passes, pointers either meet at intersection or both reach null</li>
  <li>No length calculation or extra space required</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n + m)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if (!headA || !headB) return nullptr;
        ListNode *a = headA, *b = headB;
        while (a != b) {
            a = a ? a-&gt;next : headB;
            b = b ? b-&gt;next : headA;
        }
        return a;
    }
};
  </pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Initialize two pointers at heads of both lists</li>
  <li>Traverse each list normally</li>
  <li>Switch pointer to the other list after reaching null</li>
  <li>Equalizes path length without explicit calculation</li>
  <li>Loop exits when pointers meet or both become null</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Do not compare node values; compare node addresses</li>
  <li>Works only if lists may share actual nodes, not just values</li>
  <li>Handles different list lengths automatically</li>
  <li>Infinite loop occurs if pointer switching logic is wrong</li>
</ul>
`
}





              ],
              "Medium":[
                {
id: "237-delete-node-in-a-linked-list",
title: "237. Delete Node in a Linked List",
content: `

<h1>237. Delete Node in a Linked List</h1>
<p>Delete the given node from a singly linked list when only that node is provided.</p>

<h2>Approach (Overwrite Next Node Technique):</h2>
<ul>
  <li>You are not given the head, so direct deletion is impossible</li>
  <li>Copy the value of the next node into the current node</li>
  <li>Redirect current node’s next pointer to skip the next node</li>
  <li>Effectively removes the next node instead</li>
  <li>Works because the given node is guaranteed not to be the tail</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(1)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    void deleteNode(ListNode* node) {
        node-&gt;val = node-&gt;next-&gt;val;
        node-&gt;next = node-&gt;next-&gt;next;
    }
};
  </pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Overwrite current node’s value with next node’s value</li>
  <li>Bypass the next node by adjusting the pointer</li>
  <li>The list now behaves as if current node was deleted</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>This fails if the node is the last node (guaranteed not to happen)</li>
  <li>Actual deletion is impossible without head access</li>
  <li>Conceptually deletes the next node, not the given one</li>
  <li>No memory deallocation is required by problem constraints</li>
</ul>
`
},
{
id: "142-linked-list-cycle-ii",
title: "142. Linked List Cycle II",
content: `

<h1>142. Linked List Cycle II</h1>
<p>Return the node where the cycle begins in a linked list, or null if there is no cycle.</p>

<h2>Approach (Floyd’s Cycle Detection + Entry Point Logic):</h2>
<ul>
  <li>Use slow and fast pointers to detect cycle</li>
  <li>If no meeting occurs, there is no cycle</li>
  <li>After meeting, reset one pointer to head</li>
  <li>Move both pointers one step at a time</li>
  <li>The node where they meet again is the cycle start</li>
</ul>

<h2>Complexity:</h2>
<ul>
  <li>Time: O(n)</li>
  <li>Space: O(1)</li>
</ul>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (!head) return nullptr;

    ListNode* slow = head;
    ListNode* fast = head;

    while (fast &amp;&amp; fast-&gt;next) {
        slow = slow-&gt;next;
        fast = fast-&gt;next-&gt;next;
        if (slow == fast) {
            slow = head;
            while (slow != fast) {
                slow = slow-&gt;next;
                fast = fast-&gt;next;
            }
            return slow;
        }
    }
    return nullptr;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>First phase detects whether a cycle exists</li>
  <li>Pointer meeting confirms the presence of a cycle</li>
  <li>Reset one pointer to head</li>
  <li>Move both pointers at equal speed</li>
  <li>Their meeting point is the cycle entry</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Do not skip the initial cycle detection phase</li>
  <li>Resetting only one pointer is critical</li>
  <li>Works due to distance relationship in cycle math</li>
  <li>If no cycle, return null immediately</li>
  <li>HashSet solution is simpler but uses extra space</li>
</ul>
`
},
{
id: "328-odd-even-linked-list",
title: "328. Odd Even Linked List",
content: `

<h1>328. Odd Even Linked List</h1>

<p>Rearrange a linked list so that all nodes at odd indices come first, followed by nodes at even indices.</p>

<h2>Approach (Pointer Rewiring with Two Lists):</h2>
<ul>
  <li>Maintain separate pointers for odd and even positions</li>
  <li>Preserve the head of the even list for final attachment</li>
  <li>Rewire next pointers in a single pass</li>
  <li>Advance odd and even pointers alternately</li>
  <li>Attach even list after odd list</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
        if (!head || !head-&gt;next) return head;

    ListNode* odd = head;
    ListNode* even = head-&gt;next;
    ListNode* evenHead = even;

    while (even &amp;&amp; even-&gt;next) {
        odd-&gt;next = even-&gt;next;
        odd = odd-&gt;next;
        even-&gt;next = odd-&gt;next;
        even = even-&gt;next;
    }

    odd-&gt;next = evenHead;
    return head;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Initialize odd at head and even at second node</li>
  <li>Save evenHead to reconnect later</li>
  <li>Link odd nodes together by skipping even nodes</li>
  <li>Link even nodes together by skipping odd nodes</li>
  <li>Append even list after odd list</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Indexing is based on position, not value</li>
  <li>Do not create new nodes — only rewire pointers</li>
  <li>Forgetting <code>evenHead</code> loses even list</li>
  <li>Works correctly for both even and odd lengths</li>
  <li>Single-node and two-node lists remain unchanged</li>
</ul>
`
},
{
id: "19-remove-nth-node-from-end-of-list",
title: "19. Remove Nth Node From End of List",
content: `

<h1>19. Remove Nth Node From End of List</h1>

<p>Remove the nth node from the end of a singly linked list <strong>without using a dummy node</strong>.</p>

<h2>Approach (Two Pointers):</h2>
<ul>
  <li>Use two pointers starting from head</li>
  <li>Move <code>fast</code> pointer n steps ahead</li>
  <li>If <code>fast</code> becomes null, the head itself must be removed</li>
  <li>Otherwise move both pointers until <code>fast</code> reaches last node</li>
  <li>Remove node after <code>slow</code></li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* fast = head;
        ListNode* slow = head;

    while (n--) {
        fast = fast-&gt;next;
    }

    if (fast == nullptr) {
        return head-&gt;next;
    }

    while (fast-&gt;next) {
        fast = fast-&gt;next;
        slow = slow-&gt;next;
    }

    slow-&gt;next = slow-&gt;next-&gt;next;
    return head;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Advance <code>fast</code> by n nodes to create a gap</li>
  <li>If <code>fast</code> becomes null, target is the head</li>
  <li>Move both pointers together until <code>fast</code> is at last node</li>
  <li><code>slow</code> stops just before node to delete</li>
  <li>Rewire <code>slow-&gt;next</code> to skip the target node</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>This version needs an explicit head-deletion check</li>
  <li>Missing the <code>fast == nullptr</code> case causes runtime error</li>
  <li>More error-prone than dummy approach but valid</li>
  <li>Works in single pass</li>
  <li>Be careful with off-by-one in fast movement</li>
</ul>
`
},
{
id: "2095-delete-the-middle-node-of-a-linked-list",
title: "2095. Delete the Middle Node of a Linked List",
content: `

<h1>2095. Delete the Middle Node of a Linked List</h1>

<p>Delete the middle node of a singly linked list and return the modified list; if there are two middle nodes, delete the second one.</p>

<h2>Approach (Fast and Slow Pointers):</h2>
<ul>
  <li>Handle single-node list separately</li>
  <li>Use slow and fast pointers to locate middle</li>
  <li>Maintain a previous pointer to track node before slow</li>
  <li>Fast moves two steps, slow moves one step</li>
  <li>Delete the node pointed by slow</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
        if (!head || !head-&gt;next) return nullptr;

    ListNode* slow = head;
    ListNode* fast = head;
    ListNode* prev = nullptr;

    while (fast &amp;&amp; fast-&gt;next) {
        prev = slow;
        slow = slow-&gt;next;
        fast = fast-&gt;next-&gt;next;
    }

    prev-&gt;next = slow-&gt;next;
    return head;
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Return null for single-node list</li>
  <li>Use fast–slow pointers to reach middle</li>
  <li><code>prev</code> tracks node before slow</li>
  <li>Slow ends at middle node (second middle for even length)</li>
  <li>Bypass the middle node</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Single-node list must return null</li>
  <li>Even-length lists delete the second middle</li>
  <li>Forgetting <code>prev</code> makes deletion impossible</li>
  <li>Do not use extra passes to count length</li>
  <li>One-pass solution is optimal</li>
</ul>
`
},
{
id: "148-sort-list",
title: "148. Sort List",
content: `

<h1>148. Sort List</h1>

<p>Sort a singly linked list in ascending order with optimal time and space complexity.</p>

<h2>Approach (Merge Sort on Linked List):</h2>
<ul>
  <li>Use slow–fast pointers to split the list into two halves</li>
  <li>Recursively sort each half</li>
  <li>Merge two sorted linked lists</li>
  <li>Base case: empty list or single node</li>
  <li>Avoid extra arrays to keep space minimal</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n log n)</p>
<p>Space: O(log n) (recursion stack, ignoring output)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>
class Solution {
public:
    ListNode* merge(ListNode* l1, ListNode* l2) {
        ListNode dummy(0);
        ListNode* tail = &amp;dummy;
        while (l1 &amp;&amp; l2) {
            if (l1-&gt;val &lt;= l2-&gt;val) {
                tail-&gt;next = l1;
                l1 = l1-&gt;next;
            } else {
                tail-&gt;next = l2;
                l2 = l2-&gt;next;
            }
            tail = tail-&gt;next;
        }
        tail-&gt;next = l1 ? l1 : l2;
        return dummy.next;
    }

ListNode* sortList(ListNode* head) {
    if (!head || !head-&gt;next) return head;
    ListNode *slow = head, *fast = head-&gt;next;
    while (fast &amp;&amp; fast-&gt;next) {
        slow = slow-&gt;next;
        fast = fast-&gt;next-&gt;next;
    }
    ListNode* mid = slow-&gt;next;
    slow-&gt;next = nullptr;
    return merge(sortList(head), sortList(mid));
}

}; </pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Find the middle using slow–fast pointers</li>
  <li>Split the list into two halves</li>
  <li>Recursively sort both halves</li>
  <li>Merge two sorted lists using pointer manipulation</li>
  <li>Return merged sorted list</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Not breaking the list properly causes infinite recursion</li>
  <li>Using array-based sort violates space constraints</li>
  <li>Always handle empty and single-node lists</li>
  <li>Incorrect fast pointer initialization breaks mid finding</li>
</ul>
`
},
{
id: "2-add-two-numbers",
title: "2. Add Two Numbers",
content: `

<h1>2. Add Two Numbers</h1>

<p>Add two non-negative integers represented by reversed linked lists and return the sum as a linked list.</p>

<h2>Approach (Elementary Math with Carry):</h2>
<ul>
  <li>Traverse both lists simultaneously</li>
  <li>Add corresponding digits along with carry</li>
  <li>Store digit result as a new node</li>
  <li>Update carry for next position</li>
  <li>Continue until both lists and carry are exhausted</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(max(m, n))</p>
<p>Space: O(max(m, n)) ignoring output</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode dummy(0);
        ListNode* cur = &amp;dummy;
        int carry = 0;

    while (l1 || l2 || carry) {
        int sum = carry;
        if (l1) { sum += l1-&gt;val; l1 = l1-&gt;next; }
        if (l2) { sum += l2-&gt;val; l2 = l2-&gt;next; }
        carry = sum / 10;
        cur-&gt;next = new ListNode(sum % 10);
        cur = cur-&gt;next;
    }
    return dummy.next;
}

};</pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Dummy node simplifies head handling</li>
  <li>Loop continues while digits or carry exist</li>
  <li>Sum includes carry and current digits</li>
  <li>New node stores current digit</li>
  <li>Carry propagated to next iteration</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Lists of different lengths</li>
  <li>Final carry creating an extra node</li>
  <li>Do not modify input lists</li>
  <li>Missing carry handling causes WA</li>
</ul>
`
},
{
id: "61-rotate-list",
title: "61. Rotate List",
content: `

<h1>61. Rotate List</h1>

<p>Rotate a singly linked list to the right by k places.</p>

<h2>Approach (Linked List Cycle + Modulo Reduction):</h2>
<ul>
  <li>Handle empty list, single node, or k = 0 early</li>
  <li>Compute length of the list</li>
  <li>Reduce k using k % length</li>
  <li>Connect tail to head to form a cycle</li>
  <li>Break the cycle at the correct new tail position</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (!head || !head-&gt;next || k == 0) return head;

    int len = 1;
    ListNode* tail = head;
    while (tail-&gt;next) {
        tail = tail-&gt;next;
        len++;
    }

    k %= len;
    if (k == 0) return head;

    tail-&gt;next = head;
    int steps = len - k;
    ListNode* newTail = head;
    while (--steps) {
        newTail = newTail-&gt;next;
    }

    ListNode* newHead = newTail-&gt;next;
    newTail-&gt;next = nullptr;
    return newHead;
}

};</pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Return early for trivial cases</li>
  <li>Traverse list to find length and tail</li>
  <li>Reduce unnecessary rotations using modulo</li>
  <li>Form a circular list by linking tail to head</li>
  <li>Find new tail and break the cycle to get new head</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Forgetting k % length causes TLE</li>
  <li>Not handling k = 0 leads to wrong answer</li>
  <li>Breaking the cycle at wrong node shifts list incorrectly</li>
  <li>Single-node list must be returned as-is</li>
</ul>
`
},
{
id: "138-copy-list-with-random-pointer",
title: "138. Copy List with Random Pointer",
content: `

<h1>138. Copy List with Random Pointer</h1>

<p>Create a deep copy of a linked list where each node has a next pointer and a random pointer.</p>

<h2>Approach (In-Place Node Weaving):</h2>
<ul>
  <li>Insert cloned nodes immediately after their original nodes</li>
  <li>Use original.random.next to assign cloned random pointers</li>
  <li>Separate the interleaved list into original and cloned lists</li>
  <li>Avoid extra hash maps by exploiting adjacency</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (!head) return nullptr;

    Node* cur = head;
    while (cur) {
        Node* copy = new Node(cur->val);
        copy->next = cur->next;
        cur->next = copy;
        cur = copy->next;
    }

    cur = head;
    while (cur) {
        if (cur->random)
            cur->next->random = cur->random->next;
        cur = cur->next->next;
    }

    Node* dummy = new Node(0);
    Node* copyCur = dummy;
    cur = head;

    while (cur) {
        copyCur->next = cur->next;
        cur->next = cur->next->next;
        copyCur = copyCur->next;
        cur = cur->next;
    }

    return dummy->next;
}

};</pre>

</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Interleave copied nodes between original nodes</li>
  <li>Set random pointers using original.random.next</li>
  <li>Extract copied list while restoring original list</li>
  <li>Return head of the deep-copied list</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Using hashmap is correct but violates O(1) space expectation</li>
  <li>Missing random null check causes runtime error</li>
  <li>Forgetting to restore original list corrupts input</li>
  <li>Traversal must jump two nodes at a time</li>
</ul>
`
}




              ]
            },
            "BIT MANIPULATION PROBLEMS":{
              "Easy":[
                {
id: "231-power-of-two",
title: "231. Power of Two",
content: `

<h1>231. Power of Two</h1>

<p>Determine whether a given integer is a power of two.</p>

<h2>Approach (Bit Manipulation):</h2>
<ul>
  <li>Power of two has exactly one set bit in binary</li>
  <li>For n &gt; 0, n &amp; (n − 1) clears the lowest set bit</li>
  <li>If result becomes zero, only one bit was set</li>
  <li>Reject zero and negative numbers explicitly</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(1)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    bool isPowerOfTwo(int n) {
        return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) == 0;
    }
};</pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Check positivity to exclude zero and negatives</li>
  <li>Use bit trick to remove lowest set bit</li>
  <li>Validate that no other bits remain</li>
  <li>Return boolean result directly</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>n = 0 must return false</li>
  <li>Negative numbers are not powers of two</li>
  <li>Using log or loops is unnecessary and slower</li>
  <li>Bitwise solution is constant-time and exact</li>
</ul>
`
},
{
id: "2220-minimum-bit-flips-to-convert-number",
title: "2220. Minimum Bit Flips to Convert Number",
content: `

<h1>2220. Minimum Bit Flips to Convert Number</h1>

<p>Return the minimum number of bit flips required to convert integer start into integer goal.</p>

<h2>Approach (Bit Manipulation – XOR + Brian Kernighan’s Algorithm):</h2>
<ul>
  <li>XOR start and goal to identify differing bits</li>
  <li>Each set bit in XOR represents one required flip</li>
  <li>Repeatedly remove the lowest set bit using n &amp; (n − 1)</li>
  <li>Count how many times bits are removed</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(number of set bits)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    int minBitFlips(int start, int goal) {
        int x = start ^ goal;
        int cnt = 0;
        while (x) {
            x &amp;= (x - 1);
            cnt++;
        }
        return cnt;
    }
};
</pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>XOR computes positions where bits differ</li>
  <li>Loop runs once per set bit in XOR</li>
  <li>n &amp; (n − 1) clears the lowest set bit</li>
  <li>Counter tracks total flips required</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Loop complexity depends on number of differing bits, not 32</li>
  <li>Works correctly for all non-negative integers</li>
  <li>Avoids built-in functions for interview constraints</li>
  <li>Zero XOR means numbers are already equal</li>
</ul>
`
},
{
id: "136-single-number",
title: "136. Single Number",
content: `

<h1>136. Single Number</h1>

<p>Find the element that appears exactly once when every other element appears twice.</p>

<h2>Approach (Bit Manipulation – XOR):</h2>
<ul>
  <li>XOR of a number with itself becomes zero</li>
  <li>XOR of a number with zero remains unchanged</li>
  <li>XOR operation is associative and commutative</li>
  <li>XOR all elements to cancel out duplicates</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(1)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    int singleNumber(vector&lt;int&gt;&amp; nums) {
        int x = 0;
        for (int n : nums) {
            x ^= n;
        }
        return x;
    }
};</pre>
</div>

<h2>Code Explanation:</h2>
<ul>
  <li>Initialize accumulator with zero</li>
  <li>XOR each array element into accumulator</li>
  <li>Duplicate elements cancel each other</li>
  <li>Remaining value is the unique element</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Works only when every duplicate appears exactly twice</li>
  <li>Order of elements does not matter</li>
  <li>No extra memory or sorting needed</li>
  <li>Handles negative numbers correctly</li>
</ul>
`
},
{
id: "190-reverse-bits",
title: "190. Reverse Bits",
content: `<h1>190. Reverse Bits</h1>

<p>Reverse the bits of a given 32-bit unsigned integer.</p>
<h2>Approach (Bit Manipulation – Iterative Bit Reversal):</h2>
<ul>
<li>Extract the last bit using <code>n &amp; 1</code></li>
<li>Left shift result to make space for next bit</li>
<li>Append extracted bit using bitwise OR</li>
<li>Right shift original number to process next bit</li>
<li>Repeat exactly 32 times</li>
</ul>
<h2>Complexity:</h2>
<p>Time: O(1)</p>
<p>Space: O(1)</p>
<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>class Solution {
public:
    int reverseBits(int n) {
        unsigned int num = n;
        int ans = 0;
        for(int i = 0; i &lt; 32; i++) {
            ans = (ans &lt;&lt; 1) | (num &amp; 1);
            num &gt;&gt;= 1;
        }
        return ans;
    }
};</pre>
</div>
<h2>Code Explanation:</h2>
<ul>
<li>Store input in unsigned int to avoid sign-extension during right shift</li>
<li>Initialize ans as 0</li>
<li>Iterate 32 times to process all bits</li>
<li>Shift ans left and append last bit of num</li>
<li>Right shift num to move to next bit</li>
</ul>
<h2>Key Insights / Edge Cases:</h2>
<ul>
<li>Directly shifting signed negative numbers causes arithmetic shift issues</li>
<li>Must iterate full 32 times even if value becomes 0</li>
<li>Result may be negative due to MSB becoming 1</li>
<li>Behavior depends on 32-bit int assumption</li>
</ul>`
}





              ]
            },
            "STACK AND QUEUES PROBLEMS": {
              "Easy": [
                {
id: "225-implement-stack-using-queues",
title: "225. Implement Stack using Queues",
content: ` <h1>225. Implement Stack using Queues</h1> <p>Implement a LIFO stack using only queue operations.</p>


<h2>Approach (Single Queue Rotation Technique):</h2>
<ul>
  <li>Use one queue to simulate stack behavior</li>
  <li>Push element into queue</li>
  <li>Rotate previous elements to back to maintain LIFO order</li>
  <li>Pop and Top operate on front of queue</li>
  <li>Empty checks queue size</li>
</ul>

<h2>Complexity:</h2>
<p>Time:</p>
<p>Push: O(n)</p>
<p>Pop: O(1)</p>
<p>Top: O(1)</p>
<p>Space: O(n)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>#include &lt;bits/stdc++.h&gt;


using namespace std;

class MyStack {
private:
queue &lt;int&gt; q;

public:
MyStack() {}


void push(int x) {
    q.push(x);
    int sz = q.size();
    while (sz &gt; 1) {
        q.push(q.front());
        q.pop();
        sz--;
    }
}

int pop() {
    int val = q.front();
    q.pop();
    return val;
}

int top() {
    return q.front();
}

bool empty() {
    return q.empty();
}


};</pre> </div>


<h2>Code Explanation:</h2>
<ul>
  <li>Push inserts element and rotates earlier elements behind it</li>
  <li>Rotation ensures newest element stays at front</li>
  <li>Pop removes front element which represents stack top</li>
  <li>Top returns front element without removing</li>
  <li>Empty checks whether queue is empty</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Rotation count must be size-1, not size</li>
  <li>Do not create local queue inside constructor</li>
  <li>pop() must store front before removing</li>
  <li>Works only because queue preserves FIFO order consistently</li>
</ul>


`
},
{
id: "232-implement-queue-using-stacks",
title: "232. Implement Queue using Stacks",
content: ` <h1>232. Implement Queue using Stacks</h1> <p>Implement a FIFO queue using only stack operations.</p>


<h2>Approach (Two Stack Amortized Technique):</h2>
<ul>
  <li>Use one stack (in) for push operations</li>
  <li>Use second stack (out) for pop and peek operations</li>
  <li>When out is empty, transfer all elements from in to out</li>
  <li>Transfer reverses order to maintain FIFO</li>
  <li>Each element moves at most once between stacks</li>
</ul>

<h2>Complexity:</h2>
<p>Time:</p>
<p>Push: O(1)</p>
<p>Pop: Amortized O(1)</p>
<p>Peek: Amortized O(1)</p>
<p>Space: O(n)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>#include &lt;bits/stdc++.h&gt;


using namespace std;

class MyQueue {
private:
stack &lt;int&gt; inStack, outStack;


void transfer() {
    while (!inStack.empty()) {
        outStack.push(inStack.top());
        inStack.pop();
    }
}


public:
MyQueue() {}


void push(int x) {
    inStack.push(x);
}

int pop() {
    if (outStack.empty()) {
        transfer();
    }
    int val = outStack.top();
    outStack.pop();
    return val;
}

int peek() {
    if (outStack.empty()) {
        transfer();
    }
    return outStack.top();
}

bool empty() {
    return inStack.empty() && outStack.empty();
}


};</pre> </div>


<h2>Code Explanation:</h2>
<ul>
  <li>Push always inserts into inStack</li>
  <li>Transfer moves elements to outStack reversing order</li>
  <li>Pop removes top of outStack which represents queue front</li>
  <li>Peek returns top of outStack without removing</li>
  <li>Empty checks both stacks</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Do not transfer every time; only when outStack is empty</li>
  <li>Each element is transferred at most once → amortized O(1)</li>
  <li>Forgetting empty check before transfer causes errors</li>
  <li>Always check outStack first for pop/peek operations</li>
</ul>


`
},
{
id: "20-valid-parentheses",
title: "20. Valid Parentheses",
content: ` <h1>20. Valid Parentheses</h1> <p>Check whether a string of brackets is valid by ensuring correct order and matching pairs.</p>


<h2>Approach (Stack Matching Technique):</h2>
<ul>
  <li>Use stack to track opening brackets</li>
  <li>Push opening brackets onto stack</li>
  <li>On closing bracket, check top for matching type</li>
  <li>If mismatch or stack empty → invalid</li>
  <li>Valid if stack empty at end</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(n)</p>
<p>Space: O(n)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>#include &lt;bits/stdc++.h&gt;


using namespace std;

class Solution {
public:
bool isValid(string s) {
stack&lt;char&gt; st;


    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            
            char top = st.top();
            st.pop();
            
            if ((c == ')' &amp;&amp; top != '(') ||
                (c == '}' &amp;&amp; top != '{') ||
                (c == ']' &amp;&amp; top != '[')) {
                return false;
            }
        }
    }
    
    return st.empty();
}


};</pre> </div>


<h2>Code Explanation:</h2>
<ul>
  <li>Iterate through each character in string</li>
  <li>Push opening brackets into stack</li>
  <li>On closing bracket, check stack empty condition</li>
  <li>Compare popped element with expected matching bracket</li>
  <li>Return true only if stack is empty after traversal</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Odd length string can never be valid</li>
  <li>Must check stack empty before accessing top</li>
  <li>Extra opening brackets at end → invalid</li>
  <li>Closing bracket appearing first → invalid</li>
</ul>


`
}



              ],
              "Medium": [
                {
id: "155-min-stack",
title: "155. Min Stack",
content: ` <h1>155. Min Stack</h1> <p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>


<h2>Approach (Single Stack with Pair Technique):</h2>
<ul>
  <li>Store pair {value, currentMin} in one stack</li>
  <li>For each push, compute min(val, previousMin)</li>
  <li>First element stores itself as minimum</li>
  <li>Pop removes both value and its associated minimum</li>
  <li>getMin reads second element of top pair</li>
</ul>

<h2>Complexity:</h2>
<p>Time: O(1) per operation</p>
<p>Space: O(n)</p>

<h2>C++ Reference Code:</h2>
<div class="code-block">
  <pre>#include &lt;bits/stdc++.h&gt;


using namespace std;

class MinStack {
private:
stack&lt;pair&lt;long long, long long>&gt; st;

public:
MinStack() {}


void push(int val) {
    if (st.empty()) {
        st.push({val, val});
    } else {
        long long currentMin = min((long long)val, st.top().second);
        st.push({val, currentMin});
    }
}

void pop() {
    st.pop();
}

int top() {
    return st.top().first;
}

int getMin() {
    return st.top().second;
}


};</pre> </div>


<h2>Code Explanation:</h2>
<ul>
  <li>Stack stores both element and minimum till that point</li>
  <li>On push, compute new minimum using previous top</li>
  <li>First push initializes minimum as value itself</li>
  <li>Pop removes the top pair directly</li>
  <li>getMin returns stored minimum from top pair</li>
</ul>

<h2>Key Insights / Edge Cases:</h2>
<ul>
  <li>Must store previous minimum in each node</li>
  <li>Avoid computing min by scanning stack</li>
  <li>Works correctly with duplicate minimums</li>
  <li>No extra stack required, but memory per element increases</li>
</ul>


`
}

              ]
            }
            
        }
    }
};