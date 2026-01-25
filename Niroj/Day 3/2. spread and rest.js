// Spread (...) and Rest (...) Operator

// 👉 Same syntax (...) but different usage depending on context

// 1️⃣ Spread Operator (...)

// 👉 Expands / spreads values
// 👉 Used to copy, merge, or pass elements

// 🔹 With Arrays
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const result = [...arr1, ...arr2];

// console.log(result); // [1, 2, 3, 4]

// Copy Array (Shallow Copy)
// const a = [1, 2];
// const b = [...a];

// b.push(3);

// console.log(a); // [1, 2]
// console.log(b); // [1, 2, 3]

// 🔹 With Objects
// const user = { name: "A", age: 20 };

// const updatedUser = { ...user, age: 21 };

// console.log(updatedUser);


// ⚠️ Shallow copy only

// const obj = { a: { b: 1 } };
// const copy = { ...obj };

// copy.a.b = 2;
// console.log(obj.a.b); // 2

// 🔹 With Function Calls
// const nums = [1, 2, 3];

// Math.max(...nums); // 3

// 2️⃣ Rest Operator (...)

// 👉 Collects multiple values into one variable
// 👉 Used in function parameters or destructuring

// 🔹 In Function Parameters
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }

// sum(1, 2, 3); // 6

// 🔹 In Array Destructuring
// const [a, b, ...rest] = [1, 2, 3, 4];

// console.log(rest); // [3, 4]

// 🔹 In Object Destructuring
// const user = { name: "A", age: 20, city: "NY" };

// const { name, ...rest } = user;

// console.log(rest); // { age: 20, city: "NY" }

// 🔥 Spread vs Rest (Interview Table)
// Feature	Spread	Rest
// Purpose	Expands values	Collects values
// Used in	Arrays, objects, function calls	Function params, destructuring
// Direction	Many → individual	Many → single
// 💥 One-Line Interview Answers

// Spread → expands elements

// Rest → collects elements

// ⚠️ Common Interview Traps
// ❓ Is this valid?
// const [...a, b] = [1, 2, 3];


// ❌ Invalid — rest must be last

// ❓ Does spread deep copy?

// ❌ No — shallow copy only

// 🔥 Practice (Try Now)
// Q1
// const arr = [1, 2, 3];
// const newArr = [...arr, 4];

// console.log(arr === newArr); //false

// Q2
// function test(a, ...rest) {
//   console.log(rest);
// }

// test(1, 2, 3, 4); // [2,3,4]







// function fun(...nums){
//     console.log(nums)
//     return nums.reduce((acc,cur)=>{
//         if(cur%2==0){
//             acc.push(cur)
//         }
//         return acc
//     },[])
// }


// const x = fun(1,2,3,4,5,6,7,8,9)
// console.log(x)