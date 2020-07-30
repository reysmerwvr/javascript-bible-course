/**
 * EXAMPLE 1 - Create object and modify its properties
 */
let myObject;

myObject = {
  a: 10,
  b: "abc"
};

console.log(myObject);

myObject.a = 15;

myObject.c = true;

console.log(myObject);

delete myObject.b;

console.log(myObject);

/**
 * EXAMPLE 2 - Use const for object declaration
 */


const myObject2 = {};

myObject2.a = true;

console.log(myObject2);

// myObject2 = {
//   a: 10,
//   b: "abc"
// }; Uncaught TypeError: Assignment to constant variable.

/**
 * EXAMPLE 3 - Missing properties
 */

const myObject3 = {
  a: 10,
  b: true
};

// Code execution is not stopped
console.log(myObject3.c); // undefined

console.log(myObject3.otherProperty); // undefined

// Code execution is STOPPED
//  console.log(nonDeclaredVariable); // Uncaught ReferenceError: nonDeclaredVariable is not defined


