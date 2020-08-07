/**
 * EXAMPLE 1
 */
// // console.log(sum(1, 2)); // Uncaught ReferenceError: sum is not defined

const sum = (a, b) => a + b;

console.log(sum(1, 2));

console.log(sum(5, 7));

/**
 * EXAMPLE 2
 */

const post = {
  title: "Sample title",
  comments: 10,
  shared: true,
  published: true,
  postId: 5134
}

// const processedPost = (post) => {
//   return {
//     title: post.title,
//     comments: post.comments,
//     popular: post.comments > 5 ? true : false
//   }
// }

const processedPost = (post) => ({
  title: post.title,
  comments: post.comments,
  popular: post.comments > 5 ? true : false
})

console.log(processedPost(post));

/**
 * EXAMPLE 3
 */

(
  () => {
    // function greet(message) {
    //   return message ? message : "Hey what's up?"
    // }
    // console.log(this);
    // this.greet = greet;
    this.greet = () => "Hey what's up?"
    return this;
  }
)();

/**
 * EXAMPLE 4
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

/**
 * EXAMPLE 5
 */

const anotherNum = {
  value: 5,
  infoArrow: () => {
    console.log(this); // still window
    return this.value;
  },
  infoRegular: function () {
    console.log(this); // newNum object if called with info.call(newNum)
    return this.value;
  }
}

const newNum = {
  value: 17
}

console.log(anotherNum.infoRegular.call(newNum));
console.log(anotherNum.infoArrow.call(newNum));

/**
 * EXAMPLE 6
 */

const str = {
  value: "Hello Delayed",
  // this is lost in the callback function
  greet: function () {
    setTimeout(function() {
      console.log(this); // this refers to window
      console.log(this.value); // undefined
    }, 1000);
  },
  greet1: function () {
    const self = this;
    setTimeout(function() {
      console.log(self); // this refers to str object
      console.log(self.value); // "Hello Delayed"
    }, 1000);
  },
  greet2: function () {
    setTimeout(function() {
      console.log(this); // this refers to str object
      console.log(this.value); // "Hello Delayed"
    }.bind(this), 1000);
  },
  greet3: function () {
    setTimeout(() => {
      console.log(this); // this refers to str object
      console.log(this.value); // "Hello Delayed"
    }, 1000);
  }
};

str.greet2();
str.greet3();
