

// TYPE CONVERSION  ---> Convert one type of vlaue to another
const inputYear = '1990';

console.log(inputYear + 10);  // Print 199010 , Cuz it concitate with string


// Number(input) ---> Convert string into number
NewInputYear = (Number(inputYear));
console.log(NewInputYear + 10);   // Print  2000 ,cuz 1990 is convert from string to number

console.log(inputYear, NewInputYear);  // Print both String and Number



// Nan value ---> Not a number value or Invalid Numbers
console.log(Number('Saroj'));  // Print Nan , cuz it can't be convert to number



// String(input) ---> Convert Number to string 
console.log(String(22), 22);  // Print -> 22 as a string  & Number



// TYPE COERCION  ---> Javascript automatically convert one value to anotehr
console.log("I'm " + 32 + " years old");  // Print -> I'm 32 years old  ,cuz 32 number convert to string and concanate



// again 
console.log('23' - '10' - 3);  // Print -> 10, cuz 23 + 10 convert to number and - operatros execute oposite

console.log('23' + '10' + 3);   // Print -> 23103 ,cuz all conver to string + operators executed from left

console.log('23' * '2');  // Print -> 46 , Cuz convert to number

console.log('10' / '2');  // Print -> 5 

console.log('15' > '11');  // Print -> true ,cuz 15 is greate than 11


// #Note:- Only in + operators behave like string or convert to string 





// Number Guesing game
   let x = '1' + 1;  // '11'
       x = x - 1;    // 11 - 1
   console.log(x);   // Print -> 10

   console.log(2 + 3 + 5 + '5');  // Print -> 105  ie. 2+3+5 = 10 + '5' = 105

   console.log('5' + '2' + '3' - 5); // Print -> 518 ie. '5' + '2' + '3' = 523 - 5 = 518


















