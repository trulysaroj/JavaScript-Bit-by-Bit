

// Comparison operators and logical operators: Part-1



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q1. Write out all comparison operators.

// (==)  ---> Is equal to Operators
// (===) ---> Identical - equal to of same type
// (!=) ---> Not Eqial to 
// (!==) ---> Not identical 
// (>) ---> Greator than
// (>=) ---> Greator than or equal to
// (<) ---> Less than
// (<=) ---> Less than or equal to 
// (?) ---> Conditional operator (Ternery)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q2. Explain the difference between == and === operator.

// Strict Equality (===)
5 === 5;       // true
5 === '5';     // false (different types)
true === true; // true


// Loose Equality (==)
5 == 5;       // true
5 == '5';     // true (string '5' is coerced to a number)
true == true; // true

0 == false;   // true (boolean false is coerced to number 0)
'' == false;  // true (empty string is coerced to boolean false)
null == undefined; // true (both are considered loosely equal)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q3. Check if “5” === 5 . Check if “5” == 5. Explain the answer in both cases.

console.log("5" === 5);  //output false  (Because different type)
console.log("5" == 5)    //output true  (Becasue (string '5' is coerced to a number))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q4. Check if 5!==10. Explain the answer.
console.log(5 !== 10); //output true (Becasue 5 number is not equal to 10)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q5. Check if 100 is greater than 10.
console.log(100 > 10);  //output true (Becasue 100 is greater than 10)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 6. Check if 100 is greater than 100. Also check if 100 is greater than or equal to 100.

console.log(100 > 100);  //output false
console.log(100 >= 100); //output true 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7. Check if 5 is less than 10.
console.log(5 < 10);  //output true


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 8. Is “Dinesh”===”dinesh”?Explain.
console.log("Dinesh" === "dinesh");  //output false (Becasue its not strictly equal to)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 9. Explain NaN(Not a Number)*/ 
// NaN stands for "Not a Number." 
// It is a special value that represents the result of an operation that cannot be expressed as a valid number.


// example:

console.log(0 / 0);      // NaN
console.log(Math.sqrt(-1));  // NaN
console.log(parseInt("Hello"));


console.log(NaN + 5);   // NaN
console.log(NaN * 10);  // NaN
console.log(Math.sqrt(NaN)); // NaN



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


