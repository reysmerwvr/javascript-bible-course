/**
 * EXAMPLE 1 Global scope
 */

var a = 10;
let b = true;

console.log(a); // 10
console.log(window.a); // 10

console.log(b); // true
console.log(window.b); // undefined

const c = "abc";
console.log(c); // true
console.log(window.c); // undefined

function myFunc(a) {
  console.log(a); // undefined
  console.log(b); // true
}

console.log(myFunc);

myFunc();


/**
 * EXAMPLE 2 Function scope
 */

let e;
function myFn(a, b) {
  const c = true;
  console.log(c); // true
  // console.log(d); // Uncaught ReferenceError: d is not defined
  console.log(e); // undefined
  console.log(a, b);
}

myFn();

myFn(2, 3);

/**
 * EXAMPLE 3 Scope chain
 */
const x = 2;
function sum(a, b) {
  const x = 3;
  function mult(a, b) {
    return a * b * x; // 150
    ;
  }
  console.log(mult(a, b));
  return a + b
}

const result = sum(10, 5);
console.log(result); // 15

/**
 * EXAMPLE 4 Undecleared variable
 */

z = 10; // variable "z" will be automatically declared in the global scope
console.log(z);
const myFunction = function() {
  b = 5; // variable "b" will be automatically declared in the global scope
  console.log(b); // 5
}

myFunction();

console.log(b); // 5

/**
 * EXAMPLE 5 Strict mode
 */

"use strict";

a = 10; // Uncaught ReferenceError: a is not defined

function myFunc() {
  b = 5; // Uncaught ReferenceError: b is not defined at my myFunc
}

myFunc();

/**
 * EXAMPLE 5 Strict mode in a function
 */

a = 10;

function myFunc() {
  "use strict";
  b = 5; // Uncaught ReferenceError: b is not defined at my myFunc
}

myFunc();