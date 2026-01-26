// FLAT an arr

const arr = [
  [1, 2, 4, 5, 1],
  [8, 9, 7, 1, 5],
  [5, 1, 4],
];

function flat(arr) {
  return arr.reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);
}

const x = flat(arr);
console.log(x);

// Group by Property
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];

function group(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc[cur.age]) {
      acc[cur.age] = [];
      acc[cur.age].push(cur);
    } else {
      acc[cur.age].push(cur);
    }
    return acc;
  }, {});
}

const ans1 = group(users);

console.log(ans1);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

function coundByProperties(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});
}

const ans2 = coundByProperties(fruits);

console.log(ans2);





function groupDynamic(arr,key) {
  return arr.reduce((acc, cur) => {
    if (!acc[cur[key]]) {
      acc[cur[key]] = [];
      acc[cur[key]].push(cur);
    } else {
      acc[cur[key]].push(cur);
    }
    return acc;
  }, {});
}

const ans3 = groupDynamic(users,"age");
console.log(ans3)

