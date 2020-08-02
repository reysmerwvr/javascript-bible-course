// CHALLENGE
// Create a function "waitingFn" with single parameter "timeInMiliSeconds" and inside of the function create "while" loop and this lopp should be running during "timeInMiliSeconds".
// HINT: Date.now() - current time in ms since 1970

// Callbacks, events, events queue and execution context stack, Web APIs 
// Option 1
function waitingFn(timeInMiliSeconds) {
  const futureTime = Date.now() + timeInMiliSeconds;

  while (futureTime > Date.now()) {
    // waiting
  }
}

waitingFn(5000);

setTimeout(() => console.log("Callback is executed"), 2000);

console.log("Function call has just ended");

// Function call has just ended
// Callback is executed

// Option 2
// setTimeout(() => console.log("Callback is executed"), 2000);
// waitingFn(5000);
// console.log("Function call has just ended");
// Function call has just ended
// Callback is executed

// Option 3
// setTimeout(() => console.log("Callback is executed"), 0);
// waitingFn(5000);
// console.log("Function call has just ended");
// Function call has just ended
// Callback is executed

// Option 3
// waitingFn(5000);
// setTimeout(() => console.log("Callback is executed"), 0);
// console.log("Function call has just ended");
// Function call has just ended
// Callback is executed