/**
 * SECTION 1 Arithmetic Operators
 */
let a, b;
a = 1;
b = 2;
// Math with numbers
console.log(a + b); // 3
console.log(a * b); // 2
console.log(a / b); // 0.5
console.log(a - b); // -1

a = "abc";
b = 5;

// Math with non-numbers
console.log(a + b); // abc5
console.log(a * b); // NaN
console.log(a / b); // NaN
console.log(a - b); // NaN

// Unary plus
let c = "1";
console.log(+c); // 1 console.log(Number(c));
c = undefined;
console.log(+c); // NaN

// Unary minus
c = "5";
console.log(-c); // -5 console.log(-Number(c));
c = undefined;
console.log(-c); // NaN

// ++
let d = 5;
++d; // Same as d = d + 1
console.log(d); // 6
d++;
console.log(d); // 7

// Built-in "++" function FIRST increments value of the operand and SECOND returns value of the operand
console.log(++d); // 8
// Built-in "++" function FIRST returns value of the operand  and SECOND increments value of the operand
console.log(d++); // 8
console.log(d); // 9

// --
console.log(d--); // 9
console.log(d); // 8
console.log(--d); // 7 - Same as d = d - 1
console.log(d); // 7

/**
 * SECTION 2 Comparison Operators
 */
// Numbers comparison
a = 5;
a = 7;
c = 5;

console.log(a < b); // true
console.log(a > b); // false

console.log(a <= c); // true
console.log(a >= b); // true

// Strings comparison
let myStr1, myStr2, myStr3;

myStr1 = "abc";
myStr2 = "bcd";
myStr3 = "Bcd";

// Sorted strings "Bcd", "abc", "bcd"

console.log(myStr1 > myStr2); // false
console.log(myStr1 < myStr2); // true
console.log(myStr1 > myStr3); // true

console.log("_______________");

let myStr = "0";
let myNum = 0;
let myBool = false;

// Types of the values may be different
console.log(myStr == myNum); // true
console.log(myNum == myBool); // true
console.log(myStr == myBool); // true

// Type and value are compared
console.log(myStr === myNum); // false
console.log(myNum === myBool); // false
console.log(myStr === myBool); // false

// How you should compare variables of different types
console.log(Number(myStr) === myNum); // true
console.log(+myStr === myNum); // true

console.log(myStr != myNum); // false
console.log(myStr !== myNum); // true

console.log("_______________");

console.log(null === undefined); // false
console.log(null == undefined); // true

console.log("_______________");

console.log(0 === "" === null === undefined === false); // true

/**
 * SECTION 3 Logical operators
 */
console.log(true || false); // true
console.log(false || true); // true

console.log("abc" || ""); // abc
console.log("" || "abc"); // abc
console.log("" || ""); // ""

// Falsy values
console.log("" || 0 || null || undefined || NaN || false); // false

let city;

const defaultCity = "New York";

let myCity = city || defaultCity;
console.log(myCity);

city = "Los Angeles";

myCity = city || defaultCity;
console.log(myCity);

console.log("_______________");

// AND operator &&
console.log(true && false); // false
console.log(false && true); // false

// AND returns value of the first "falsy" operand
console.log("abc" && 10 && false && "" && "abcd"); // false
console.log("abc" && 10 && NaN && "" && "abcd"); // NaN
console.log("abc" && 10 && "" && "" && "abcd"); // ""

// All operands are "truthy"
console.log("abc" && 10 && true && 123 && "Hello World"); // Hello World

// NOT operator !
console.log(!"abc"); // false
console.log(!""); // true
console.log(!0); // true
console.log(!undefined); // true

// Quick thruthy/falsy check
let myVar  = null;
console.log(!!myVar); // false
myVar = 10;
console.log(!!myVar); // true

/**
 * SECTION 4 Operators Precedence
 */

console.log(2 + 4 * 10); // 42
console.log((2 + 4) * 10); // 60

a = 1;

a = a + 5; // FIRST - "+", SECOND = "="

console.log(a); // 6

/**
 * SECTION 5 Operators Associativity
 */

let x, y;
y = 3;

x = y = 5; // right-to-left
console.log(a, b);
console.log(5 * 10 / 2); // 25
console.log(5 * 10 / 2 / 5); // 5

console.log(3 || true && null || false);
// STEP 1: true && null -> null
// STEP 2: 3 || null -> 3
// STEP 3: 3 || false -> 3

// OR "||" will return value of the first truthy operand (otherwise value of the last operand will be returned)

// AND "&&" will return value of the first falsy operand (otherwise value of the last operand will be returned)

/**
 * SECTION 6 Find alternatives
 */

let w = 10;

// a = a + 1;
w += 1;
console.log(w); // 11

// w = w * 2;
w *= 2;
console.log(w); // 22

// w = w - 5;
w -= 5; 
console.log(w); // 17

// w = w / 2;
w /= 2;
console.log(w); // 8.5