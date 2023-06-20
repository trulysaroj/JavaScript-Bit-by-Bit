// Truthy vs falsey value in JS

// FALSEY ---> Value that are not exactly false but will be false when converted to boolean
// TRUTHY ---> All other true value that will be true when converted to boolean



/* There are only 5 falsey vlaue in JavaScript
     
    1) 0
    2) ''
    3) unefined 
    4) null 
    5) Nan

*/



// Boolean(input) ---> convert data to boolean

// Falsey value
console.log(Boolean(0)); // Print -> fasle
console.log(Boolean("")); // Print -> fasle
console.log(Boolean(undefined)); // Print -> fasle
console.log(Boolean(null)); // Print -> fasle
console.log(Boolean(NaN)); // Print -> fasle

// Truthy value
console.log(Boolean("Saroj")); // Print -> True
console.log(Boolean({})); // Print -> true





// Type coercion in example
const money = 0;

if (money) {
  //  0 is a Falsy value then false condition will be executred
  console.log("Don't spend too much money!!!");
} else {
  console.log("You should earn enogh money!!!"); // print -> You should earn enogh money!!! , cuz money is 0
}





// Another case in undefined
let height;

if (height) {
  // Since height is undefined value then when JS convert it to boolean it'll be falsy value & else codeblock will execured
  console.log("Hey! Height is already defined");
} else {
  console.log("Oops! Heigh is undefined or not defined yet!!!"); // Print -> Oops! Heigh is undefined or not defined yet!!!
}


