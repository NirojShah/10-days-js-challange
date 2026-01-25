// Destructuring in JavaScript

// 👉 Destructuring allows you to extract values from arrays or objects into variables in a clean way.

// 1️⃣ Array Destructuring
// Basic Example
// const arr = [10, 20, 30];

// const [a, b, c] = arr;

// console.log(a, b, c); // 10 20 30

// Skipping Values
// const arr = [1, 2, 3, 4];

// const [a, , c] = arr;

// console.log(a, c); // 1 3

// Using Rest with Destructuring
// const arr = [1, 2, 3, 4];

// const [first, ...rest] = arr;

// console.log(rest); // [2, 3, 4]

// Default Values
// const arr = [1];

// const [a, b = 10] = arr;

// console.log(a, b); // 1 10

// 2️⃣ Object Destructuring
// Basic Example
// const user = {
//   name: "Niroj",
//   age: 25
// };

// const { name, age } = user;

// console.log(name, age);

// Renaming Variables
// const user = {
//   name: "Niroj"
// };

// const { name: userName } = user;

// console.log(userName);

// Default Values
// const user = {
//   name: "Niroj"
// };

// const { age = 30 } = user;

// console.log(age); // 30

// Nested Object Destructuring
// const user = {
//   name: "Niroj",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };

// const {
//   address: { city, pin }
// } = user;

// console.log(city, pin);

// Using Rest with Objects
// const user = {
//   name: "A",
//   age: 20,
//   city: "NY"
// };

// const { name, ...rest } = user;

// console.log(rest); // { age: 20, city: "NY" }

// 3️⃣ Destructuring in Function Parameters
// function greet({ name, age }) {
//   console.log(name, age);
// }

// greet({ name: "Niroj", age: 25 });

// 🔥 Interview Traps
// ❌ Wrong
// const { a, b } = null; // TypeError

// ❌ Wrong
// const [a, b, ...rest, c] = [1, 2, 3, 4];

// ✅ Correct
// const [a, b, ...rest] = [1, 2, 3, 4];

// 🧠 Interview One-Liners

// Array destructuring is position-based

// Object destructuring is key-based

// Rest must be last

// Destructuring does not mutate original data

// 🔥 Practice (Try Now)
// Q1
// const user = { name: "A", age: 20 };

// const { age: x, name: y } = user;

// console.log(x, y);

// Q2
// const arr = [1, 2, 3];

// const [a, , ...rest] = arr;

// console.log(a, rest);




// Send your answers and we’ll move to polyfills or memory concepts 🚀





















// ✅ Q1
// const user = { name: "A", age: 20 };

// const { age: x, name: y } = user;

// console.log(x, y);

// ✔ Correct Output
// 20 "A"

// 🔍 Why?

// age: x → x = 20

// name: y → y = "A"

// You answered "A", 20 (just reversed).

// ✅ Q2
// const arr = [1, 2, 3];

// const [a, , ...rest] = arr;

// console.log(a, rest);

// ✔ Output
// 1 [3]


// Perfect 👌

// 🎯 Key Takeaways (Interview Gold)

// Object destructuring is key-based, not order-based

// Renaming uses syntax: key: newVariable

// Rest collects remaining values into an array/object