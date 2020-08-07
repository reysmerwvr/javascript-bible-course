/**
 * CHALLENGE 7-1
 *
 * Insert new prototype "Vehicle.prototype" to the existing prototype chain
 *
 * CURRENT CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Object.protoype
 *
 * UPDATED CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Vehicle.prototype > Object.protoype
 *
 * Vehicle.prototype should set two additional
 * properties:
 * 1. maxSpeed
 * 2. weight
 *
 * It should also contain method "vehicleInfo"
 * available for any object down the prototype chain
 */

function Vehicle(props) {
  this.maxSpeed = props.maxSpeed;
  this.weight = props.weight;
}

Vehicle.prototype.vehicleInfo = function() {
  console.log(
    `Max speed of the vehicle is ${
      this.maxSpeed
    } and weight is ${this.weight}`
  );
};

function Airplane(props) {
  Vehicle.call(this, props);
  this.wingspan = props.wingspan;
  this.maxRangeOfFlight = props.maxRangeOfFlight;
}

Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.constructor = Airplane;

Airplane.prototype.airplaneInfo = function() {
  console.log(
    `Wingspan of the airplane is ${
      this.wingspan
    } and maximal range of flight is ${
      this.maxRangeOfFlight
    }`
  );
};

function CivilPlane(props) {
  Airplane.call(this, props);
  this.numberOfSeats = props.numberOfSeats;
}

CivilPlane.prototype = Object.create(Airplane.prototype);

CivilPlane.prototype.constructor = CivilPlane;

CivilPlane.prototype.seatsInfo = function() {
  console.log(this); // instance of the prototype
  console.log(
    `Number of seats in the plane is ${this.numberOfSeats}`
  );
};

CivilPlane.prototype.modifySeatsNumber = function(
  newSeatsQty
) {
  this.numberOfSeats = newSeatsQty;
};

const propsForSmallPlane = {
  numberOfSeats: 4,
  wingspan: 20,
  maxRangeOfFlight: 1000,
  maxSpeed: 800,
  weight: 15
};

const smallPlane = new CivilPlane(propsForSmallPlane);

const propsForLargePlane = {
  numberOfSeats: 250,
  wingspan: 60,
  maxRangeOfFlight: 3500,
  maxSpeed: 900,
  weight: 40
};

const largePlane = new CivilPlane(propsForLargePlane);

/**
 * VERIFICATION
 */
smallPlane.vehicleInfo(); // Max speed of the vehicle is 800 and weight is 15

largePlane.vehicleInfo(); // Max speed of the vehicle is 900 and weight is 40

/**
 * CHALLENGE 7-2: SOLUTION
 *
 * Fix all mistakes in the code below
 */

// function Product(props) {
//   this.price = props.price;
//   this.priceInfo = () => {
//     console.log(`Price of the product is ${price}`);
//   };
// }

// function ElectricDevice() {
//   this.energyEfficiencyClass = props.energyEfficiencyClass;
//   energyInfo = function() {
//     console.log(
//       `Energy Efficiency Class is ${
//         this.energyEfficiencyClass
//       }`
//     );
//   };
// }

// ElectricDevice.prototype = Object.create(Product);

// function TV(props) {
//   ElectricDevice.call(props, this);
//   this.model = model;
//   this.diagonal = props.diagonal;
// }

// TV.prototype = Object.create(ElectricDevice);

// TV.prototype.constructor = TV;

// const propsForMyTv = {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42
// };

// const myTV = TV(propsForMyTv);

// /**
//  * VERIFICATION
//  */
// console.log(myTV);
// /* {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42,
//   __proto__: ...
// } */

// myTV.energyInfo(); // "Energy Efficiency Class is A+"

// myTV.priceInfo(); // Price of the product is 1200

// myTV instanceof TV; // true
// myTV instanceof ElectricDevice; // true
// myTV instanceof Product; // true
// myTV instanceof Object; // true

function Product(props) {
  this.price = props.price;
}

Product.prototype.priceInfo = function() {
  console.log(`Price of the product is ${this.price}`);
};

function ElectricDevice(props) {
  Product.call(this, props);
  this.energyEfficiencyClass = props.energyEfficiencyClass;
}

ElectricDevice.prototype = Object.create(Product.prototype);

ElectricDevice.prototype.constructor = ElectricDevice;

ElectricDevice.prototype.energyInfo = function() {
  console.log(
    `Energy Efficiency Class is ${
      this.energyEfficiencyClass
    }`
  );
};

function TV(props) {
  ElectricDevice.call(this, props);
  this.model = props.model;
  this.diagonal = props.diagonal;
}

TV.prototype = Object.create(ElectricDevice.prototype);

TV.prototype.constructor = TV;

const propsForMyTv = {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42
};

const myTV = new TV(propsForMyTv);

/**
 * VERIFICATION
 */
console.log(myTV);
/* {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42,
  __proto__: ...
} */

myTV.energyInfo(); // "Energy Efficiency Class is A+"

myTV.priceInfo(); // Price of the product is 1200

myTV instanceof TV; // true
myTV instanceof ElectricDevice; // true
myTV instanceof Product; // true
myTV instanceof Object; // true


/**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, el) => sum + el);
  }

  onlyNumbers() {
    return this.filter(el => typeof el === "number");
  }
}

const firstInstance = new ExtendedArray(2, 3, 6, 10);

console.log(firstInstance.sum());
console.log(firstInstance.onlyNumbers()); // [2, 3, 6, 10]

firstInstance.push("abc");

console.log(firstInstance); // [2, 3, 6, 10, "abc"]

console.log(firstInstance instanceof ExtendedArray); // true

console.log(firstInstance instanceof Array); // true

console.log(firstInstance instanceof Object); // true

console.log(
  firstInstance.__proto__ === ExtendedArray.prototype
); // true

const secondInstance = new ExtendedArray(
  true,
  "",
  null,
  2,
  10,
  false,
  "abc"
);

const filteredArray = secondInstance.onlyNumbers();

console.log(filteredArray); // [2, 10] - still instanceof ExtendedArray