// WHAT IS EVENT LOOP:

// 🔁 Event Loop in JavaScript — FULL EXPLANATION
// 1️⃣ Why Event Loop Exists

// JavaScript is single-threaded
// ➡️ It has only one Call Stack

// Problem:

// setTimeout(() => {
//   console.log("Hi");
// }, 1000);


// If JS waited here for 1 second ⏳
// 👉 the whole app would freeze ❌

// 💡 Event Loop exists to handle async code without blocking the call stack

// 2️⃣ Key Players (VERY IMPORTANT)

// Event Loop is NOT alone. It works with:

// 1️⃣ Call Stack
// 2️⃣ Web APIs (Browser APIs)
// 3️⃣ Callback Queue (Macrotask Queue)
// 4️⃣ Microtask Queue
// 5️⃣ Event Loop (the traffic controller)

// 3️⃣ Simple Mental Model
//         ┌──────────────┐
//         │  Call Stack  │
//         └──────┬───────┘
//                │
//         ┌──────▼───────┐
//         │  Event Loop  │
//         └──────┬───────┘
//      ┌─────────┴─────────┐
//      │                   │
// ┌────▼────┐        ┌─────▼─────┐
// │Microtask│        │Macrotask  │
// │ Queue   │        │ Queue     │
// └─────────┘        └───────────┘

// 4️⃣ What are Web APIs?

// Web APIs are provided by the browser, not JS itself.

// Examples:

// setTimeout

// setInterval

// fetch

// DOM events

// Promise handling

// 👉 When async code is encountered:

// It moves to Web APIs

// Call Stack becomes free

// 5️⃣ Basic Flow (Step-by-Step)
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// Execution Steps

// 1️⃣ console.log("Start") → Call Stack
// 2️⃣ setTimeout() → goes to Web API
// 3️⃣ console.log("End") → Call Stack
// 4️⃣ Call Stack is empty
// 5️⃣ Event Loop checks queues
// 6️⃣ Callback from queue moves to Call Stack
// 7️⃣ console.log("Timeout")

// Output:
// Start
// End
// Timeout

// 6️⃣ Macrotask Queue (Callback Queue)

// Contains:

// setTimeout

// setInterval

// DOM events

// setImmediate (Node)

// 👉 Executes after microtasks

// 7️⃣ Microtask Queue (HIGH PRIORITY)

// Contains:

// Promise.then / catch / finally

// queueMicrotask

// MutationObserver

// 💡 Microtasks run BEFORE macrotasks

// 8️⃣ Most Important Rule (🔥 INTERVIEW GOLD)

// Event Loop first empties the Call Stack → then Microtask Queue → then Macrotask Queue

// 9️⃣ Output-Based Example (VERY COMMON)
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

// Execution Order

// 1️⃣ A (sync)
// 2️⃣ D (sync)
// 3️⃣ C (microtask)
// 4️⃣ B (macrotask)

// Output:
// A
// D
// C
// B

// 🔟 Why Promises run first?

// Because:

// Microtask Queue has higher priority

// Event Loop drains it completely before macrotasks

// 1️⃣1️⃣ Infinite Microtask Danger ⚠️
// function loop() {
//   Promise.resolve().then(loop);
// }
// loop();


// ❌ Macrotasks never run
// ❌ UI freezes

// 👉 Microtasks can starve the event loop

// 1️⃣2️⃣ Event Loop in Node.js (Quick Note)
// Browser	Node
// Web APIs	libuv
// setTimeout	timers
// fetch	thread pool

// Concept is SAME.

// 1️⃣3️⃣ One-Line Definition (Interview)

// The Event Loop continuously checks whether the call stack is empty, then pushes tasks from the microtask queue first and the macrotask queue next into the call stack for execution.

// 🧠 Super Short Summary

// JS is single-threaded

// Async tasks go to Web APIs

// Callbacks go to Queues

// Event Loop moves them to Call Stack

// Microtasks > Macrotasks




// QUESTIONS

// ✅ QUESTION 1
// Your answer:
// A → D → C → B

// ✔ Correct

// Perfect. No notes needed.

// ✅ QUESTION 2
// Your answer:
// 1 → 5 → 3 → 4 → 2

// ✔ Correct

// You clearly understand microtask draining 👏

// ❌ QUESTION 3 (small mistake — very common)
// Code again:
// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise1");
// });

// Promise.resolve().then(() => {
//   console.log("promise2");
//   setTimeout(() => {
//     console.log("timeout inside promise");
//   }, 0);
// });

// console.log("end");

// Your answer:
// end → promise1 → promise2 → timeout → timeout inside promise

// ❌ Incorrect order of the last two
// ✅ Correct output:
// end
// promise1
// promise2
// timeout
// timeout inside promise


// ⚠️ WAIT — this looks the same, so why is this still important?

// 👉 Because your reasoning must be precise:

// Both setTimeout callbacks are macrotasks

// The first setTimeout is registered earlier

// FIFO order inside macrotask queue

// You got lucky here 😄 — but your logic was slightly off, not your result.

// ✔ Final result is correct, reasoning adjusted.

// ❌ QUESTION 4 (Classic async/await trap)
// Code:
// console.log("start");

// async function foo() {
//   console.log("foo start");
//   await Promise.resolve();
//   console.log("foo end");
// }

// foo();

// Promise.resolve().then(() => {
//   console.log("promise");
// });

// console.log("end");

// Your answer:
// start → foo start → end → promise → foo end

// ❌ Incorrect (order of microtasks)
// ✅ Correct Output:
// start
// foo start
// end
// foo end
// promise

// 🧠 WHY? (IMPORTANT)
// Key rule:

// await pauses the function and schedules the rest as a microtask

// Execution flow:

// 1️⃣ Sync:

// start
// foo start
// end


// 2️⃣ Microtasks queue:

// continuation of foo() → foo end

// Promise.then → promise

// 👉 await continuation is queued before .then()

// 📊 Final Score
// Question	Result
// Q1	✅ Perfect
// Q2	✅ Perfect
// Q3	⚠️ Correct output, weak reasoning
// Q4	❌ Wrong (very common mistake)

// 🔥 3.5 / 4 — excellent
// Most devs fail Q4 completely.

// 🧠 Golden Rules to Remember

// 1️⃣ Sync code first
// 2️⃣ Microtasks drained fully
// 3️⃣ await continuation is a microtask
// 4️⃣ Order matters inside queues
// 5️⃣ Timers are always last