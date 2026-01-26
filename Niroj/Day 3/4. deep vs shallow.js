// Shallow Copy vs Deep Copy in JavaScript
// 🔹 Shallow Copy

// 👉 Copies only the first level
// 👉 Nested objects still share the same reference

// Example
// const obj1 = {
//   name: "A",
//   address: {
//     city: "Delhi"
//   }
// };

// const obj2 = { ...obj1 }; // shallow copy

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city); // Mumbai ❌

// Why?

// address is still pointing to the same object

// Spread / Object.assign do not deep copy

// Ways That Create Shallow Copy
// { ...obj }
// Object.assign({}, obj)
// array.slice()
// [...array]

// 🔹 Deep Copy

// 👉 Copies all levels
// 👉 Nested objects get new references

// Example
// const obj1 = {
//   name: "A",
//   address: {
//     city: "Delhi"
//   }
// };

// const obj2 = structuredClone(obj1);

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city); // Delhi ✅

// 🔥 Deep Copy Methods
// 1️⃣ structuredClone() (BEST ✅)
// const deepCopy = structuredClone(obj);


// ✔ Handles nested objects
// ✔ Handles arrays, maps, sets
// ❌ Doesn’t support functions

// 2️⃣ JSON.parse(JSON.stringify()) (Common but ⚠️)
// const deepCopy = JSON.parse(JSON.stringify(obj));


// ❌ Loses:

// functions

// undefined

// Date

// Map, Set

// 3️⃣ Manual Recursive Copy (Interview Bonus ⭐)
// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") return obj;

//   const copy = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     copy[key] = deepClone(obj[key]);
//   }

//   return copy;
// }

// 🧠 Interview Comparison Table
// Feature	Shallow Copy	Deep Copy
// Nested reference	Shared	New
// Spread / assign	✅	❌
// JSON method	❌	⚠️
// structuredClone	❌	✅
// 💥 One-Liner Interview Answers

// Shallow copy → copies only top-level properties

// Deep copy → copies all nested objects

// ⚠️ Common Interview Traps
// ❓ Is spread operator deep copy?

// ❌ No — shallow only

// ❓ Does JSON method always work?

// ❌ No — data loss happens

// 🔥 Practice (Try Now)
// Q1
// const a = { x: { y: 1 } };
// const b = { ...a };

// b.x.y = 2;

// console.log(a.x.y);

// Q2
// const a = { date: new Date() };
// const b = JSON.parse(JSON.stringify(a));

// console.log(typeof b.date);