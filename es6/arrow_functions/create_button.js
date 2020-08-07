const createButton = (title) => {
  const btn = document.createElement("button");
  let clicksQty = 0;

  btn.innerHTML = title;
  // btn.onclick = function() {
  //   console.log("Button was clicked");
  //   btn.innerHTML = `Button was clicked ${++clicksQty} times`;
  // }

  // Regular function expression
  btn.addEventListener("click", function() {
    console.log("Button was clicked");
    // // console.log(this); // btn
    this.innerHTML = `Button was clicked ${++clicksQty} times`;
  });

  // Arrow function expression
  // btn.addEventListener("click", function() {
  //   console.log("Button was clicked");
  // //   console.log(this); // windows object
  //   btn.innerHTML = `Button was clicked ${++clicksQty} times`;
  // });

  document.body.appendChild(btn);
};

createButton("Click me");
createButton("Click me too");