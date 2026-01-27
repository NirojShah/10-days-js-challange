// 🔁 CommonJS vs ES Modules

// Node.js supports two module systems:

// CommonJS (CJS) → older, default in Node

// ES Modules (ESM) → modern JavaScript standard

// 📦 What is a Module?

// A module is a file with its own scope.
// We use modules to:

// Split code

// Reuse logic

// Maintain clean architecture

// 🟦 CommonJS (CJS)
// 📌 Introduced by

// Node.js (before ES6)

// 📥 Import
// const fs = require("fs");
// const add = require("./add");

// 📤 Export
// module.exports = add;
// // or
// exports.add = add;

// 🔧 Example

// add.js

// function add(a, b) {
//   return a + b;
// }

// module.exports = add;


// index.js

// const add = require("./add");
// console.log(add(2, 3));

// 🧠 Key Characteristics

// ✔️ Synchronous loading
// ✔️ require() is a function
// ✔️ Dynamic imports allowed
// ✔️ Default in Node.js
// ❌ Not supported in browsers

// 🟩 ES Modules (ESM)
// 📌 Introduced in

// ES6 (2015)

// Native in browsers & modern Node

// 📥 Import
// import fs from "fs";
// import { add } from "./add.js";

// 📤 Export
// export function add(a, b) {
//   return a + b;
// }


// or

// export default add;

// 🔧 Example

// add.js

// export default function add(a, b) {
//   return a + b;
// }


// index.js

// import add from "./add.js";
// console.log(add(2, 3));

// 🧠 Key Characteristics

// ✔️ Asynchronous loading
// ✔️ Static imports
// ✔️ Tree-shaking supported
// ✔️ Browser compatible
// ❌ Needs config in Node

// ⚙️ Using ES Modules in Node.js
// Option 1️⃣ package.json
// {
//   "type": "module"
// }

// Option 2️⃣ File extension
// file.mjs

// ⚠️ Important Differences (Side-by-Side)
// Feature	CommonJS	ES Module
// Import	require()	import
// Export	module.exports	export
// Loading	Synchronous	Asynchronous
// Tree Shaking	❌ No	✅ Yes
// Browser Support	❌ No	✅ Yes
// Dynamic Import	✅ Yes	❌ No (static)
// Top-level await	❌ No	✅ Yes
// 🧪 Special Differences (Tricky ⭐⭐⭐)
// 1️⃣ this at top level

// CommonJS

// console.log(this); // {}


// ES Module

// console.log(this); // undefined

// 2️⃣ require vs import
// // CommonJS
// if (cond) {
//   const mod = require("./mod");
// }

// // ES Module ❌
// if (cond) {
//   import "./mod"; // SyntaxError
// }


// ESM imports are static

// 3️⃣ __dirname & __filename

// ❌ Not available in ESM

// ✅ Replacement:

// import { fileURLToPath } from "url";
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// 🧠 Which One Should You Use?
// Use CommonJS when:

// Old Node projects

// No build tools

// Simple scripts

// Use ES Modules when:

// Modern apps

// Frontend + backend

// Tree-shaking & performance

// New projects ✅

// 🎯 Interview One-Liner

// CommonJS is a Node-specific synchronous module system using require/module.exports, whereas ES Modules are the modern JavaScript standard using static import/export with better optimization and browser support.

// 🔥 Common Interview Question

// Q: Can we use both together?
// ✔️ Yes (with limitations)

// // CJS importing ESM
// const mod = await import("./esm.js");