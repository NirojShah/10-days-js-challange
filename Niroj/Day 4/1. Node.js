// 🌍 What is Node.js?

// Node.js is a JavaScript runtime environment that allows you to run JavaScript outside the browser, mainly on the server side.

// 👉 Before Node.js:

// JavaScript could only run in browsers (Chrome, Firefox, etc.)

// 👉 After Node.js:

// JavaScript can run on servers

// You can build APIs, servers, CLIs, real-time apps

// 🧠 What makes Node.js special?
// 1️⃣ Built on V8 Engine

// Node.js uses Google Chrome’s V8 engine

// V8 compiles JavaScript directly into machine code

// That’s why Node.js is fast

// 📌 Same engine as Chrome, but without the browser

// 2️⃣ Single-threaded but Highly Scalable

// Node.js runs on one main thread, but it can handle thousands of requests.

// How?
// 👉 Event-driven + non-blocking I/O

// Instead of waiting:

// Node delegates heavy tasks to the system

// Continues executing other code

// 3️⃣ Non-Blocking I/O (Core Concept ⭐)

// Traditional servers (like PHP, Java):

// One thread per request

// Thread waits → memory heavy

// Node.js:

// Uses async callbacks / promises

// Never blocks the main thread

// Example:

// fs.readFile("file.txt", () => {
//   console.log("File read");
// });
// console.log("Next task");


// Output:

// Next task
// File read

// 4️⃣ Event-Driven Architecture

// Node.js works on events.

// Request comes → event triggered

// Event loop listens

// Callback executed when ready

// This is powered by libuv (C++ library).

// 🔄 Node.js Architecture (High Level)
// Client Request
//      ↓
// Event Loop
//      ↓
// Non-blocking Operation
//      ↓
// Thread Pool / OS
//      ↓
// Callback / Promise resolved


// 📌 Thread pool is used for:

// File system

// Crypto

// DNS

// Compression

// (Default size: 4 threads)

// 🧵 Is Node.js Multi-threaded?

// ❌ JavaScript execution → Single-threaded

// ✅ Background tasks → Multi-threaded (via libuv)

// This is why Node.js feels fast but still has limits.

// ✅ Where Node.js is BEST

// ✔️ REST APIs
// ✔️ Real-time apps (chat, notifications)
// ✔️ Streaming apps
// ✔️ Microservices
// ✔️ I/O-heavy apps

// ❌ Where Node.js is NOT Ideal

// ❌ CPU-intensive tasks
// ❌ Heavy data processing
// ❌ Machine learning (without workers)

// (Use Worker Threads or separate services instead)

// 🆚 Node.js vs Browser JS (Quick Comparison)
// Feature	Browser JS	Node.js
// DOM	✅ Yes	❌ No
// File System	❌ No	✅ Yes
// OS Access	❌ No	✅ Yes
// Backend APIs	❌ No	✅ Yes
// 🔥 One-Line Interview Answer

// Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows running JavaScript on the server using an event-driven, non-blocking I/O model.








// PRACTICE

// const fs = require("fs")

// console.log("start")

// fs.readFile("./test.txt",(err,data)=>{
//     if(err){
//         console.log(err.message)
//         return;
//     }
//     console.log(String(data))
// })

// console.log("end")




















// 🔔 What is Event-Driven Architecture?

// Event-driven architecture means:

// The flow of the application is controlled by events instead of a fixed sequence of steps.

// In Node.js, nothing happens until an event occurs.

// 🧠 What is an Event?

// An event is just something that happens.

// Examples:

// A user sends an HTTP request

// A file finishes reading

// A timer completes

// A button is clicked

// A database query returns data

// 🧩 How Event-Driven Architecture Works

// There are 3 main parts:

// 1️⃣ Event Emitter (Producer)

// Emits (fires) an event

// 2️⃣ Event Loop (Listener)

// Constantly listens for events

// 3️⃣ Event Handler (Consumer)

// Function that runs when the event occurs

// 🔄 Simple Real-World Analogy
// 🍕 Restaurant Example

// You order food → event

// Chef continues cooking other orders

// When food is ready → event fired

// Waiter serves food → handler runs

// Chef doesn’t wait doing nothing → non-blocking

// 💻 Node.js Example
// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("order", () => {
//   console.log("Order received, preparing food");
// });

// emitter.emit("order");


// 📌 Output:

// Order received, preparing food

// 🌐 Event-Driven in Node.js (HTTP Example)
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello");
// });

// server.listen(3000);


// What’s happening?

// Request comes → event fired

// Callback handles it

// Server keeps listening for more requests

// ⚡ Why Node.js Uses Event-Driven Architecture
// ❌ Traditional (Blocking)

// One request blocks one thread

// Poor scalability

// ✅ Node.js (Event-Driven)

// Single thread

// Handles thousands of requests

// Efficient memory usage

// 🔄 Event-Driven vs Sequential Code
// Sequential (Blocking)
// readFile();
// processData();
// sendResponse();

// Event-Driven (Non-Blocking)
// readFile(() => {
//   processData();
// });
// sendResponse();


// Node moves on instead of waiting.

// 🧵 Relationship with Event Loop

// Event-driven architecture relies on the Event Loop

// Event loop:

// Listens for events

// Executes handlers when events occur

// 📌 Key Characteristics

// ✔️ Non-blocking
// ✔️ Asynchronous
// ✔️ Callback / Promise based
// ✔️ High scalability
// ✔️ Efficient resource usage

// 🧠 Interview-Ready One-Liner

// Event-driven architecture is a design where the application responds to events, and execution happens when events are emitted rather than following a fixed sequential flow.