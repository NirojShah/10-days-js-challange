// 🔓 What is Non-Blocking I/O?

// Non-blocking I/O means:

// When Node.js starts an I/O operation (file, DB, network), it does NOT wait for it to finish.
// It continues executing other code and handles the result later when it’s ready.

// 👉 This is the backbone of Node.js performance.

// ❌ Blocking I/O (Traditional Way)
// const fs = require("fs");

// const data = fs.readFileSync("file.txt", "utf8");
// console.log(data);

// console.log("Done");

// What happens?

// File reading starts

// Everything stops

// File reading finishes

// Code continues

// ⛔ Server is blocked
// ⛔ Bad for scalability

// ✅ Non-Blocking I/O (Node.js Way)
// const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// console.log("Done");

// Output:
// Done
// <file content>

// What happens?

// File read starts

// Node moves on

// "Done" prints immediately

// File finishes → callback runs

// ✔️ Server stays responsive
// ✔️ No blocking

// 🧠 How Node.js Achieves This

// Node.js uses:

// Event loop

// Callback queue / Microtask queue

// Thread pool (libuv)

// Flow:

// I/O task is sent to OS / thread pool

// Call stack continues

// When task completes → event emitted

// Callback pushed to queue

// Event loop executes it

// 🌐 HTTP Server Example (Real World)
// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {
//   fs.readFile("data.json", (err, data) => {
//     res.end(data);
//   });
// }).listen(3000);


// 👉 While one request waits for file:

// Node can handle 1000 other requests

// That’s non-blocking power 💪

// 🔁 Blocking vs Non-Blocking (Side by Side)
// Feature	Blocking	Non-Blocking
// Execution	Waits	Continues
// Performance	Slow	Fast
// Scalability	Poor	Excellent
// Thread usage	One per request	Single thread
// ⚡ Async/Await = Non-Blocking (Still)
// async function readFileData() {
//   const data = await fs.promises.readFile("file.txt", "utf8");
//   console.log(data);
// }

// console.log("Start");
// readFileData();
// console.log("End");


// Output:

// Start
// End
// <file content>


// ⚠️ await looks blocking
// ✅ But it is still non-blocking

// ❗ Important Interview Clarification

// Node.js is single-threaded but NOT single-tasked

// Because:

// I/O runs in background

// Event loop handles results

// 🧠 One-Line Interview Answer

// Non-blocking I/O allows Node.js to start an I/O operation and continue executing other code without waiting, handling the result asynchronously when it’s ready.

// 🔥 When Node.js is NOT Good

// ❌ CPU-intensive tasks (heavy loops, crypto, ML)
// ✔️ I/O-intensive apps (APIs, chat, streaming)