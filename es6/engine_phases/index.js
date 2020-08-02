/**
 * "var"
 * Compilation: Declaration Initialization. Variable is initialized and value is undefined
 * Execution: Assignment. Variable is assigned and has value
function fn() {
  function fn2() {
    // console.log(a);
    a = 10;
    console.log(a);
  }

  fn2();
  console.log(a);
}

fn();
console.log(a); // a is declared in the global scope

/**
 * "let"
 * Compilation: Temporal Dead Zone - variable is decleared but unitilizated
 * Execution: Initialized with undefined
 */
// // console.log(b); // Uncaught ReferenceError: b is not defined
let b; // b is initialized
console.log(b); // undefined
b = 10;
console.log(b);

/**
 * "const"
 * Compilation: Temporal Dead Zone - variable is decleared but unitilizated
 * Execution: Initialization and Assignment are bundle together. Variable is initialized, assigned and has value 
 */

 // // console.log(c); // Uncaught ReferenceError: c is not defined
// // const c; // Missing initializer in const declaration
const c = 10;
console.log(c); // 10

/**
 * "function"
 * Compilation: Declaration, Initialization, Assignment. Variable is declared, initialized, assigned and is value is value
 * Execution: Variable is ready to use!
 */

// Function Declaration

console.log(smile); 
smile();

function smile() {
  console.log("*____*");
}

smile();

(function () {
  console.log("IIFE");
})();

const sum = function (a, b) {
  return a + b;
};

console.log(sum(10, 5));

/**
 * CHALLENGE 1-3 SOLUTION
 *
 * DON'T EXECUTE THIS CODE!
 * You need to answer following question without code exectution:
 * "What will be printed to the console at the end of the code?"
 *
 * You should fill in files "compilation.js" and "execution.js"
 * and add there all actions that JavaScript Engine performs on
 * the Compilation and Execution phases in terms of variables
 * declaration, initialization and assignment.
 *
 * Don't guess result!
 */

let bb = 5;

aa = bb;

{
  let c = aa;
}

var aa = 1;

var cc;

console.log(aa, bb, cc); // 1, 5, undefined