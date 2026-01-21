// 🔥 Why do we need call, apply, and bind?

// Because in JavaScript:

// this depends on how a function is called

// Sometimes we want to manually control this

// 👉 call, apply, and bind let us explicitly set this.

// 🧠 Base Example (Understand First)
// function greet(city, country) {
//     console.log(`Hi, I am ${this.name} from ${city}, ${country}`);
// }

// const user = { name: "Niroj" };

// 1️⃣ call() 📞
// What is call()?

// Calls a function immediately, setting this explicitly.

// Syntax
// fn.call(thisArg, arg1, arg2, ...)

// Example
// greet.call(user, "Delhi", "India");
// // Hi, I am Niroj from Delhi, India


// ✔ Executes immediately
// ✔ Arguments passed comma-separated

// When to use call()

// Borrow a method

// Invoke function with a different this

// Method Borrowing Example 🔥
// const user1 = {
//     name: "Niroj",
//     greet() {
//         console.log(this.name);
//     }
// };

// const user2 = { name: "Rahul" };

// user1.greet.call(user2); // Rahul

// 2️⃣ apply() 📩
// What is apply()?

// Same as call(), but arguments are passed as an array.

// Syntax
// fn.apply(thisArg, [arg1, arg2])

// Example
// greet.apply(user, ["Mumbai", "India"]);
// // Hi, I am Niroj from Mumbai, India

// When to use apply()

// When arguments are already in an array

// Dynamic argument lists

// Real-world example 🔥
// const nums = [1, 2, 3, 4];
// const max = Math.max.apply(null, nums);
// console.log(max); // 4


// (Modern alternative: Math.max(...nums))

// 3️⃣ bind() 🔗 (MOST IMPORTANT)
// What is bind()?

// Returns a new function with this permanently bound.

// Syntax
// const boundFn = fn.bind(thisArg, arg1, arg2);

// Example
// const boundGreet = greet.bind(user, "Pune", "India");
// boundGreet();
// // Hi, I am Niroj from Pune, India


// ✔ Does NOT execute immediately
// ✔ Creates a new function

// Why bind() is important 🔥
// Losing this problem
// const user = {
//     name: "Niroj",
//     greet() {
//         console.log(this.name);
//     }
// };

// const fn = user.greet;
// fn(); // undefined

// Fix using bind()
// const fn = user.greet.bind(user);
// fn(); // Niroj

// 🔥 call vs apply vs bind (INTERVIEW TABLE)
// Feature	call	apply	bind
// Executes immediately	✅	✅	❌
// Arguments	Comma	Array	Comma / partial
// Returns	Function result	Function result	New function
// this binding	Temporary	Temporary	Permanent
// ⚠️ Important Rules & Edge Cases
// 1️⃣ Arrow functions & bind ❌

// Arrow functions cannot change this.

// const fn = () => console.log(this);
// fn.call({ a: 1 }); // still global


// ✔ Arrow functions ignore call/apply/bind

// 2️⃣ bind + new keyword 🔥
// function User(name) {
//     this.name = name;
// }

// const BoundUser = User.bind({});
// const u = new BoundUser("Niroj");

// console.log(u.name); // Niroj


// 📌 new overrides bind

// 3️⃣ Partial Application (Currying)
// function multiply(a, b) {
//     return a * b;
// }

// const double = multiply.bind(null, 2);
// console.log(double(5)); // 10

// 4️⃣ call/apply with null or undefined
// function test() {
//     console.log(this);
// }

// test.call(null);


// ✔ Non-strict → window
// ✔ Strict → null

// 🔥 Interview Traps
// ❓ Output?
// const obj = {
//     name: "Niroj",
//     greet() {
//         setTimeout(this.greet, 1000);
//     }
// };
// obj.greet();


// ❌ Infinite recursion / undefined

// ✅ Fix:
// setTimeout(this.greet.bind(this), 1000);

// ❓ Output?
// function show() {
//     console.log(this.x);
// }
// show.call({ x: 10 });


// ✔ 10

// 🎯 One-Line Interview Summary

// "call and apply invoke functions immediately with a chosen this, while bind returns a new function with permanently bound this."

// ✅ When to use what?

// ✔ Use call → known arguments
// ✔ Use apply → arguments in array
// ✔ Use bind → callbacks, event handlers, partial functions


