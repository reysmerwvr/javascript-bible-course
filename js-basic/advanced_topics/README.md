# Javascript Advanced Topics

## typeof

```js
typeof null // "object"
typeof undefined // "undefined"
typeof 4 // "number"
typeof "" // "string"
typeof true // "boolean"
typeof [] // "object"
typeof {} // "object"
```

## instanceof

```js
[] instanceof Array // true
[] instanceof Object // true

{} instanceof Array // false
{} instanceof Object // true

"abc" instanceof String // false
10 instanceof Number // false
true instanceof Boolean // false
null instanceof Null // Uncaught ReferenceError: Null is not defined
undefined instanceof Undefined // Uncaught ReferenceError: Undefined is not defined
```

## Array

```js
let myArr = [];
let myArr2 = new Array();

myArr = [1, 2, 3];
myArr2 = new Array(1, 2, 3);
```

## String

```js
let myStr = "abc";
let myStr2 = new String("abc");
typeof myStr2 // "object"
myStr2 instanceof String // true
myStr2 instanceof Object // true
```

## Object

```js
const myObj = new Object({a: 1, b: true });
myObj instanceof Object // true
typeof myObj // "object"
```

## Function

```js
const myFunc = function(a) {
  console.log(a);
};
myFunc instanceof Function // true
myFunc instanceof Object // true

const myFunc2 = new Function("a", "console.log(a);");
myFunc2 instanceof Function // true
myFunc2 instanceof Object // true
```
