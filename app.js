new Set([1, 1, 2, 2, 3, 4]); // [1,2,3,4]
[...new Set("referee")].join(""); // "ref"

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
/*
0: {Array(3) => true}
1: {Array(3) => false}
*/

const hasDuplicate = (arr) => {
  let arrCopy = [...new Set(arr)];
  return arr.length !== arrCopy.length ? true : false;
};

function vowelCount(str) {
  let vowels = "aeiou";
  const myMap = new Map();
  for (let char of str) {
    let letters = char.toLowerCase();
    if (vowels.includes(letters)) {
      if (myMap.has(letters)) {
        myMap.set(letters, myMap.get(letters) + 1);
      } else {
        myMap.set(letters, 1);
      }
    }
  }
  return myMap;
}
