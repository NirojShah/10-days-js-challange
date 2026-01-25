// map, filter, reduce — In Detail
// 1️⃣ map()

// 👉 Transforms each element of an array
// 👉 Returns a new array of same length

// Syntax
// array.map((item, index, arr) => newItem)

// Example
// const nums = [1, 2, 3];

// const doubled = nums.map(n => n * 2);

// console.log(doubled); // [2, 4, 6]

// Key Points

// Does not modify original array

// Length remains same

// Used when each item needs to be changed

// 2️⃣ filter()

// 👉 Selects elements based on a condition
// 👉 Returns a new array (shorter or same length)

// Syntax
// array.filter((item, index, arr) => boolean)

// Example
// const nums = [1, 2, 3, 4];

// const even = nums.filter(n => n % 2 === 0);

// console.log(even); // [2, 4]

// Key Points

// Condition must return true or false

// Used to remove unwanted elements

// Does not change original array

// 3️⃣ reduce() (MOST IMPORTANT ⚠️)

// 👉 Reduces array into single value
// 👉 Can return number, object, array, anything

// Syntax
// array.reduce((accumulator, current, index, arr) => {
//   return updatedAccumulator;
// }, initialValue);

// Example (Sum)
// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10

// 🔥 Real-World Reduce Examples
// Find Max
// const nums = [3, 7, 1, 9];

// const max = nums.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// }, nums[0]);

// Group By Property
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 20 },
//   { name: "C", age: 30 }
// ];

// const grouped = users.reduce((acc, user) => {
//   acc[user.age] = acc[user.age] || [];
//   acc[user.age].push(user);
//   return acc;
// }, {});

// 🧠 Interview Comparison
// Method	Use Case	Returns
// map	Transform data	New array
// filter	Select data	New array
// reduce	Aggregate data	Any value
// 💥 One-Liner Interview Answers

// map → transforms each element

// filter → filters elements based on condition

// reduce → reduces array to single value

// ⚠️ Common Mistakes

// ❌ Using map when you don’t return anything
// ❌ Using reduce without initial value
// ❌ Mutating accumulator wrongly

// 🔥 Practice (Try Now)
// Q1
// const arr = [1, 2, 3, 4];

// const result = arr
//   .map(n => n * 2)
//   .filter(n => n > 4);

// console.log(result);

// Q2
// const nums = [1, 2, 3, 4];

// const result = nums.reduce((acc, curr) => {
//   acc.push(curr * 2);
//   return acc;
// }, []);

// console.log(result);
