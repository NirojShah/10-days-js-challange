// Promise.resolve().then(()=>{
//     console.log("P1")
//     return Promise.resolve("testing")
// }).then(()=>{
//     console.log("P2")
// })

// setTimeout(()=>{
//     console.log("P3")
// },0)

// conver in async and await

// fetchData()
//   .then(res => processData(res))
//   .then(data => saveData(data))
//   .catch(err => console.log(err));

// async function fun() {
//     try{
//         const res = await fetchData();
//         const data = await saveData(res);
//         console.log(data)
//     }catch(err){
//         console.log(err.message)
//     }
// }

// Parralell execution

// Promise.all([
//   Promise.resolve("test1"),
//   Promise.resolve("test2"),
//   Promise.resolve("test3"),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));




// SET timeout try catch

// setTimeout(() => {
//     try{
//         console.log("start")
//         throw new Error("eeee")
//     }catch(err){
//         console.log(err)
//     }
// }, 1000);














// 🔮 1. Predict the Output (Async / Event Loop)
// Q1
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// Q2
// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// console.log("3");
// test();
// console.log("4");

// Q3
// Promise.resolve()
//   .then(() => {
//     console.log("P1");
//     return Promise.resolve();
//   })
//   .then(() => console.log("P2"));

// setTimeout(() => console.log("T1"), 0);

// Q4 (Tricky ⚠️)
// async function foo() {
//   console.log("start");
//   await setTimeout(() => console.log("timeout"), 0);
//   console.log("end");
// }

// foo();

// 🔁 2. Convert Promise Chains → async/await
// Q5
// fetchData()
//   .then(res => processData(res))
//   .then(data => saveData(data))
//   .catch(err => console.log(err));

// Q6
// getUser()
//   .then(user => {
//     return getPosts(user.id);
//   })
//   .then(posts => console.log(posts))
//   .catch(err => console.log(err));

// Q7 (Parallel execution ⚡)
// Promise.all([task1(), task2(), task3()])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// 🧠 3. Explain Event Loop (Verbal Questions)

// Answer these in your own words (interview style):

// Q8

// 👉 What happens when JavaScript encounters await?

// Q9

// 👉 Why do Promises run before setTimeout?

// Q10

// 👉 Does await block the call stack? Why or why not?

// Q11 (Common Trap ⚠️)

// 👉 Why doesn’t try...catch catch errors inside setTimeout?

// Q12 (One-liner)

// 👉 Explain the Event Loop in one sentence.

// When you’re ready:

// Send your answers

// I’ll verify + correct + add interview tips

// Then we’ll do 🔥 ultra-tricky output questions

// You’re honestly doing great—this is solid interview prep 🚀

// 1. A D C B
// 2. 3 1 4 2
// 3. P1 P2 T1
// 4. start timeout end
// 5. 
// async function fun() {
//      try{ 
//          const res = await fetchData(); 
//          const data = await saveData(res); 
//          console.log(data) 
//      }catch(err){ 
//          console.log(err.message) 
//      } 
//  }

// 6. get the posts

// 7. array of output [test1,test2,test3]

// 8. it executes it in micro task queue

// 9. because it has higher priority

// 10. no it does not block the call stack it execute the await line in the micro task queue

// 11. it catches the error

// 12. executes the async code without blocking the call stack

// Nice effort 👏
// You’re very close. I’ll go question by question, tell you correct / incorrect, fix it, and give you the exact interview wording.

// 🔮 1. Predict the Output
// Q1
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");

// ✅ Your Answer:
// A D C B


// ✅ Correct

// Q2
// console.log("3");
// test();
// console.log("4");

// ✅ Your Answer:
// 3 1 4 2


// ✅ Correct

// Q3
// Promise.resolve()
//   .then(() => {
//     console.log("P1");
//     return Promise.resolve();
//   })
//   .then(() => console.log("P2"));

// setTimeout(() => console.log("T1"), 0);

// ✅ Your Answer:
// P1 P2 T1


// ✅ Correct

// Q4 (TRICKY ⚠️)
// async function foo() {
//   console.log("start");
//   await setTimeout(() => console.log("timeout"), 0);
//   console.log("end");
// }

// foo();

// ❌ Your Answer:
// start timeout end

// ✅ Correct Output:
// start
// end
// timeout

// 🔍 WHY?

// setTimeout does NOT return a Promise

// await pauses only for Promises

// await setTimeout(...) resolves immediately

// timeout runs later as a macrotask

// 💡 Interview Trap Question

// 🔁 2. Convert Promise Chains → async/await
// Q5

// ❌ Small mistake in logic

// Original:

// fetchData()
//   .then(res => processData(res))
//   .then(data => saveData(data))

// ✅ Correct Version:
// async function fun() {
//   try {
//     const res = await fetchData();
//     const processed = await processData(res);
//     await saveData(processed);
//   } catch (err) {
//     console.log(err);
//   }
// }

// Q6

// ❌ Incomplete answer

// ✅ Correct Answer:
// async function getPostsData() {
//   try {
//     const user = await getUser();
//     const posts = await getPosts(user.id);
//     console.log(posts);
//   } catch (err) {
//     console.log(err);
//   }
// }

// Q7

// ❌ Output description is incorrect

// ✅ Correct Explanation:
// Promise.all([task1(), task2(), task3()])


// ✔ Returns a single Promise
// ✔ Resolves to an array of resolved values
// ✔ Rejects if any promise fails

// 📌 Output example:

// [result1, result2, result3]

// 🧠 3. Event Loop (Verbal)
// Q8

// ❌ Your Answer:

// it executes it in micro task queue

// ✅ Correct:

// When JavaScript encounters await, it pauses the async function and moves the remaining code into the microtask queue once the Promise resolves.

// Q9

// ❌ Too short

// ✅ Correct:

// Promises run before setTimeout because promise callbacks are placed in the microtask queue, which has higher priority than the macrotask queue.

// Q10

// ❌ Slightly incorrect wording

// ✅ Correct:

// await does not block the call stack. It pauses only the async function, allowing other synchronous code to execute.

// Q11 (IMPORTANT ⚠️)

// ❌ Your Answer:

// it catches the error ❌

// ✅ Correct:

// try...catch does not catch errors inside setTimeout because the callback runs in a different execution context, after the try block has already finished.

// Q12 (One-liner)

// ❌ Too vague

// ✅ Interview-Perfect Answer:

// The Event Loop continuously checks the call stack and executes tasks from the microtask and macrotask queues without blocking the main thread.

// 🎯 Final Verdict

// ✅ Core concepts: STRONG
// ⚠️ Need polish on:

// await + non-Promise

// Error handling with async callbacks

// Verbal precision (interview style)