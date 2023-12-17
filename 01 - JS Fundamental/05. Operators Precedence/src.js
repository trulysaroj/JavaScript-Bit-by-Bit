// Precedence in JS is which operators sign perform first on the basis of precedence value

// eg. Arithmetic operators
console.log(25 - 10 - 5); // Print 10  --> Proceed from left to right



// Assignment operators  --> = operators execute from right to left
let x, y;
x = y = 25 - 10 - 5; // First execute math operator ie. --> x = y = 10;

console.log(x, y); // Print 10, 10



// () --> Groupping operator has hight precedence that means that will be executed first order.
// eg.
let age1 = 25,
  age2 = 20;



let averageAge = (age1 + age2) / 2;
console.log(averageAge); // Print 22.5  --> Cuz () group operator executed first hten devide by 2


// but when
let meanAge = age1 + age2 / 2; // Print 35 --> Cuz  first devide operators exeuted ie. 25 + 10 = 35
console.log(meanAge);
