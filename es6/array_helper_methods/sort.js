const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

/*
Create a function "arrayCheck" with one parameter - "inputArray".
If at least one element in the array is not a number - return "Some elements are not numbers".
If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".
If numbers in the array are sorted in descending order - return "Array is sorted is descending order".
If array is not sorted - return "Array is not sorted"
*/

const arrayCheck = inputArray => {
  if (
    inputArray.some(element => typeof element !== "number")
  ) {
    return "Some elements are not numbers";
  }

  if (
    inputArray.every(
      (element, index, array) =>
        index > 0 ? element >= array[index - 1] : true
    )
  ) {
    return "Array is sorted is ascending order";
  }

  if (
    inputArray.every(
      (element, index, array) =>
        index > 0 ? element <= array[index - 1] : true
    )
  ) {
    return "Array is sorted is descending order";
  }

  return "Array is not sorted";
};

console.log(arrayCheck(a)); // Some elements are not numbers
console.log(arrayCheck(b)); // Array is sorted is ascending order
console.log(arrayCheck(c)); // Array is sorted is descending order
console.log(arrayCheck(d)); // Array is not sorted

/* Hint 1: Use "every" helper method to solve this.
Hint 2: You should use all three parameters in the callback function "element", "index", "array".
Hint 3: Each element in the array except first one should be compared to the previous
*/

/* 
1. Sorting algorithm
Insertion Sort - Google Chrome (Qty <= 10), Firefox, Node.js (Qty <= 10)
Merge Sort - Safari
2. Qty of iterations
13
*/
const myNumbers = [10, 5, 79, 27, 50, 14, 27];

let i = 0;
console.log(
  myNumbers.sort((a, b) => {
    console.log(a, b);
    i++;
    return a - b;
  })
);
console.log("Qty of iterations is " + i);

/**
 * CHALLENGE 1
 */
const products = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories"
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones"
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories"
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches"
  }
];

/* Create a function "sortProductsByPrice" with one parameter "products".
This function "sortProductsByPrice" should sort input array of products by price of each product in ascending order and return resulting array.
*/

const sortProductsByPrice = products =>
  products.sort((a, b) => {
    console.log(a.title, b.title);
    return a.price - b.price;
  });

sortProductsByPrice(products);
/* Which sorting algorithm is used here in Google Chrome, Firefox, Safari, Node.js? 
Is this sorting stable or not?
*/

console.log(products);
/* Array of products sorted by price in ascending order.
Why original "products" array was mutated?
*/

/**
 * CHALLENGE 2
 */

const persons = [
  {
    name: "Andy",
    friendsQty: 10,
    index: 1
  },
  {
    name: "Mike",
    friendsQty: 5,
    index: 2
  },
  {
    name: "Sophia",
    friendsQty: 10,
    index: 3
  },
  {
    name: "Joshua",
    friendsQty: 3,
    index: 4
  },
  {
    name: "John",
    friendsQty: 10,
    index: 5
  },
  {
    name: "Gabriella",
    friendsQty: 8,
    index: 6
  },
  {
    name: "Tyler",
    friendsQty: 7,
    index: 7
  },
  {
    name: "Dylan",
    friendsQty: 2,
    index: 8
  },
  {
    name: "Sarah",
    friendsQty: 5,
    index: 9
  },
  {
    name: "Alexa",
    friendsQty: 10,
    index: 10
  },
  {
    name: "Henry",
    friendsQty: 10,
    index: 11
  },
  {
    name: "Arianna",
    friendsQty: 10,
    index: 12
  }
];

/* Create a function "sortPersonsByFriendsQty" with one parameter "persons".
This function "sortPersonsByFriendsQty" should sort input array of persons by friendsQty of each person in ascending order and return resulting array.
*/

const sortPersonsByFriendsQty = persons => {
  let it = 0;
  persons.sort((a, b) => {
    console.log(a.name, b.name);
    it++;
    return a.friendsQty - b.friendsQty;
  });
  console.log("Qty of iterations is " + it);
  return persons;
};

sortPersonsByFriendsQty(persons);
/* Which sorting algorithm is used here in Google Chrome, Firefox, Node.js? 
QuickSort - Google Chrome (Qty > 10) - 21 iterations (NOT stable)
Insertion Sort - Firefox - 31 iterations (stable)
Merge Sort - Safari - 29 iterations (stable)
Is this sorting stable or not?
*/

console.log(persons);
/* Array of persons sorted by friendsQty in ascending order 
*/