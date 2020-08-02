/**
 * EXAMPLE 1 - Variable declaration
 */
var a;

console.log(a);

// console.log(b); // Uncaught: ReferenceError: b is not defined

let c;

console.log(c);

// const d; // Uncaught SyntaxError: Missing initializer in const declaration

/**
 * EXAMPLE 2 - let
 */

let myNumber = 10;

console.log(myNumber);

// declaration
let myString;

console.log(myString);

// assignment
myString = "Hello from myString";

console.log(myString);

// re-assignment
myString = "New Hello from myString";

console.log(myString);

/**
 * EXAMPLE 3 - var
 */

myNumberVar = 10;

console.log(myNumberVar);

// declaration
var myStringVar;

console.log(myStringVar);

// assignment
myStringVar = "Hello from myStringVar";

console.log(myStringVar);

// re-assignment
myStringVar = "New Hello from myStringVar";

console.log(myStringVar);

/**
 * EXAMPLE 4 - const
 */

const myBoolean = true;

console.log(myBoolean);

// myBoolean = false // Uncaught TypeError: Assignment to constant variable.

// const myBoolean = false; // Uncaught SyntaxError: Identifier 'myBoolean' has already been declared

/**
 * EXAMPLE 5 - Dynamic Typing in Js
 */

function a() {
  console.log(a);
}

a();

a = 10;

// a(); // Uncaught TypeError: a is not a function