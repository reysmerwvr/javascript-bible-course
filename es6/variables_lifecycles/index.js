/**
 * "var"
 */

// // Scope
// var a = 10;
// console.log(a);

// function fn() {
//   var b = true;
//   console.log(b);
// }

// fn();

// // console.log(b); // Uncaught ReferenceError: b is not defined

// // Reassignment
// var c = 1;
// c = 2;

// function fn2() {
//   c = 3;
// }

// fn2();

// // Redeclaration
// var d = false;
// var d = true;

// function fn3() {
//   var d = 5;
// }

// fn3();

// Hoisting
// e = 5;
// var e;

// Scopes

// Global Scope
// var a;

// Function Scope
// function fn() {
//   var b;
// }

// Block Scope
// {
//   var c = 10;
// }

// if (true) {

// } else {

// }

/**
 * "let"
 */

// // Scope
// let a = 10;
// console.log(a);

// function fn() {
//   let b = true;
//   console.log(b);
// }

// fn();

// // console.log(b); // Uncaught ReferenceError: b is not defined

// {
//   let b1 = 1; // Scoped to this block
// }

// // console.log(b1); // Uncaught ReferenceError: b1 is not defined

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }

// // console.log(j); // Uncaught ReferenceError: j is not defined

// // Reassignment
// let c = 1;
// c = 2;

// function fn2() {
//   c = 3;
// }

// fn2();

// // Redeclaration
// let d = false;
// // let d = true; // Uncaught SyntaxError: Identifier 'd' has already been declared
// console.log(d);

// function fn3() {
//   let d = 5;
//   console.log(d);
// }

// fn3();

// {
//   let d = "abc";
//   console.log(d);
// }

// // Hoisting
// // e = 5; //Uncaught ReferenceError: Cannot access 'e' before initialization
// let e;

/**
 * "const"
 */

// What is const?

// WRONG
// const - constant - value that doesn't change

// CORRECT
// const - variable that can't be reassigned
// // const myConst; // SyntaxError: Missing initializer in const declaration
// // myConst = 10;

// const myConst = [];
// myConst.push(1);
// myConst.push(2);
// // myConst = [1, 2, 3]; Uncaught TypeError: Assignment to constant variable.

// const anotherConst = {};
// anotherConst.a = 10;
// // anotherConst = { b: 20 }; // Uncaught TypeError: Assignment to constant variable.

// // Scope
// const a = 10;
// console.log(a);

// function fn() {
//   console.log(a);
//   const b = true;
//   console.log(b);
// }

// fn();

// // console.log(b); // Uncaught ReferenceError: b is not defined

// {
//   const b1 = 1; // Scoped to this block
// }

// // console.log(b1); // Uncaught ReferenceError: b1 is not defined

// // console.log(j); // Uncaught ReferenceError: j is not defined

// // Reassignment
// const c = 1;
// // c = 2; // not possible with const

// function fn2() {
// //   c = 3; // not possible with const
// }

// fn2();

// // Redeclaration
// const d = false;
// // const d = true; // Uncaught SyntaxError: Identifier 'd' has already been declared
// console.log(d);

// function fn3() {
//   const d = 5;
//   console.log(d);
// }

// fn3();

// {
//   const d = "abc";
//   console.log(d);
// }

// // Hoisting
// e = 5; // Uncaught ReferenceError: Cannot access 'e' before initialization
// // const e;
const e = 5;

function fn4() {
  const f = 10;
  console.log(f);
}

fn4();
