
///////////////////////////////////////////////////////////////////////////////////////////////

/* After ES6 (ECMAScript 2015), JavaScript introduced several new Math methods. 
Here are a few notable ones:*/ 


///////////////////////////////////////////////////////////////////////////////////////////////


// *Math.trunc() --> Returns the integer part of a number by removing any fractional digits

console.log(Math.trunc(99.9));  // 99
console.log(Math.trunc(4.2));   // 4


///////////////////////////////////////////////////////////////////////////////////////////////



/* *Math.sign() --> Returns the sign of a number as 1, -1, or 0 representing positive, 
negative, or zero values respectively */

console.log(Math.sign(5));    // 1
console.log(Math.sign(-5));   // -1
console.log(Math.sign(0));    // 0




///////////////////////////////////////////////////////////////////////////////////////////////



// *Math.cbrt() --> Returns the cube root of a number

console.log(Math.cbrt(27));   // Output: 3
console.log(Math.cbrt(-8));   // Output: -2



///////////////////////////////////////////////////////////////////////////////////////////////



// *Math.log10() --> Returns the base-10 logarithm of a number

console.log(Math.log10(100));   // Output: 2
console.log(Math.log10(1000));  // Output: 3



///////////////////////////////////////////////////////////////////////////////////////////////


/* Math.hypot()  --> Returns the square root of the sum of squares of its arguments, 
(which can be useful for calculating the length of a vector.) */

console.log(Math.hypot(3, 4));   // 5



///////////////////////////////////////////////////////////////////////////////////////////////


//* Math.fixedTo() --> Roundup the decimol values

let billAmount = 45667.677878;
console.log(billAmount.toFixed(2));   // 45667.68



///////////////////////////////////////////////////////////////////////////////////////////////


//* toPrecision() --> formats a number using a specified precision (total number of significant digits) and returns a string representation of the number.
let num = 454.456546;
let preciseNum = num.toPrecision(4);
console.log(preciseNum);   // '454.5'



///////////////////////////////////////////////////////////////////////////////////////////////


//*  toLocaleString() --> convert a number into a string, representing the number using the local conventions for digit grouping, decimal separators, and other regional numeric formatting rules based on the user's locale. 

let salery = 100000;
let localSalary = salery.toLocaleString('en-in');  // en-in modify accoding to indian system, as same in nepali too.
console.log(localSalary);   // 1,00,000



///////////////////////////////////////////////////////////////////////////////////////////////


//* Extras:

// Getting random number between specified range
let min = 20;
let max = 30;

let randomNum = Math.floor( Math.random() * (max - min + 1) + min);   // return num between 20-30 always
console.log(randomNum);