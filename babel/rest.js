function fn1(...a) {
  return a;
  // console.log(a)
  // console.log(arguments)
}

function fn2() {
  for (
    var _len = arguments.length, a = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    a[_key] = arguments[_key];
  }

  return a;
}

const repeat = 1000000;

// ES6
console.time("Function 1 with ES6 features");
for (let i = 0; i < repeat; i++) {
  fn1(1, 2, 3);
}
console.timeEnd("Function 1 with ES6 features");

// ES5
console.time("Function 2 with ES5 features");
for (let i = 0; i < repeat; i++) {
  fn2(1, 2, 3);
}
console.timeEnd("Function 2 with ES5 features");
