
/* This is a part-1 Section of JS --> Assignment Operators, string/number conversion */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q1. Compute following using assignment operators

// x = x +5,where x = 2
let x = 2;
console.log(x = x + 5);


// y= y-2,where y=8
let y = 8;
console.log(y -= 2);     // (Same as y = y -2)


// z = z*4,where z = 4
let z  = 4;
console.log(z *= 4);


// a = a/5, where a=25
let a = 25;
console.log(a /= 5);


// b =b**2, where b =3
let b = 3;
console.log(b **=2);


// m = m%2,where m=3
let m = 3;
console.log(m%2);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q2. Create a variable named totalAmount and store your number as a string.
      // & Convert it into a number type.

let totalAmount =  '42';

// converting to numer 
let numTotal = Number(totalAmount);
console.log(numTotal);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q3. Create a variable named phoneNumber and store it as a number.
	// Convert  it into string type.

let phoneNumber = 9834567865;

const phoneNumberStr = String(phoneNumber);
console.log(typeof phoneNumberStr);  //output: string
console.log(typeof phoneNumber);  //output: number


// Note:- typeof --> Operator check the data type


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q4. Convert string “20ebp” to number and print out the result.

let str = '20ebp';
let strToNumber = Number(str);

console.log(strToNumber);  //output: Nan


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5. Convert “nep10” to number and print out the result to console.Explain the result.

let str2 = 'nep10';

let str2Num = Number(str2);
console.log(str2Num);  //output: Nan 


/* Explanation: 
It shows Nan (Not a Number) cuz, string 10 can convert to number but nep string can't convert to number
That's why it thorws Nan) */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

