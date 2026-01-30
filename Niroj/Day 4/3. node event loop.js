// 🔄 What is the Node.js Event Loop?

// The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations using a single thread.

// It continuously:

// Watches the call stack

// Picks callbacks from queues

// Executes them when the stack is empty

// 🧵 Why Event Loop Exists

// JavaScript is single-threaded

// Node must handle thousands of I/O operations

// Event loop enables async execution without blocking

// 🧠 High-Level Flow

// Execute synchronous code (Call Stack)

// Async tasks go to background (OS / thread pool)

// When done → callbacks are queued

// Event loop pushes callbacks to call stack

// Repeat 🔁

// 🗂️ Node.js Event Loop Phases (VERY IMPORTANT ⭐⭐⭐)

// Node event loop has 6 phases, executed in order:

// ┌─────────────────────────┐
// │ Timers                  │  → setTimeout, setInterval
// ├─────────────────────────┤
// │ Pending Callbacks       │  → system-level callbacks
// ├─────────────────────────┤
// │ Idle, Prepare           │  → internal
// ├─────────────────────────┤
// │ Poll                    │  → I/O callbacks (fs, http)
// ├─────────────────────────┤
// │ Check                   │  → setImmediate
// ├─────────────────────────┤
// │ Close Callbacks         │  → socket.close
// └─────────────────────────┘

// 🔁 Phase-by-Phase Explanation
// 1️⃣ Timers Phase

// Executes:

// setTimeout

// setInterval

// setTimeout(() => console.log("timeout"), 0);

// 2️⃣ Pending Callbacks

// Executes callbacks deferred from previous loop

// Mostly internal system operations

// 3️⃣ Idle / Prepare

// Used internally by Node

// Not important for interviews

// 4️⃣ Poll Phase ⭐⭐⭐ (MOST IMPORTANT)

// Executes I/O callbacks

// Waits for new I/O events

// Decides whether to:

// Continue polling

// Move to timers/check

// Example:

// fs.readFile("file.txt", () => {
//   console.log("file read");
// });

// 5️⃣ Check Phase

// Executes:

// setImmediate()

// setImmediate(() => console.log("immediate"));

// 6️⃣ Close Callbacks

// Cleanup callbacks

// Example:

// socket.on("close", () => {});

// ⚡ Microtask Queue (SPECIAL RULE)

// Microtasks run:

// After every phase

// Before moving to next phase

// Includes:

// Promise.then

// async/await

// process.nextTick (highest priority)

// Priority:

// process.nextTick
// ↓
// Promise microtasks
// ↓
// Event loop phases

// 🧪 Example (Classic Interview)
// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve().then(() => console.log("promise"));

// console.log("end");

// Output:
// start
// end
// promise
// timeout

// Why?

// Sync code → call stack

// Promise → microtask

// Timer → macrotask

// 🧠 setImmediate vs setTimeout
// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));


// 🟡 Order is not guaranteed
// Depends on poll phase timing

// ❗ Common Mistake

// ❌ Blocking the event loop:

// while(true) {}


// This blocks:

// Timers

// I/O

// Entire server 🚫

// 🧠 Interview One-Liner

// The Node.js event loop is responsible for executing asynchronous callbacks by continuously checking the call stack and processing tasks from different queues in defined phases without blocking the main thread.

// 🔑 Summary (Your Style)

// Node is single-threaded

// Event loop handles async work

// Sync code → call stack

// Async → queues

// Microtasks have higher priority

// Event loop runs in phases