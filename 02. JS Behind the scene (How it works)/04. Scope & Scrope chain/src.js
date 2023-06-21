// Scope & Scope chain in JAvascipt

//  Scope ---> space or environment in which variable are decleared
// Scope of variable ---> Region of code where certain varibale can accessed

/* Three Type of scopr in JS
     1) Global Scope 
     2) Local scope 
     3) Block scope
*/

"use strict";

// 1) Global scope --> out of any functin , can access everywhere in programs
const Fname = "Saroj";
const year = 2080;
const passion = "Codding";


// 2) Local / function scope ---> create inside function, only accessable inside the function
function calAge(birthYear) {
  const now = 2023; // Local variable
  const age = now - birthYear; // Local variable
  console.log(firstName); // Print -> Saroj


  // Function inside functon ---> function scope
  function printAge() {
    const output = `${firstName}, You are ${age} years old, and born in ${birthYear}`;
    console.log(output);
  }

  printAge(); // Print --> You are 33 years old, and born in 1990


  //  Block scope
  if (birthYear >= 1081 && birthYear <= 1996) {
    const str = `ohh, ${firstName} you are a milineal !!!`;
    var milineal = true;
    console.log(str);
  }


  // Calling outside of block
  // console.log(str);  // Thorw Error
  console.log(milineal); // Print -> True

  return age;
}



const firstName = "Saroj";
calAge(1990);
//   console.log(printAge());  // Throw Error
// console.log(age); // Throw Error

//   console.log(now);  // Thorw error

// 3) Block scope ---> (ES6 Feature) varaible only access inside certain block of code
let price;
if (price > 2000) {
  let discount = 200; // Block scope
}

//  console.log(discount);  --> Thorw error
