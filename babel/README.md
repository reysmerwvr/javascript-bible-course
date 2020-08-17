# Javascript Babel

## Compiler

Program that takes source code written in a programming language with higher-level of abstraction and transforms it to the lower-level language

Javascript is an interpreted language

(Compiled) Program Code -> Compiler -> Machine code

(Interpreted) Program Code -> Interpreter (engine) -> Machine code

## Transpiler

It is compiler that translates code from one programming language to another with the same level abstraction

Sass -> CSS
CoffeeScript -> Javascript
Python -> Javascript

## Compiling vs Transpiling

Level of abstraction

- Javascript, Python, PHP -> Transpile
- C/C++, Java -> Compile
- Assembly, Bytecode
- Machine Code

# What babel does

Babel transforms Javascript to Javascript

Most common usage

ES2015 (ES6) -> ES5

```js
function fn(...a) {
  return a
}

"use strict";

function fn() {
  for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }

  return a;
}
```

## Resources

[compat-table](https://kangax.github.io/compat-table/es6/)

[can-i-use](https://caniuse.com/)

## User Agent

Information about the browser and Operating System suppplied by the browser to the server

```js
window.navigator.userAgent
```

## How babel works

- Parsing
- Transforming
- Generation

## Plugin

An independent programming module that is dynamically connected to the main program

In Babel plugins affect second stage - Transformation

Presets is a set of plugins

