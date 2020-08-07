// // EXAMPLE 1 - declaration and assignment using object destructuring
// const myObject = {
//   a: 10,
//   b: true
// };
// // const a = myObject.a;
// // const b = myObject.b;

// const { a: a, b: b } = myObject;

// console.log(a, b);

// // EXAMPLE 2 - declaration and assignment using object destructuring and shorthand property names
// const myObject = {
//   a: 10,
//   b: true
// };

// const { a, b } = myObject;

// console.log(a, b);

// // EXAMPLE 3 - assignment using object destructuring and shorthand property names
// const myObject = {
//   a: 10,
//   b: true
// };
// let a, b;

// ({ a, b } = myObject);

// console.log(a, b);

// const anotherObject = {
//   a: 20,
//   b: 5
// };

// ({ a, b } = anotherObject);

// console.log(a, b);

// // EXAMPLE 4 - destructure non-object value
// // const { a, b } = null; // Uncaught TypeError: Cannot destructure property `a` of 'undefined' or 'null
// const val = undefined;
// const { a, b } = val || {};
// console.log(a, b);

// const myArray = [1, 2];
// const { length, d } = myArray; // arrays are objects!!!
// console.log(length, d); // 2 undefined

// // EXAMPLE 5 - change order of the properties
// const myObject = {
//   a: 10,
//   b: true
// };

// const { b, a } = myObject;

// console.log(a, b);

// // EXAMPLE 6 - rest operator in object destructuring
// const myObject = {
//   a: 10,
//   b: true,
//   c: [],
//   d: "abc",
//   e: 20
// };

// Object.prototype.newProp = 1;

// const { a, d, ...rest } = myObject;
// console.log(a, d, rest);

// // EXAMPLE 7 - non-existing properties
// const myObject = {
//   a: 10,
//   b: true
// };

// const { a, b, c } = myObject;
// console.log(a, b, c); // c is undefined

// // EXAMPLE 8 - default values
// const myObject = {
//   a: 10,
//   b: true
// };

// const {
//   a,
//   b = "default value",
//   c = "default value"
// } = myObject;
// console.log(a, b, c);

// // EXAMPLE 9 - default values and new varible names
// const myObject = {
//   a: 10,
//   b: true
// };

// const {
//   a: newA,
//   b: newB,
//   c: newC = "default value"
// } = myObject;

// console.log(newA, newB, newC);

// // EXAMPLE 10 - nested object destructuring
// const myObject = {
//   a: 1,
//   b: 2,
//   nestedObject: {
//     c: 3,
//     d: 4
//   }
// };

// const {
//   a,
//   b,
//   nestedObject: { c, d: newD, e: newE = "default value" }
// } = myObject;

// console.log(a, b, c, newD, newE);

  
/*
Use object destructuring with rest object properties to quickly remove specific properties from the object.
Ensure that variables that will be used for destructuring of the deleted properties will not be accessible after the destructuring operation.
*/

let person = {
  _id: "5ad8cefcc0971792dacb3f1f",
  index: 4,
  processed: false,
  cart: ["item1", "item2", "item3"],
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
};

{
  let _id, processed, cart;

  ({ _id, processed, cart, ...person } = person);
}

// let { _id, processed, cart, ...person } = person; // Uncaught SyntaxError: Identifier 'person' has already been declared

console.log(person);
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/