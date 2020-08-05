# Javascript Arrow Functions

All arrow functions are anonymous

```js
// implicit return of a + b
(a, b) => a + b
// explicit return of a + b
(a, b) => {
  return a + b;
}
// omit () with one parameter
a => a * a
// () are mandatory without any parameters
() => 2
// () explicit return of an object
(a, b) => {
  return {
    a1: a,
    b2: b
  }
}
// () implicit return of an object
(a, b) => ({
  a1: a,
  b2: b
})
```

Arrow functions don't have own this, "this" in arrow functions is always statically defined by the surrounding lexical scope

Arrow functions summary 

- are anonymous
- are expressions
- don't have onw "this"
