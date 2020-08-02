# Javascript Scope

Scope sets boundaries for the variables

- Global Variables
- Local Variables

```js
let a;
let b;
// impure function
function myFn() {
  let b;
  a = true;
  b = 10;
  console.log(b); // 10
}

myFn();

console.log(a); // true
console.log(b); // undefined
```

- Pure function changes only local function scoped variables or parameters of the function

- Impure function may change also variables from outside scopes

Javascript has 3 scopes

- Global scope
- Function scope
- Block scope (Variables declared with let and const inside the block are limited to the scope of this block)

```js
function myFn() {
  a = true;
  console.log(a); // true
}

myFn();

console.log(a); // true
```

Strict mode

```js
"use strict";

function myFn() {
  a = true; // Uncaught ReferenceError: a is not defined at myFn
  console.log(a);
}

myFn();

console.log(a);
```
