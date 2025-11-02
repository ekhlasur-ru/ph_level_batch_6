// /sort meyhod in javascript array

const number = [10, 20, 30, 1, 2, 3, 4, 5, 40, 50, 60, 70, -80, 90, 100];
const shortNumber = number.sort((a, b) => a - b); // ascending order low to high
const shortNum = number.sort((a, b) => b - a); // descending order high to low
// console.log(shortNumber);
console.log(shortNum);

const fruits = ["Banana", "apple", "mango", "Lemon", "orange"];
// fruits.sort(); //ABC then abc order
fruits.sort((a, b) => a.localeCompare(b)); //case insensitive sorting
console.log(fruits);

//Nested array flat
const Arr = [1, 2, 3, [4, 5]];
const flatArr = arr.flat(); // convert nested arr into a single arr
console.log(flatArr);

//Nested array flat
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 100, 200, 300]]]];
const flatrr = arr.flat(Infinity); // convert nested arr into a single arr
console.log(flatArr);

//convert nested arry into a single array
const tags = [
  ["html", "css", "javascript"],
  ["react", "nodejs", "expressjs"],
  ["mongodb", "firebase", "sql"],
];
const filterTags = [...new Set(tags.flat())];
console.log(filterTags);
