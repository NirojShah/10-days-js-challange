// SCOPE & HOISTING

// what is scope?
// - Scope determines where a variable or function can be accessed in your code.

// Types of Scope in JavaScript
// 1️  Global Scope
// 2️  Function Scope
// 3️  Block Scope
// 4️  Lexical Scope
// 5️  Scope Chain

// 1️  Global Scope
// Variables declared outside any function or block are global.

// var a = 10;
// let b = 20;
// const c = 30;

// ✔ Accessible anywhere
// X Pollutes global namespace (bad practice)


// var x = 10;
// let y = 20;

// console.log(window.x); // 10
// console.log(window.y); // undefined

// WHY - 
// var attaches to window, let & const do not.




// 2️  Function Scope

// Variables declared inside a function are function scoped.

// function test() {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a); // ❌
// console.log(b); // ❌
// console.log(c); // ❌


// All three (var, let, const) are function scoped,
// but var does NOT respect block scope.




// 3️  Block Scope (ES6+ 🔥)

// A block is anything inside { }:

// if

// for

// while

// try/catch

// ❌ var ignores block scope
// if (true) {
//     var a = 10;
// }
// console.log(a); // 10

// ✅ let and const respect block scope
// if (true) {
//     let a = 10;
//     const b = 20;
// }
// console.log(a); // ❌
// console.log(b); // ❌


// 📌 This is why let/const were introduced.

// 4️⃣ Lexical Scope (STATIC SCOPE) 🔥

// Scope is decided by where the code is written, not where it is executed.

// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }
// outer();


// ✔ inner() can access x
// ❌ outer() cannot access variables of inner()

// 📌 JavaScript uses lexical scoping, not dynamic scoping.





// 4️ Lexical Scope (STATIC SCOPE) 🔥

// Scope is decided by where the code is written, not where it is executed.

// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }
// outer();


// ✔ inner() can access x
// ❌ outer() cannot access variables of inner()

// 📌 JavaScript uses lexical scoping, not dynamic scoping.








// 5️   Scope Chain 🔗

// When JS looks for a variable:

// Check current scope

// Move to parent scope

// Move up until global

// If not found → ReferenceError

// let a = 10;

// function test() {
//     let b = 20;
//     console.log(a); // found in parent
// }

// test();



// 🔥 PART 2: HOISTING (INTERVIEW FAVORITE)
// What is Hoisting?

// JavaScript moves declarations to the top of their scope before execution.

// ⚠️ Only declarations, NOT assignments.

// Execution Phases in JavaScript
// 1️⃣ Memory Creation Phase
// 2️⃣ Execution Phase
// Hoisting with var
// console.log(a);
// var a = 10;

// Behind the scenes:
// var a;        // hoisted
// console.log(a);
// a = 10;


// ✔ Output: undefined

// 📌 var is hoisted and initialized to undefined.

// Hoisting with let & const (TDZ 🔥)
// console.log(a);
// let a = 10;


// ❌ ReferenceError

// WHY?

// let and const are hoisted

// BUT stored in Temporal Dead Zone

// Cannot be accessed before initialization

// Temporal Dead Zone (TDZ)

// Time between entering scope and variable declaration.

// {
//     // TDZ starts
//     let a = 10; // TDZ ends
// }


// Accessing a inside TDZ → ReferenceError

// 📌 TDZ exists to prevent bugs.

// Hoisting with const
// const x;


// ❌ SyntaxError (must initialize immediately)

// Hoisting with Functions 🔥🔥
// Function Declaration (Fully Hoisted)
// hello();

// function hello() {
//     console.log("Hello");
// }


// ✔ Works perfectly

// Function Expression (var)
// hello();

// var hello = function () {
//     console.log("Hello");
// };


// ❌ TypeError: hello is not a function

// WHY?

// var hello; // undefined
// hello();   // ❌

// Arrow Function (let/const)
// hello();

// const hello = () => {
//     console.log("Hello");
// };


// ❌ ReferenceError (TDZ)

// 🔥 VAR vs LET vs CONST (Scope + Hoisting Summary)
// Feature	var	let	const
// Scope	Function	Block	Block
// Hoisted	Yes (undefined)	Yes (TDZ)	Yes (TDZ)
// Redeclare	Yes	No	No
// Reassign	Yes	Yes	No
// Global Object	Yes	No	No
// 🔥 COMMON INTERVIEW TRAPS
// ❓ Why does this print 3,3,3?
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }


// ✔ Single shared i
// ✔ Closure + delayed execution

// ❓ Why ReferenceError and not undefined?
// console.log(a);
// let a = 10;


// ✔ TDZ exists

// ❓ Is let hoisted?

// ✔ Yes, but inaccessible until initialized

// 🎯 ONE-LINE INTERVIEW SUMMARY

// “JavaScript uses lexical scoping, builds a scope chain at compile time, and hoists declarations before execution, with var initializing to undefined and 
// let/const living in the Temporal Dead Zone.