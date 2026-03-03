// 📘 MONGODB AGGREGATION PIPELINE – COMPLETE NOTES
// 🔹 1. What is Aggregation?
// ✅ Definition:

// Aggregation is a framework in MongoDB used to process data records and return computed results.

// It works in stages like a pipeline.

// Each stage:

// Takes input documents

// Processes them

// Passes output to next stage

// 🔹 Basic Syntax:
// db.collection.aggregate([
//    { stage1 },
//    { stage2 },
//    { stage3 }
// ])
// 🔹 Real Meaning:

// Raw Data → Filter → Transform → Group → Sort → Final Result

// Similar to:

// SQL GROUP BY

// Data Processing Pipeline

// 📘 2. TYPES OF AGGREGATION PIPELINE STAGES

// We will cover important stages professionally.

// 🔥 1️⃣ $match
// ✅ Definition:

// Filters documents (like SQL WHERE)

// ✅ Usage:

// Used to filter data before further processing.

// ✅ Syntax:
// {
//   $match: { condition }
// }
// ✅ Example:
// db.employees.aggregate([
//    { $match: { department: "Engineering" } }
// ])
// 🔥 2️⃣ $project
// ✅ Definition:

// Selects specific fields OR reshapes documents.

// ✅ Usage:

// Include fields

// Exclude fields

// Rename fields

// Create computed fields

// ✅ Syntax:
// {
//   $project: {
//      field1: 1,
//      field2: 1,
//      _id: 0
//   }
// }
// ✅ Example:
// db.employees.aggregate([
//   {
//     $project: {
//       name: 1,
//       salary: 1,
//       _id: 0
//     }
//   }
// ])
// 🔥 3️⃣ $group (VERY IMPORTANT)
// ✅ Definition:

// Groups documents by a field and performs calculations.

// ✅ Usage:

// Sum

// Average

// Count

// Min

// Max

// ✅ Syntax:
// {
//   $group: {
//      _id: "$fieldName",
//      newField: { $sum: "$field" }
//   }
// }
// ✅ Accumulators:

// $sum

// $avg

// $min

// $max

// $push

// $addToSet

// $count

// ✅ Example:
// db.employees.aggregate([
//   {
//     $group: {
//       _id: "$department",
//       totalSalary: { $sum: "$salary" }
//     }
//   }
// ])
// 🔥 4️⃣ $sort
// ✅ Definition:

// Sorts documents.

// ✅ Syntax:
// {
//   $sort: { field: 1 }   // ascending
// }
// {
//   $sort: { field: -1 }  // descending
// }
// 🔥 5️⃣ $limit
// ✅ Definition:

// Limits number of documents.

// { $limit: 5 }
// 🔥 6️⃣ $skip
// ✅ Definition:

// Skips documents (used in pagination).

// { $skip: 10 }
// 🔥 7️⃣ $lookup (JOIN)
// ✅ Definition:

// Performs left outer join with another collection.

// ✅ Syntax:
// {
//   $lookup: {
//      from: "collectionName",
//      localField: "field",
//      foreignField: "field",
//      as: "resultArray"
//   }
// }
// 🔥 8️⃣ $unwind
// ✅ Definition:

// Breaks array into multiple documents.

// ✅ Example:
// {
//   $unwind: "$skills"
// }
// 🔥 9️⃣ $addFields
// ✅ Definition:

// Adds new fields to documents.

// {
//   $addFields: {
//     bonus: { $multiply: ["$salary", 0.10] }
//   }
// }
// 🔥 1️⃣0️⃣ $facet (Advanced)
// ✅ Definition:

// Runs multiple pipelines in parallel.

// Used in dashboards.

// 🔥 1️⃣1️⃣ $bucket
// ✅ Definition:

// Groups documents into ranges.

// Used for analytics (salary ranges, age ranges).

// 📘 3. PRACTICE DATABASE

// Now create database:

// use companyDB
// 📘 4. INSERT PRACTICE DATA
// Collection: employees
// db.employees.insertMany([
//   {
//     name: "Niroj",
//     age: 25,
//     department: "Engineering",
//     salary: 60000,
//     skills: ["Java", "MongoDB", "React"],
//     performanceScore: 8
//   },
//   {
//     name: "Amit",
//     age: 30,
//     department: "Engineering",
//     salary: 80000,
//     skills: ["Node", "MongoDB"],
//     performanceScore: 9
//   },
//   {
//     name: "Rahul",
//     age: 28,
//     department: "HR",
//     salary: 40000,
//     skills: ["Communication"],
//     performanceScore: 7
//   },
//   {
//     name: "Priya",
//     age: 32,
//     department: "Sales",
//     salary: 70000,
//     skills: ["Negotiation", "Excel"],
//     performanceScore: 9
//   },
//   {
//     name: "Sneha",
//     age: 27,
//     department: "Engineering",
//     salary: 75000,
//     skills: ["React", "Node"],
//     performanceScore: 6
//   }
// ])
// Collection: projects
// db.projects.insertMany([
//   {
//     name: "Project A",
//     department: "Engineering",
//     budget: 200000
//   },
//   {
//     name: "Project B",
//     department: "HR",
//     budget: 50000
//   },
//   {
//     name: "Project C",
//     department: "Sales",
//     budget: 100000
//   }
// ])
// 📘 5. PRACTICE QUESTIONS

// Now you write queries.

// 🟢 BASIC LEVEL

// Find employees from Engineering department.

// Show only name and salary.

// Find employees with salary > 70000.

// Sort employees by salary descending.

// Show top 2 highest paid employees.

// 🟡 INTERMEDIATE LEVEL

// Find average salary per department.

// Count employees in each department.

// Find maximum salary in each department.

// Find total salary of company.

// List all unique skills.

// 🔵 ADVANCED LEVEL

// Count employees per skill.

// Join employees with projects using department.

// Find department with highest total salary.

// Find employees whose performanceScore > 8.

// Add bonus field (10% salary) and show it.

// 🔴 PROFESSIONAL LEVEL

// Pagination query (page 1, 2 records per page)

// Salary range bucket (0-50k, 50k-75k, 75k-100k)

// Top performing employee in each department.

// Departments having more than 1 employee.

// Total project budget per department using $lookup.

// Now we will do this properly.