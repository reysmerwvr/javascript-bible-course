/**
 * EXAMPLE 1 - call custom "this"
 */
// const myObject = {
//   a: 10,
//   b: true
// };

// function myFunction() {
//   console.log(this);
// }

// myFunction(); // "this" is window

// myFunction.call(myObject); // "this" is {a: 10, b: true}

/**
 * EXAMPLE 2 - call custom "this" and arguments
 */
// const myObject = {
//   a: 10,
//   b: true
// };

// function myFunction(a, b) {
//   console.log(a + b);
//   console.log(this);
// }

// myFunction(); // "this" is window

// myFunction.call(myObject, 10, 3); // "this" is {a: 10, b: true}

/**
 * EXAMPLE 3 - call custom "this" and arguments
 */
// const person1 = {
//   city: "New York",
//   name: "Bob",
//   info: function() {
//     console.log(this.name + " lives in " + this.city);
//   }
// };

// const person2 = {
//   city: "Paris",
//   name: "Susan",
//   info: function() {
//     console.log(this.name + " lives in " + this.city);
//   }
// };

// person1.info(); // Bob lives in New York

// person1.info.call(person2);

/**
 * EXAMPLE 4 - apply custom "this" and arguments
 */
// const myObject = {
//   a: 10,
//   b: 20
// };

// function myFunction(a, b, c) {
//   let sum = a + b + c;
//   // console.log(this);
//   for (let key in this) {
//     if (typeof this[key] === "number") {
//       sum += this[key];
//     }
//   }

//   console.log(sum);
// }

// myFunction(); // "this" is window

// myFunction.apply(myObject, [10, 3, 5]); // "this" is {a: 10, b: true}

/**
 * EXAMPLE 5 - bind custom "this" and arguments
 */
// const myObject = {
//   a: 10,
//   b: true
// };

// function myFunction(a, b) {
//   console.log(a + b);
//   console.log(this);
// }

// const customFunction1 = myFunction.bind(myObject, 10, 3); // preset "this" and both arguments

// customFunction1();

// const customFunction2 = myFunction.bind(myObject); // preset only "this"

// customFunction2(20, 6); // call with custom arguments

// const customFunction3 = myFunction.bind(myObject, 10); // preset "this" and only first argument

// customFunction3(30); // pass remaining arguments

/**
 * EXAMPLE 6 - arguments passed by value. If variable holds value of the primitive value type is passed to the function as argument, its value can't be changed inside of the function
 */

// function myFn(parameterA) {
//   parameterA = 20;
//   return parameterA;
// }

// const a = 10;

// console.log(myFn(a)); // 20

// console.log(a); // 10

/**
 * EXAMPLE 7 - arguments passed by reference.
 */

// const myArray = [1, 2, 3];

// console.log(myArray);

// function myFunction(arr) {
//   console.log(arr === myArray); // true
//   arr.push(4);
//   console.log(arr);
//   return arr;
// }

// myFunction(myArray);

// console.log(myArray);

/**
 * CHALLENGE
 * Create a function that wull add custom method to the global object "window"
 */

// function addCustomGlobalMethod(context) {
//   context.customMethod = function() {
//     console.log("Hello from the custom method");
//   };
// }

// addCustomGlobalMethod(this);
// console.log(this === window);
// console.log(typeof window);

// this.customMethod();  // Hello from the custom method

// window.customMethod();  // Hello from the custom method

// customMethod();  // Hello from the custom method

/**
 * IIFE
 * Immediately invoked function expression
 */
// OPTION 1
// (function (context) {
//   context.customMethod = function() {
//     console.log("Hello from the custom method");
//   };
// })(this);

// OPTION 2
// (function () {
//   this.customMethod = function() {
//     console.log("Hello from the custom method");
//   };
// })();

// OPTION 3
(() => {
  this.customMethod = function() {
    console.log("Hello from the custom method");
  };
})();


this.customMethod();  // Hello from the custom method

window.customMethod();  // Hello from the custom method

customMethod();  // Hello from the custom method

