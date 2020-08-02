function outerFunction(num) {
  const a = 10;

  function innerFunction(b) {
    console.dir(innerFunction);
    return (a + b) * num;
  }

  return innerFunction;
}

const res1 = outerFunction(2);
console.log(res1(20)); // 60

const res2 = outerFunction(3);
console.log(res2(20)); // 90