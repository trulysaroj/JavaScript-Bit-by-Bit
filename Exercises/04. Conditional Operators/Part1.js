
///////////////////////////////////////////////////////////////////////////////////////////////


// Conditionals operators: Part-1

// Q1. Check if a number is odd or even. 
function checkNum(num) {
    if(num % 2 == 0) {
        console.log('It is even Number');
    } else {
        console.log('It is odd Number');
    }
};


checkNum(2);
checkNum(3);



///////////////////////////////////////////////////////////////////////////////////////////////


// Q2. Check if input variable is a number or not
const input = 100;

if(typeof input === 'number') {
    console.log('Input is a number')
} else {
    console.log('Input is not  a number')
};



///////////////////////////////////////////////////////////////////////////////////////////////


// Q3. Find the largest of two numbers.
let a = 20;
let b = 30;
let c = 40;

if (a > b) {
   console.log('a is the largest of two numbers');
} else {
   console.log('B is the largest of two numbers');
}



///////////////////////////////////////////////////////////////////////////////////////////////


// Q4. Find the largest of three numbers.
let x = 10;
let y = 20;
let z = 30;

if (x >= y && x >= z) {
    largest = x;
  } else if (y >= x && y >= z) {
    largest = y;
  } else {
    largest = z;

  }

console.log(largest);  //p. 30



///////////////////////////////////////////////////////////////////////////////////////////////



// Q5.Perform arithmetic operation based on the option provided. 
// Set two variables with numbers. 
// Create another variable called “option” which can be add/subtract/multiply/divide/power. 
// Based upon the value of the option. Perform appropriate operation. 
// e.g. if option is “add”, perform num1+num2


let v1 = 5;
let v2 = 7;
let option = 'add'; // can be "add", "subtract", "multiply", "divide", or "power"

let result;

if (option === "add") {
  result = v1 + v2;
} else if (option === "subtract") {
  result = v1 - v2;
} else if (option === "multiply") {
  result = v1 * v2;
} else if (option === "divide") {
  result = v1 / v2;
} else if (option === "power") {
  result = Math.pow(v1, v2);
} else {
  console.log("Invalid option");
}

console.log("Result:", result);  //p. 12



///////////////////////////////////////////////////////////////////////////////////////////////


// Q6. Find grades for student marks. 
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.  
// “F” for marks  less than 60.


let marks = 85;
let grade;

if (marks >= 90) {
  grade = "A plus";
} else if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Grade:", grade);  //p. Grade : A



///////////////////////////////////////////////////////////////////////////////////////////////










