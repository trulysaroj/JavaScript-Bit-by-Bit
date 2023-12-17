// Operatrs in Javascript

// 1) Arithmetic Operator ---> Math sign & symbol
let x = 7,
  y = 8;

console.log(x + y); // Print 15
console.log(y - x); // Print 1
console.log(x * y); // Print 56
console.log(y / x); // print 1.1428571428571428
console.log(y % x); // Print 1
console.log(x ** 2); // Print 49  --> 7 * 7

// Eg. in practicle case
const elonAge = 2023 - 1975;
const sarojAge = 2023 - 2002;
console.log(elonAge, sarojAge); // Print 48 21

let currentYear = 2023;
const calAge = currentYear - 1998;
console.log(calAge); // Print 25

console.log(calAge * 2);



// + operators also join two string
const firstName = "Saroj";
const lastName = "Tamang";

console.log(firstName + " " + lastName);  // Print Saroj Tamang


// 2) Typeof Operator ---> check value type of variables
let name = "Saroj",
  age = 22;

console.log(typeof name, typeof age); // Print string &Number



//  3) Assignment Operator ---> = Assign value
let a = 8;
let b = 4;

let c = a + b;
let d = 20 / 2;

console.log(c); // Print 12
console.log(d); // Print 10

c += 3;
console.log(c); // Print 15  --> c = c + 3  (12 + 3)

d -= 5;
console.log(d); // Print 5 --> d = d - 5   (10 - 5)

a *= 2;
console.log(a); // Print 16 --> a = a * 2  (8 * 2)

b /= 2;
console.log(b); // Print 2 --> b = b - 2  (4 - 2)

a %= 4;
console.log(a); // Print 0 --> a = a/4  (16/4) remaning is 0

b++;
console.log(b); // Print 3 --> b = b + 1  (2 +1)

d--;
console.log(d); // Print 4 --> d = d -1  (5 -1)




// 4) Comparrsion Operator ---> Compare two data  return boolean vlaue

let X = 9;
let Y = 10;

console.log(Y > X); // Print true
console.log(X > Y); // Print false

console.log(6 >= 5); // Print true
console.log(100 <= 101); // Print true




// This keywords
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
