// a✅ Embedded vs Referenced Documents in MongoDB (Detailed)

// MongoDB is a NoSQL document database, so instead of tables + joins like SQL, MongoDB stores data as documents (JSON-like objects).

// When you have relationships between data, MongoDB gives you two main ways:

// 1️⃣ Embedded Documents (Denormalization)
// ✅ Meaning

// You store related data inside the same document.

// So instead of making a separate collection, you embed the child data directly.

// Example: Embedded Orders inside User
// {
//   _id: 1,
//   name: "Niroj",
//   email: "niroj@gmail.com",
//   orders: [
//     { orderId: 101, product: "Laptop", price: 50000 },
//     { orderId: 102, product: "Phone", price: 20000 }
//   ]
// }


// Here, orders are embedded inside the user document.

// ✅ When to Use Embedded Documents
// Best for:

// ✔ One-to-few relationships
// ✔ Data that is always used together
// ✔ Faster reads

// Example:

// User profile + address

// Blog post + comments (small)

// Product + specifications

// ✅ Advantages of Embedding
// 1. Faster Reads (No Join Needed)
// db.users.findOne({ _id: 1 })


// You get user + orders in one query.

// 2. Atomic Updates

// MongoDB updates are atomic at document level.

// So you can update:

// db.users.updateOne(
//   { _id: 1 },
//   { $push: { orders: { orderId: 103, product: "Tablet" } } }
// )


// No risk of inconsistency.

// 3. Simple Data Model

// Everything related is in one place.

// ❌ Disadvantages of Embedding
// 1. Document Size Limit (16MB)

// If embedded array grows too large → document becomes huge.

// Example:

// User has 50,000 orders → BAD

// 2. Duplication

// If the embedded data repeats, storage increases.

// 3. Hard to Query Deeply

// Searching inside large arrays is slower.

// 2️⃣ Referenced Documents (Normalization)
// ✅ Meaning

// You store related data in separate collections and connect using IDs.

// Example: Users and Orders Separate
// User Collection
// {
//   _id: 1,
//   name: "Niroj",
//   email: "niroj@gmail.com"
// }

// Orders Collection
// {
//   _id: 101,
//   userId: 1,
//   product: "Laptop",
//   price: 50000
// }


// Here, orders reference the user by userId.

// ✅ When to Use Referencing
// Best for:

// ✔ One-to-many (large) relationships
// ✔ Many-to-many relationships
// ✔ Data that grows continuously
// ✔ Data accessed independently

// Example:

// Users → Orders (huge)

// Students → Courses

// Posts → Likes

// ✅ Advantages of Referencing
// 1. Avoid Document Growth Problem

// Orders are stored separately, so user document stays small.

// 2. Better for Large Data

// Millions of orders? No issue.

// 3. Reusability

// Same document can be referenced multiple times.

// Example: Product referenced in many orders.

// ❌ Disadvantages of Referencing
// 1. Extra Queries / Joins Needed

// MongoDB doesn’t automatically join like SQL.

// You need:

// populate() in Mongoose

// $lookup in aggregation

// Example with Mongoose Populate
// Order.find().populate("userId")

// Example with Aggregation Lookup
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "userId",
//       foreignField: "_id",
//       as: "userDetails"
//     }
//   }
// ])

// 2. Not Atomic Across Collections

// Updating user + order together requires transactions.

// 🔥 Interview Question: Embedded vs Referenced?
// Quick Decision Rule:
// Question	Use Embedded	Use Referenced
// Data always used together?	✅ Yes	❌ No
// Relationship size is small?	✅ Yes	❌ No
// Relationship grows huge?	❌ No	✅ Yes
// Need separate access?	❌ No	✅ Yes
// Need joins/lookups?	❌ No	✅ Yes
// Need atomic update?	✅ Yes	❌ No
// ✅ Real-World Examples
// Embedded (Good)
// User + Address
// {
//   name: "Niroj",
//   address: {
//     city: "Delhi",
//     zip: 110001
//   }
// }


// Address is always needed with user → embed.

// Referenced (Good)
// User + Orders
// User: { _id: 1, name: "Niroj" }

// Order: { _id: 101, userId: 1, total: 5000 }


// Orders grow huge → reference.

// Hybrid Approach (Most Common)
// Product info embedded + user referenced
// {
//   _id: 201,
//   userId: 1,
//   items: [
//     { name: "Laptop", price: 50000 }
//   ]
// }


// This is what real companies do.

// ⭐ Most Asked Interview Questions
// Q1: Why not embed everything?

// Because document size limit and huge arrays.

// Q2: Why not reference everything?

// Because reads become slow due to multiple queries/lookups.

// Q3: What is best practice?

// Embed small, reference large.

// Q4: What does MongoDB recommend?

// Design schema based on query patterns, not relationships.

// 🎯 Final Summary (One Line)

// ✅ Embed when data is small + always together
// ✅ Reference when data is large + grows + independenta