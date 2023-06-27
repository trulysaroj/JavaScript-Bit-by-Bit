

///////////////////////////////////////////////////////////////////////////////////////////////



/* 1. Some() method:
   -> tests whether at least one element in the array satisfies a given condition. 
   -> It returns true if any element passes the condition, and false otherwise.



   2.every() method: 
    -> tests whether all elements in the array satisfy a given condition. 
    ->It returns true if every element passes the condition, and false otherwise. */


    

///////////////////////////////////////////////////////////////////////////////////////////////



// Example -1 (some)
// Checking has even

const arr = [1, 2, 3, 4, 5];
const checkEven = arr.some(num => num % 2 == 0);

console.log(checkEven);  //output true




// Example -2 (every)
// Checking if all odd

const arr2 = [1, 2, 3, 4, 5];
const checkOdd = arr.every(num => num % 2 != 0);

console.log(checkOdd);  //output false




///////////////////////////////////////////////////////////////////////////////////////////////
