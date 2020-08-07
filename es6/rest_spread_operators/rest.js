// // const sumNumbers = (...nums) => {
  // // console.log(nums); [1, 2, 3, 4]
// // const sumNumbers = (a, ...nums) => {
  // // console.log(nums); [2, 3, 4]
const sumNumbers = (...nums) => {
  console.log(nums); // [1, 2, 3, 4]
  // // console.log(arguments) // Uncaught ReferenceError: arguments is not defined
  // return nums.reduce((sum, num) => sum + num, 0)
  return nums
  .filter(num => typeof num === "number")
  .reduce((sum, num) => sum + num, 0)
};

console.log(sumNumbers(1, 2, 3, 4)); // 7
console.log(sumNumbers("abc", 2, 3, 4)); // 0abc234

// Regular function

function sumNumbers1(...nums) {
  console.log(nums); // [1, 2, 3, 4] Array
  console.log(arguments) // { '0': 1, '1': 2, '2': 3, '3': 4 } Object
  // return nums.reduce((sum, num) => sum + num, 0)
  return Array.from(nums)
  .filter(num => typeof num === "number")
  .reduce((sum, num) => sum + num, 0)
};

console.log(sumNumbers1(1, 2, 3, 4)); // 7
console.log(sumNumbers1("abc", 2, 3, 4)); // 0abc234