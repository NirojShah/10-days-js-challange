// 📌 What is Indexing?

// Indexing is a data structure technique used by databases to speed up data retrieval.

// 👉 Instead of scanning the entire table/collection, the database uses an index to find data faster — just like a book index.

// 📖 Simple Analogy

// 📘 Without Index
// To find a word → scan every page → slow

// 📘 With Index
// Go to index → jump directly to page → fast

// 🗄️ Indexing in Databases

// Indexes are usually stored as B-Tree (SQL) or B-Tree / Hash (MongoDB)

// They point to the actual row/document location

// ⚡ Why Indexing is Important?

// ✅ Faster SELECT queries
// ✅ Faster WHERE, JOIN, ORDER BY
// ❌ Slightly slower INSERT, UPDATE, DELETE
// ❌ Extra memory usage

// 🧮 Example (SQL)
// Without Index
// SELECT * FROM users WHERE email = 'test@gmail.com';


// ⏳ Full table scan

// Create Index
// CREATE INDEX idx_users_email ON users(email);

// With Index
// SELECT * FROM users WHERE email = 'test@gmail.com';


// ⚡ Uses index → much faster

// 🍃 Indexing in MongoDB
// Create Index
// db.users.createIndex({ email: 1 });

// Unique Index
// db.users.createIndex({ email: 1 }, { unique: true });

// 🔑 Types of Indexes
// 1️⃣ Primary Index

// Automatically created

// On primary key (id)

// PRIMARY KEY (id)

// 2️⃣ Secondary Index

// Manually created

// On non-primary fields

// CREATE INDEX idx_name ON users(name);

// 3️⃣ Unique Index

// Prevents duplicate values

// CREATE UNIQUE INDEX idx_email ON users(email);

// 4️⃣ Composite Index (Very Important 🔥)

// Index on multiple columns

// CREATE INDEX idx_user_age_city ON users(age, city);


// ✔ Works best when query uses left-most column first

// WHERE age = 25 AND city = 'Delhi'  ✅
// WHERE city = 'Delhi'               ❌

// 5️⃣ Text Index (MongoDB)

// Used for search

// db.posts.createIndex({ title: "text", description: "text" });

// 6️⃣ Hash Index (MongoDB)

// Used for equality checks

// 🧠 Indexing Internals (Interview Gold)

// Uses B-Tree → O(log n)

// Avoids full table scan

// Stores sorted pointers

// Index lookup → record fetch

// ⚠️ When NOT to Use Index?

// ❌ On small tables
// ❌ On frequently updated columns
// ❌ On low-cardinality fields (e.g. gender)

// 🔍 How to Check Index Usage
// SQL
// EXPLAIN SELECT * FROM users WHERE email = 'a@gmail.com';

// MongoDB
// db.users.find({ email: "a@gmail.com" }).explain("executionStats");

// 🔐 Indexing + Real Project Example

// Index email → login fast

// Index userId + createdAt → pagination

// Unique index → prevent duplicate users

// 🧠 One-Line Interview Answer

// “Indexing is a technique that improves query performance by allowing the database to locate data quickly without scanning the entire table.”