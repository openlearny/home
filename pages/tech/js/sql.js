const topics = {
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
