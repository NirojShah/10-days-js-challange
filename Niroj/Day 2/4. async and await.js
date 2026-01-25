// What is async / await?

// async / await is syntactic sugar over Promises.
// It helps us write asynchronous code that looks synchronous, making it easier to read and debug.

// async

// Declares a function as asynchronous

// An async function always returns a Promise

// If you return a value → Promise is fulfilled

// If you throw an error → Promise is rejected

// async function foo() {
//   return 10;
// }

// foo().then(console.log); // 10

// await

// Used only inside an async function

// Pauses the execution of the async function until the Promise is resolved

// Does NOT block the call stack

// Under the hood → handled by micro task queue

// async function getData() {
//   const data = await fetchData();
//   console.log(data);
// }

// Execution Flow (VERY IMPORTANT)
// console.log("start");

// async function test() {
//   console.log("inside async");
//   await Promise.resolve();
//   console.log("after await");
// }

// test();
// console.log("end");

// Output:
// start
// inside async
// end
// after await

// Why?

// Sync code runs first

// await pauses async function

// Remaining async code goes to micro task queue

// Executes after call stack is empty

// Error Handling with async / await

// Use try...catch

// async function fetchData() {
//   try {
//     const res = await apiCall();
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   }
// }


// Equivalent to:

// promise.then().catch()

// await vs .then()
// async/await	.then()
// Cleaner & readable	Chain-heavy
// Easier error handling	Error handling can get messy
// Looks synchronous	Looks async
// Common Interview Traps 🚨

// ❌ await blocks JS thread
// ✅ It only pauses that async function

// ❌ async makes code faster
// ✅ It only improves readability

// ❌ await works outside async
// ✅ Syntax error



async function one(){
    console.log("start");
    const x = await Promise.resolve("testing")
    console.log("end")
}

console.log("start - main")
one()
console.log("end - main")


// Key Rule (memorize this)

// Only the code AFTER await goes to the microtask queue
// Code BEFORE await runs synchronously.