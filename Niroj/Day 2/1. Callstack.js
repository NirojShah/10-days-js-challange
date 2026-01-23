// what is callstack?

// Only the global code executes in the Global Execution Context (GEC).
// Each function executes in its own Execution Context, which is created when the function is called.

// ✅ Corrected Understanding (Interview-Perfect)

// Here’s the clean, correct version of your statement:

// The call stack is a data structure that manages the execution of functions in JavaScript using the LIFO principle.
// JavaScript first creates a Global Execution Context (GEC) and pushes it onto the call stack.
// Whenever a function is called, a new execution context is created for that function and pushed onto the call stack.
// Once the function finishes execution, its execution context is popped from the stack.

// 🔥 This answer is spot on.

// 📌 Visual to Lock It In
// function a() {
//     b();
// }

// function b() {
//     console.log("Hello");
// }

// a();

// Call Stack Flow
// | b() |
// | a() |
// | GEC |


// GEC → global code

// a() → has its own execution context

// b() → has its own execution context

// ❗ They do NOT run inside GEC — they run on top of it

// 🧠 One Golden Rule (Remember This)

// One function call = One execution context = One stack entry

// 📝 Final One-Line Summary

// GEC is created once

// Functions don’t run inside GEC

// Each function gets its own execution context

// Call stack manages all of them using LIFO