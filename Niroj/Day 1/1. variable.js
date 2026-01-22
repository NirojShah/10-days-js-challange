// JavaScript needs a way to declare variables.
// In ES5, we only had `var`.
// In ES6+, we have `var`, `let`, and `const`.

// ---------------- VAR ----------------

// var is function scoped (NOT block scoped).
// It can be redeclared, reassigned, and is hoisted to `undefined`.

if (true) {
    var x = "global";
}
console.log(x); // "global"

// WHY?
// JavaScript treats it like:
//
// var x;
// if (true) {
//     x = "global";
// }



// Function scope example
function test() {
    var y = "function";
}

// console.log(y); // ❌ ReferenceError

// WHY?
// `y` is declared inside the function scope.
// It exists only within the Function Execution Context.


// var + closure problem

for (var a = 1; a <= 3; a++) {
    setTimeout(() => {
        console.log(a);
    }, 1000);
}

// OUTPUT:
// 4
// 4
// 4

// WHY?
// `var` creates a single shared variable.
// setTimeout callbacks run after the loop finishes.
// By then, a === 4, so all callbacks print 4.




// ---------------- LET ----------------

// let is block scoped

if (true) {
    let b = 10;
}
// console.log(b); // ❌ ReferenceError

// Hoisting & Temporal Dead Zone (TDZ)

// console.log(c); // ❌ ReferenceError
// let c = 10;

// WHY?
// `let` is hoisted but kept in the Temporal Dead Zone
// until it is initialized.

// Redeclaration not allowed
// let x = 10;
// let x = 20; // ❌ SyntaxError

// Reassignment allowed
let d = 10;
d = 20;
console.log(d); // 20


// let fixes loop problem

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// OUTPUT:
// 1
// 2
// 3

// WHY?
// Each iteration creates a new block-scoped `i`.


// ---------------- CONST ----------------

// const is block scoped like let
// It must be initialized and cannot be reassigned

const e = 10;
// e = 20; // ❌ TypeError: Assignment to constant variable
