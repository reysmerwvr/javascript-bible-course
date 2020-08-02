function myFn() {};

console.log(myFn()); // undefined

/**
 * EXAMPLE 1 - Simplest function Javascript
 */

function myFunction() {};

console.log(myFunction) // [Function: myFunction]

const functionResult = myFunction();

console.log(functionResult);  // undefined

console.log(myFunction()); // undefined

console.log(myFunction(10, true)); // undefined

/**
 * EXAMPLE 2 - Parameters of the function
 */

function myFunc(a, b) {
  console.log(a);
  console.log(b);
};

console.log(myFunc(10, 5)); // 10 5

console.log(myFunc(true, null)); // true null

console.log(myFunc()); // undefined undefined

console.log(myFunc("abc")); // abc undefined

/**
 * EXAMPLE 3 - Function scope
 */

function myFunct(a, b) {
  console.log(a, b);
};

console.log(myFunc(13, 3)); // 13 3

// console.log(a); // Uncaught ReferenceError: a is not defined
// console.log(b); // Uncaught ReferenceError: a is not defined

/**
 * EXAMPLE 4 - Reuse parameter names
 */

function myFunct1(a, b) {
  console.log(a, b);
};

function myFunct2(a, b) {
  console.log(a, b);
};

const a = true;
const b = null;

myFunct1(a, b);

myFunct2(a, b);

/**
 * EXAMPLE 5 - Add Return
 */

function sum(a, b) {
  return a + b;
};

console.log(sum(10, 5)); // 15
console.log(sum("abc", 2)); // "abc2"
console.log(sum()); // NaN (undefined + undefined)


/**
 * EXAMPLE 6 - What happens afet return
 */

function myFunct3(a) {
  console.log(a);
  return a; // function stops here
  console.log(a);
  const c = 10;
  console.log(c);
};

console.log(myFunct3(10))

/**
 * EXAMPLE 7 - Try to declare a function expression
 */

// function() {} // Uncaught SyntaxError: Function statements require a function name

/**
 * EXAMPLE 8 - Assign a function expression to a variable
 */

const myFunctionExpression = function () {};

console.log(myFunctionExpression());

console.log(myFunctionExpression); // f () {}

/**
 * EXAMPLE 9 - Callback function
 */

setTimeout(function() {
  console.log("Delayed message")
}, 1000);

/**
 * EXAMPLE 9 - Callback function (example 2)
 */

// setInterval(function() {
//   console.log("Message logged each 1 second")
// }, 1000);

let i = 1;
const myInterval = setInterval(function() {
    console.log("Here is the message " + i);
    i += 1;
  }, 2000);

setTimeout(function () {
  clearInterval(myInterval);
}, 10000);

