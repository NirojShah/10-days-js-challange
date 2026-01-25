// Error Handling in JavaScript (Async Focused)
// 1️⃣ Error Handling in Synchronous Code

// We use try...catch

// try {
//   let x = y; // y is not defined
// } catch (error) {
//   console.log(error.message);
// }

// 👉 If an error occurs in try, control moves to catch.

// 2️⃣ Error Handling in Promises

// We use .catch()

// const promise = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

// promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// 👉 .catch() handles rejected promises.

// 3️⃣ Error Handling with async / await (MOST IMPORTANT ⭐)

// We use try...catch

// async function test() {
//   try {
//     const data = await Promise.reject("Error occurred");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();

// ✅ Cleaner than .then().catch()

// 4️⃣ What if we DON’T handle the error?
// async function test() {
//   const data = await Promise.reject("Error");
// }

// test();

// ❌ Results in Unhandled Promise Rejection

// 5️⃣ Handling Multiple awaits
// async function test() {
//   try {
//     const a = await promise1();
//     const b = await promise2();
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// 👉 If any await fails, control jumps to catch.

// 6️⃣ finally Block (Optional but Good)
// try {
//   // code
// } catch (err) {
//   // handle error
// } finally {
//   console.log("Always runs");
// }

// Interview One-Liner 💥

// In async/await, errors are handled using try...catch, and any rejected Promise is caught just like a thrown error.

async function fun() {
  try {
    const a = await Promise.resolve("ehhhh");
    // const b = await Promise.reject("aaaaaaaagggg.");
    throw new Error("aaaaaaaaaaaaaggggg.")
    console.log("completed")
  } catch (error) {
    console.log(error);
  }
}

fun()