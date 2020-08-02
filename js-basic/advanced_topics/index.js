/**
 * EXAMPLE 1 Global Execution Contex
 */
console.log("This is global execution context");

const a = 10;

console.log(a);

function myFunction(a, b) {
  return a + b;
}

console.log(myFunction(5, 20)); // Function execution context is created as many times function is executed

/**
 * EXAMPLE 2 Execution contexts stack
 */

console.log("Global execution context- root level in the stack");

function firstLevel() {
  console.log("Function execution contex second level in the stack");

  function secondLevel() {
    console.log("Function execution context - third level in the stack");

    function thirdLevel() {
      console.log("Function execution context - four level in the stack");
    }

    thirdLevel();
  }

  secondLevel();
}

firstLevel();

/**
 * EXAMPLE 3 this in the global execution context
 */

console.log(this); // window

console.log(this === window); // true

this.console.log("Method of this");

/**
 * EXAMPLE 4 this inside of a function
 */

function myFunc() {
  console.log(this);
}

myFunc();

window.myFunc();

/**
 * EXAMPLE 5 this inside of a function in strict mode
 */
"use strict";

function myFunction() {
  console.log(this);
}

myFunction(); // "this" is undefined in strict mode

window.myFunction(); // "this" is equal to window in strict mode

/**
 * EXAMPLE 6 this inside of a method of an object
 */

const myObject = {
  name: "Alice",
  age: 20,
  greeting: function() {
    console.log(this); // {name: "Alice", age: 20, greeting: ƒ}
    console.log("Name: " + this.name + " Age: " + this.age); // Name: Alice Age: 20
  }
}

console.log(myObject.greeting());

// greeting(); // Uncaught ReferenceError: greeting is not defined
