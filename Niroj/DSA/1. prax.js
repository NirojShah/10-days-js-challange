const arr = [1, 1, 1, 1, 5, 4, 2, 1, 2, 7, 8];

const removeDuplicate = (arr) => {
  const ans = [];
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]] = hash[arr[i]] + 1;
    }
  }
  for (const x in hash) {
    ans.push(x * 1);
  }
  return ans;
};

removeDuplicate(arr);

const str = "aabaa";

const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str.charAt(start) != str.charAt(end)) {
      console.log("Not an palindrome");
      return;
    }
    start++;
    end--;
  }
  console.log("is palindrome");
};

isPalindrome(str);

const findLargestAndSmallest = (arr) => {
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log({ largest, smallest });
};

const arr2 = [1, 1, 2, 1];

findLargestAndSmallest(arr2);

const flatAnArray = (arr) => {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      ans.push(...arr[i]);
    } else {
      ans.push(arr[i]);
    }
  }
  console.log(ans);
};

const arrr = [[1, 2, 3, 4], [1, 2, 4], [41, 1], 1];

flatAnArray(arrr);

const rotateAnArray = (arr, k) => {
  arr = arr.reverse();

  let start = k;
  let end = arr.length - 1;

  while (start < end) {
    let starting = arr[start];
    arr[start] = arr[end];
    arr[end] = starting;
    end--;
    start++;
  }
  console.log(arr);
};

const arrrr = [1, 2, 3, 4, 5, 6];

rotateAnArray(arrrr, 2);

const maximumSubArrSum = (arr) => {
  let maxsum = arr[0];
  let curSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curSum = Math.max(arr[i], curSum + arr[i]);
    maxsum = Math.max(curSum, maxsum);
  }
  console.log({ maxsum });
};

maximumSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const printAfter1Sec = (arr) => {
  let delay = 1000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      setTimeout(() => {
        console.log(arr[i]);
      }, delay);
      delay += 1000;
    }
  }
};

// printAfter1Sec([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const anagramMap = (arr) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(arr[i]);
  }

  console.log(Object.values(map));
};

const arrrrr = ["eat", "tea", "tan", "ate", "nat", "bat"];
anagramMap(arrrrr);

const longestSubString = (str) => {
  let left = 0;
  let set = new Set();
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++
    }
    set.add(str[right])
    maxLen = Math.max(maxLen, (right-left)+1)
  }

  console.log({maxLen})
};


longestSubString("abcabcbb")



const mul = function(a){
    return function(b){
       return function(c){
        return a+b+c
       }
    }
}

const double = mul(2)
const triple= mul(3)

console.log(double(2)(4))
console.log(triple(3)(10))

