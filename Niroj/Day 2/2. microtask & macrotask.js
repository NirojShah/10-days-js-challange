// ⚡ Microtask Queue vs Macrotask Queue (IN DETAIL)
// 1️⃣ First, the Big Picture

// JavaScript has:

// One Call Stack

// Two main task queues

// 👉 Microtask Queue
// 👉 Macrotask Queue

// The Event Loop decides priority

// 2️⃣ Microtask Queue (🔥 HIGH PRIORITY)
// What goes into Microtask Queue?

// Promise.then

// Promise.catch

// Promise.finally

// async / await (after await)

// queueMicrotask

// MutationObserver

// When are Microtasks executed?

// Immediately after the Call Stack becomes empty
// Before ANY macrotask

// ⚠️ All microtasks must finish before moving on.

// Example
// console.log("A");

// Promise.resolve().then(() => console.log("B"));

// console.log("C");


// Output

// A
// C
// B

// 3️⃣ Macrotask Queue (🕒 LOWER PRIORITY)
// What goes into Macrotask Queue?

// setTimeout

// setInterval

// setImmediate (Node.js)

// DOM events

// I/O callbacks

// When are Macrotasks executed?

// Only after microtask queue is empty

// ⚠️ Executes ONE macrotask per loop iteration

// Example
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// console.log("C");


// Output

// A
// C
// B

// 4️⃣ Microtask vs Macrotask (Side-by-Side)
// Feature	Microtask	Macrotask
// Priority	🔥 High	🐢 Low
// Executes	Immediately	Later
// Runs	ALL at once	One per loop
// Examples	Promise, await	setTimeout
// Can starve?	❌ Yes	❌ No
// 5️⃣ Combined Example (Most Important)
// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve().then(() => console.log("promise"));

// console.log("end");

// Output
// start
// end
// promise
// timeout

// 6️⃣ Why Microtasks Run First? 🤔

// Because:

// Promises represent important state changes

// JS guarantees predictable async behavior

// Needed for async/await correctness

// 7️⃣ Microtask Starvation ⚠️ (VERY IMPORTANT)
// function infinite() {
//   Promise.resolve().then(infinite);
// }
// infinite();


// ❌ Macrotasks never run
// ❌ UI freezes

// 👉 Because microtasks are always prioritized

// 8️⃣ async / await = Microtasks (Remember This!)
// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// test();
// console.log("3");

// Output
// 1
// 3
// 2


// Because await pauses and schedules continuation as microtask

// 9️⃣ Interview One-Liner (MEMORIZE)

// Microtasks have higher priority than macrotasks and are fully executed before any macrotask is picked by the event loop.

// 🔑 Final Mental Formula
// Call Stack empty
// → Microtasks (ALL)
// → One Macrotask
// → Microtasks
// → One Macrotask
// → ...