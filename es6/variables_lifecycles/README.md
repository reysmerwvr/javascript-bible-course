# Javascript Variables Lifecycles

## Recap of "var"

```js
var a = 10;
console.log(a);

function fn() {
  var b = true;
  console.log(b);
}

fn();

console.log(b); // Uncaught ReferenceError: b is not defined

// Reassignment
var c = 1;
c = 2;

function fn2() {
  c = 3;
}

fn2();

Redeclaration
var d = false;
var d = true;

function fn3() {
  var d = 5;
}

fn3();

// Hoisting
e = 5;
var e;
```

## Scopes

- Global Scope
- Function Scope
- Block Scope

## Variables Usage Guidelines

- Make code readable for other developers
- Always declare variables before first usage
- Always add "use stric" at the beginning of each JS file
- Don't expose to the outer scopes locally used variables
