// 🔥 What is this in JavaScript?

// this refers to the object that is executing the current function.

// ⚠️ Important:

// this is NOT where the function is written

// this is decided at runtime

// It depends on HOW the function is called

// 🧠 Golden Rule (REMEMBER THIS)

// this is determined by the call-site, not the declaration.

// 📌 Where does this behave differently?

// this depends on 5 main scenarios:

// Global context

// Function (normal function)

// Method (object function)

// Arrow function

// call / apply / bind
// (+ constructor & classes)

// We’ll cover all.

// 1️⃣ this in Global Scope
// In Browser
// console.log(this);

// ✔ Output → window

// var a = 10;
// console.log(this.a); // 10

// ⚠️ var attaches to window

// let b = 20;
// console.log(this.b); // undefined

// In Node.js
// console.log(this);

// ✔ Output → {} (module object)

// 📌 this is environment-dependent

// 2️⃣ this inside a Normal Function
// Non–strict mode
// function test() {
//     console.log(this);
// }
// test();

// ✔ Browser → window

// Strict mode
// "use strict";

// function test() {
//     console.log(this);
// }
// test();

// ❌ Output → undefined

// 📌 Strict mode removes default binding

// 3️⃣ this inside an Object (Method Call) 🔥
// const user = {
//     name: "Niroj",
//     greet() {
//         console.log(this.name);
//     }
// };

// user.greet(); // "Niroj"

// ✔ this → object before the dot

// ❌ Common Trap
// const user = {
//     name: "Niroj",
//     greet() {
//         function inner() {
//             console.log(this.name);
//         }
//         inner();
//     }
// };

// user.greet(); // undefined

// WHY?

// inner() is a normal function

// Loses object context

// this → window / undefined

// ✅ Fix using arrow function
// const user = {
//     name: "Niroj",
//     greet() {
//         const inner = () => {
//             console.log(this.name);
//         };
//         inner();
//     }
// };

// user.greet(); // "Niroj"

// 4️⃣ this in Arrow Functions (VERY IMPORTANT 🔥🔥)

// Arrow functions do NOT have their own this.
// They inherit this from their lexical parent.

// Example
// const user = {
//     name: "Niroj",
//     greet: () => {
//         console.log(this.name);
//     }
// };

// user.greet(); // undefined

// WHY?

// Arrow function takes this from global scope

// Global has no name

// 📌 ❌ Never use arrow functions as object methods

// Correct usage
// const user = {
//     name: "Niroj",
//     greet() {
//         const sayHi = () => {
//             console.log(this.name);
//         };
//         sayHi();
//     }
// };

// user.greet(); // "Niroj"










// PRACTICE - 

const x = {
  Name: "niroj",
  greet() {
    console.log(this.Name);
  },
};


// x.greet() // niroj

const y = {
    Name: "niroj",
    greet(){
        function inner(){
            console.log(this.Name)
        }
        inner()
    }
}

y.greet() // undefined





// 🎯 One-Line Interview Summary

// "this refers to the object calling the function, is decided at runtime, and arrow functions inherit this lexically instead of creating their own."

// ✅ Practical Rules (REMEMBER THESE)

// ✔ Use normal functions for object methods
// ✔ Use arrow functions for callbacks
// ✔ Use bind when passing methods
// ✔ Never guess this — check the call-site








// 9️⃣ Order of this Resolution (INTERVIEW GOLD 🔥)

// JavaScript decides this in this priority:

// 1️⃣ new binding
// 2️⃣ bind
// 3️⃣ call / apply
// 4️⃣ Object method (obj.fn())
// 5️⃣ Default binding (window / undefined)

// 🔥 Common Interview Traps
// ❓ Why this is undefined?
// const obj = {
//     name: "Niroj",
//     greet: () => console.log(this.name)
// };
// obj.greet();


// ✔ Arrow function → lexical this

// ❓ Output?
// const obj = {
//     name: "A",
//     greet() {
//         return function () {
//             console.log(this.name);
//         };
//     }
// };

// obj.greet()(); // undefined


// ✔ Lost object context

// ❓ Fix it
// return () => console.log(this.name);

// 🎯 One-Line Interview Summary

// "this refers to the object calling the function, is decided at runtime, and arrow functions inherit this lexically instead of creating their own."

// ✅ Practical Rules (REMEMBER THESE)

// ✔ Use normal functions for object methods
// ✔ Use arrow functions for callbacks
// ✔ Use bind when passing methods
// ✔ Never guess this — check the call-site
