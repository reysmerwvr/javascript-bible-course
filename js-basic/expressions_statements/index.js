/**
 * EXPRESSIONS
 */

10
"abc"
5 + 3

;(function(a) {
  console.log(a);
}) // Function embedded into parenthesis

// Immediately Invoked Function Expression
;(function(a) {
  console.log("Hello from IIFE");
})() // Function call is expression

let a;
a = 10 // Assignment expression

4 <= 10 <= 20  || 5 // true Logical expression

/**
 * STATEMENTS
 */
let b; // Variable declaration is statement

b = 3

function myFunc(b) {
  // console.log(return b); // Uncaught SyntaxError: Unexpected token return
  return b;
}

myFunc(b)

if (true) {
  console.log("Hello from if statement");
}

/**
 * EXPRESSION STATEMENTS
 */
console.log(4 + 3); // Expression statement

console.log(console.log(4 + 3));

true;