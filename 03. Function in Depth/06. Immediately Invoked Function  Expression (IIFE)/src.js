

// Immediately invoked functions ---> Invoked right after it's expression is evaluated (only invoked onece)


// Normal function
const runOnce = function () {
  console.log("This will never ren again!!");
  const age = 22;
};

runOnce();



//   IIFE
(function () {
  console.log("I am immediatly invoked function, only invoked once!!!");
  const myPIN = 2345;
})(); // p. I am immediatly invoked function, only invoked once!!!

//   console.log(myPIN);  // Can't access



// In arrow function
(() => {
  console.log("I am arrow IIFE");
})(); // p. I am arrow IIFE


