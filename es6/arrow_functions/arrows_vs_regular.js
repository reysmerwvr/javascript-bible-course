/**
 * EXAMPLE 1 - Onject Literal
 */

const num = {
  value: 100,
  infoArrow: () => {
    console.log(this); // window
    return this.value;
  },
  infoRegular: function () {
    console.log(this); // num object
    return this.value;
  }
};

console.log(num.infoArrow());
console.log(num.infoRegular());

/**
 * EXAMPLE 2 - Function constructor
 */

function GroceryItem(title, kind) {
  this.title = title;
  this.kind = kind;
}

// // Uncaught TypeError: GroceryItem is not a constructor
// // const GroceryItem = (title, kind) => {
// //   this.title = title;
// //   this.kind = kind;
// // };

GroceryItem.prototype.info = function () {
  return this.title + " is  " + this.kind;
};

// // "this" is window and function always returns "undefined is undefined"
// // GroceryItem.prototype.info = () => {
// //   console.log(this);
// //   return this.title + " is  " + this.kind;
// // };

const apple = new GroceryItem("Apple", "Fruit");
console.log(apple);
const brocolli = new GroceryItem("Brocolli", "vegetable");
console.log(apple);

/**
 * EXAMPLE 3 - Arguments
 */

 // regular function declaration
function sum() {
  console.log(arguments);
  console.log(typeof arguments); // object
  console.log(Array.isArray(arguments)); // false
  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);
}

sum(1, 2, 3);

 // arrow function expression

// // const sum2 = () => {
// //   ReferenceError: arguments is not defined
// //   console.log(arguments);
// //  console.log(typeof arguments); // object
// //  console.log(Array.isArray(arguments)); // true
// //  const argumentsArray = Array.from(arguments);
// //  console.log(argumentsArray);
// // }


const sum3 = (...arguments) => {
  console.log(arguments);
  console.log(typeof arguments); // object
  console.log(Array.isArray(arguments)); // true
  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);
}

sum(1, 2, 3);
// // sum2(1, 2, 3);
sum3(1, 2, 3);