/**
 * Function scopes
 */

const b = 2;
let d = 15;

function fn1(a) {
  let b;
  let d = 10;
  fn2(b);
}

function fn2(a) {
  let c = 5;
  console.log(a, b, c, d);
}

fn1();

// ANSWER: undefined, 2, 5, 15

/**
 * Stric Mode
 */
// "use strict";

// function myFunction() {
//   a = 2;
//   return a;
// }

// myFunction();
// ANSWER
"use strict";

function myFunction() {
  let a = 2;
  return a;
}

myFunction();

/**
 * Callback
 */

setTimeout(function myFunc() {
  console.log("Hello from setTimeout")
}, 2000);

myFunc(); 
// ReferenceError: myFunc is not defined
// "Hello from setTimeout"