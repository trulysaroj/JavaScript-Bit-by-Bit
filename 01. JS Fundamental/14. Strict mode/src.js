
// Strict mode in Javascript  --> "use strict"; Defines JavaScript code that should be executed in "strict mode".
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

"use strict";

let hasDriverslisence = false;
const passTest = true;

if (passTest) hasDriverslisence = true;
if (hasDriverslisence) {
  console.log("You can drive!!");
}


//   Prevent from reserved word
const interface = 'Audio';  // Print -> Uncaught SyntaxError: Unexpected strict mode reserved word 
const private = 234;   // // Print -> Uncaught SyntaxError: Unexpected strict mode reserved word 


