# Javascript Enhanced Object Literals

```js
let name = "Mike";
let age = 18;

const person = {
  name: name,
  age: age,
  info: function () {
    console.log(`${name} is ${age} years old`);
  }
}
```

```js
let name = "Mike";
let age = 18;

const person = {
  name, // Shorhand property names
  age,
  info() { // Shorhand method name
    console.log(`${name} is ${age} years old`);
  },
  [age]: true, // Computed property name
}
```
