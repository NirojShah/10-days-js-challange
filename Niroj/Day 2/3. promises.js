// 🤝 Promises in JavaScript — COMPLETE GUIDE
// 1️⃣ What is a Promise? (Plain English)

// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// Think of it as:

// “I promise I’ll give you a result later”

// 2️⃣ Why Promises Were Introduced
// ❌ Before Promises (Callback Hell)
// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("done");
//     }, 1000);
//   }, 1000);
// }, 1000);


// 😵 Hard to read, hard to debug

// ✅ With Promises
// new Promise((resolve) => {
//   setTimeout(() => resolve("done"), 1000);
// })
// .then(result => console.log(result));


// ✔ Clean
// ✔ Chainable
// ✔ Error handling

// 3️⃣ Promise States (VERY IMPORTANT)

// A promise has 3 states:

// State	Meaning
// pending	Initial state
// fulfilled	Resolved successfully
// rejected	Failed

// ⚠️ Once settled (fulfilled/rejected) → state never changes

// 4️⃣ Creating a Promise
// const promise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });


// resolve() → fulfilled

// reject() → rejected

// 5️⃣ Consuming a Promise
// promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log("Done"));

// 6️⃣ Promise Execution Timing (🔥 IMPORTANT)
// console.log("start");

// const p = new Promise((resolve) => {
//   console.log("inside promise");
//   resolve("done");
// });

// console.log("end");

// Output:
// start
// inside promise
// end


// ⚠️ Promise executor runs immediately (sync)
// Only .then() is async (microtask)

// 7️⃣ Promise.then() is a Microtask
// console.log("A");

// Promise.resolve().then(() => console.log("B"));

// console.log("C");


// Output:

// A
// C
// B


// Because .then() → Microtask Queue

// 8️⃣ Promise Chaining (VERY IMPORTANT)
// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => x + 1)
//   .then(x => console.log(x));


// Output:

// 3


// 👉 Each .then() returns a new Promise

// 9️⃣ Error Handling in Promises
// Promise.resolve()
//   .then(() => {
//     throw new Error("Oops");
//   })
//   .then(() => console.log("Won't run"))
//   .catch(err => console.log(err.message));


// Output:

// Oops

// 🔟 Promise.resolve vs new Promise
// Promise.resolve(10); // creates fulfilled promise
// Promise.reject("err"); // creates rejected promise


// ✔ Shortcut
// ✔ Cleaner

// 1️⃣1️⃣ Promise.all (IMPORTANT)
// Promise.all([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(3)
// ]).then(values => console.log(values));


// Output:

// [1, 2, 3]


// ❌ If any promise fails → whole thing fails

// 1️⃣2️⃣ Promise.race
// Promise.race([
//   new Promise(res => setTimeout(res, 100, "A")),
//   new Promise(res => setTimeout(res, 50, "B"))
// ]).then(console.log);


// Output:

// B


// First settled wins (resolve or reject)

// 1️⃣3️⃣ Promise.allSettled
// Promise.allSettled([
//   Promise.resolve(1),
//   Promise.reject("err")
// ]).then(console.log);


// Output:

// [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected", reason: "err" }
// ]

// 1️⃣4️⃣ Promise.any
// Promise.any([
//   Promise.reject("err"),
//   Promise.resolve("ok")
// ]).then(console.log);


// Output:

// ok


// Fails only if all fail

// 1️⃣5️⃣ async / await (Promise Sugar)
// async function test() {
//   const data = await Promise.resolve("Hello");
//   console.log(data);
// }
// test();


// ✔ Cleaner syntax
// ✔ Still uses promises underneath

// 1️⃣6️⃣ Common Interview Traps ⚠️
// ❓ Is Promise synchronous?

// ❌ No
// ✔ Executor is sync, .then() is async

// ❓ Where does .then() go?

// ✔ Microtask Queue

// ❓ Can promise resolve twice?

// ❌ No

// 🧠 One-Line Interview Definition

// A Promise is an object that represents the eventual completion or failure of an asynchronous operation and allows handling results using then and catch.

// 🔑 Final Mental Model

// Promise created → executor runs sync

// .then() → microtask

// .catch() → microtask

// await → microtask continuation




//! RACE

Promise.race([
    new Promise(res=> setTimeout(res,1000,"first")),
    new Promise(res=> setTimeout(res,1000,"second")),
]).then((val)=>{
    // console.log(val)
})


// ALL

Promise.all([
    Promise.resolve("first"),
    Promise.resolve("second"),
    Promise.resolve("third"),
    Promise.reject("fourth")


]).then(val=>{
    // console.log(val)
}).catch((val)=>{
    // console.log(val)
})



// ALL SETTLED

Promise.allSettled([
    Promise.resolve("first"),
    Promise.resolve("second"),
    Promise.resolve("third"),
    Promise.reject("this is error"),
]).then((val)=>{
    // console.log(val)
})


Promise.any([
    // Promise.resolve("first"),
    Promise.reject("second"),
    Promise.resolve("third"),
]).then((val)=>{
    console.log(val)
})



