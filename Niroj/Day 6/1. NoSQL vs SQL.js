// 🗄️ SQL vs NoSQL (in detail)
// 🔹 What is SQL?

// SQL databases are relational databases that store data in tables (rows & columns) and use structured schemas.

// Examples:

// MySQL

// PostgreSQL

// Oracle

// SQL Server

// 🔹 What is NoSQL?

// NoSQL databases are non-relational databases designed for flexibility, scalability, and high performance.

// Examples:

// MongoDB (Document)

// Redis (Key-Value)

// Cassandra (Wide-Column)

// Neo4j (Graph)

// 🧱 Data Structure Difference
// SQL
// Users Table
// +----+--------+----------+
// | id | name   | email    |
// +----+--------+----------+
// | 1  | Niroj  | a@x.com  |


// Fixed schema

// Strong relationships (joins)

// NoSQL (MongoDB)
// {
//   "_id": 1,
//   "name": "Niroj",
//   "email": "a@x.com",
//   "address": {
//     "city": "Delhi",
//     "pin": 110001
//   }
// }


// Schema-less / flexible

// Nested documents allowed

// 📐 Schema
// Feature	SQL	NoSQL
// Schema	Fixed	Dynamic
// Changes	Costly (ALTER)	Easy
// Validation	Strict	Application-level
// 🔗 Relationships
// SQL

// Uses foreign keys

// Supports JOINs

// Example:

// SELECT * FROM users u
// JOIN orders o ON u.id = o.user_id;

// NoSQL

// No joins (mostly)

// Uses:

// Embedding

// Referencing

// Example:

// {
//   "userId": 1,
//   "orders": [101, 102]
// }

// ⚖️ ACID vs BASE
// SQL → ACID

// Atomicity

// Consistency

// Isolation

// Durability

// ✔️ Strong consistency
// ✔️ Best for financial data

// NoSQL → BASE

// Basically Available

// Soft state

// Eventual consistency

// ✔️ High availability
// ✔️ Scales horizontally

// 📈 Scalability
// SQL

// Vertical scaling

// Bigger CPU/RAM

// Harder to scale distributed

// NoSQL

// Horizontal scaling

// Add more machines

// Built for distributed systems

// ⚡ Performance
// Scenario	Better Choice
// Complex joins	SQL
// High write throughput	NoSQL
// Large unstructured data	NoSQL
// Transactions	SQL
// 🔍 Query Language
// SQL
// SELECT * FROM users WHERE age > 25;

// NoSQL (MongoDB)
// db.users.find({ age: { $gt: 25 } })

// 🛡️ Transactions
// Feature	SQL	NoSQL
// Multi-row transactions	✅	❌ (limited)
// Rollback	✅	⚠️ Partial
// Constraints	Strong	Weak

// MongoDB supports transactions, but with performance tradeoffs.

// 📦 Use Cases
// Use SQL when:

// Banking systems

// ERP / HR systems

// E-commerce orders

// Data integrity is critical

// Use NoSQL when:

// Real-time analytics

// Chat apps

// Logging systems

// IoT data

// Content management

// 🧠 Real-World Example
// E-commerce App

// Users, Orders, Payments → SQL

// Product catalog, reviews, logs → NoSQL

// 👉 Many companies use both (polyglot persistence).

// ❌ Common Misconceptions

// ❌ NoSQL = No schema
// ✔️ It means flexible schema

// ❌ NoSQL is always faster
// ✔️ Depends on use case

// ❌ SQL can’t scale
// ✔️ It can, but harder

// 🎯 Interview-Ready Answer (Short & Crisp)

// “SQL databases are relational with fixed schemas and strong consistency, making them ideal for transactional systems. NoSQL databases are non-relational, schema-flexible, and designed for horizontal scalability and high availability. The choice depends on data structure, scalability needs, and consistency requirements.”

// If you want next, we can:

// Design SQL vs NoSQL for a real system

// Compare MongoDB vs MySQL

// Explain CAP theorem

// Do tough interview questions 😈