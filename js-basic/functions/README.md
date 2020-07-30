# Javascript Functions

Function can be:

- a variable with a value
- assigned as a value to the other variable
- anonymous
- used as argument in the call to other function
- value of the propertiy in an object

Function is an object

## Function Declaration

- Has name
- Can be used standalone
- Can be assigned to a variable
- Can be passed as argument in the call to the other function

```js
function sum(a, b) {
  return a + b;
};
```

## Function Expression (Anonymous function)

- Hasn't name
- Can't be used standalone
- Can be assigned to a variable
- Can be passed as argument in the call to the other function

```js
function (a, b) {
  return a + b;
};

setTimeout(function() {
  console.log("Delayed message")
}, 1000)
```
