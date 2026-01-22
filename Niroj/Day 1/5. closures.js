// 🔥 What is a Closure?
// 📌 Official Definition

// A closure is a function that remembers variables from its lexical scope even after the outer function has finished execution.

// 📌 Simple Definition

// A closure allows a function to access variables from its parent scope, even when that parent function is no longer running.

// 🧠 First, understand Lexical Scope (VERY IMPORTANT)
// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer(); // 10


// ✔ inner() can access x
// ✔ Scope is decided by where the function is written

// This is lexical scoping, and closures are built on top of it.

// 🔥 Closure Example (Core Concept)
// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const fn = outer();
// fn(); // 1
// fn(); // 2
// fn(); // 3

// WHAT HAPPENED?

// outer() finished execution

// Normally, variables should be destroyed

// ❌ But count is still remembered

// ✅ Because inner() closed over count

// 📌 This is a closure

// 🧠 Behind the Scenes (HOW closures work)

// When outer() runs:

// JS creates a Lexical Environment

// count lives inside it

// When outer() returns inner:

// inner keeps a reference to outer’s lexical environment

// JS does not garbage collect it

// 📌 Variables are kept as long as they are referenced

// 🔥 Classic Interview Example (setTimeout + var)
// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// OUTPUT
// 4
// 4
// 4

// WHY?

// var creates one shared variable

// Closures capture the reference, not the value

// By execution time → i === 4

// ✅ Fix using let (Block Scope)
// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }


// ✔ New i per iteration
// ✔ Each closure gets its own copy

// ✅ Fix using Closure (IIFE) 🔥
// for (var i = 1; i <= 3; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     })(i);
// }


// ✔ Each iteration creates a new scope

// 🔥 Data Privacy using Closures
// function createCounter() {
//     let count = 0;

//     return {
//         increment() {
//             count++;
//             return count;
//         },
//         decrement() {
//             count--;
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1


// 📌 count is private
// 📌 Cannot be accessed directly

// 🔥 Closures in Real Life (VERY IMPORTANT)
// 1️⃣ Callbacks
// function fetchData(url) {
//     return function () {
//         console.log("Fetching from", url);
//     };
// }

// const apiCall = fetchData("/users");
// apiCall();

// 2️⃣ Event Listeners
// function attachListener() {
//     let count = 0;

//     document.addEventListener("click", () => {
//         count++;
//         console.log(count);
//     });
// }

// attachListener();


// 📌 count persists across clicks

// 3️⃣ setTimeout / setInterval
// function delayedMessage(msg) {
//     setTimeout(() => {
//         console.log(msg);
//     }, 1000);
// }

// delayedMessage("Hello");

// 4️⃣ React (VERY IMPORTANT FOR YOU 🔥)

// Hooks rely heavily on closures.

// function Counter() {
//     const [count, setCount] = React.useState(0);

//     function handleClick() {
//         setTimeout(() => {
//             console.log(count);
//         }, 1000);
//     }
// }


// 📌 Stale closure problem is common in React

// ⚠️ Common Closure Pitfalls (INTERVIEW TRAPS)
// ❓ Why does this print same value?
// function createFunctions() {
//     let arr = [];

//     for (var i = 0; i < 3; i++) {
//         arr.push(() => console.log(i));
//     }

//     return arr;
// }

// const fns = createFunctions();
// fns[0](); // 3
// fns[1](); // 3


// ✔ Shared closure over i

// ❓ Memory Leak Risk ⚠️
// function heavy() {
//     let bigData = new Array(1000000);

//     return function () {
//         console.log("still alive");
//     };
// }


// 📌 bigData won’t be garbage collected
// 📌 Closures keep memory alive

// 🔥 Closures vs Scope (IMPORTANT DIFFERENCE)
// Scope	Closure
// Compile-time	Runtime
// Defines accessibility	Preserves variables
// Static	Dynamic
// 🎯 One-Line Interview Definition

// A closure is created when a function retains access to its lexical scope even after the outer function has finished execution.

// ✅ Key Rules to Remember

// ✔ Closures capture variables by reference
// ✔ Functions remember where they were created
// ✔ Closures keep memory alive
// ✔ Used in callbacks, async code, React, and data privacy

// 🔥 Interview Confidence Booster

// If interviewer asks:

// “What is closure?”

// Best answer:

// “A closure is a function that remembers its outer variables via lexical scoping even after the outer function has returned.”