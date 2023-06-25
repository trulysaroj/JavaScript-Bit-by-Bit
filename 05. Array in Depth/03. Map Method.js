
/* map() method is used to create a new array by applying a function
    to each element of an existing array.
  ->  returns a new array containing the results of the callback function */
  

// Syntax:
// array.map(callback(element, index, array), thisArg)


///////////////////////////////////////////////////////////////////////////////////////////////


// example:
const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map(value => value * 2);

console.log(doubleArr);  //output [2, 4, 6, 8, 10]


///////////////////////////////////////////////////////////////////////////////////////////////


// Looping wiht map:
const arr2 = [1, 2, 3, 4];
const sqrArr = [];

arr2.map(value => sqrArr.push(value * value));

console.log(sqrArr);  //output [1, 4, 9, 16]


///////////////////////////////////////////////////////////////////////////////////////////////0


// Practical Example:
const USDToNRS = 130;
const movements = [5, 7, 10, -60, 200, 600, -40, 500];

const movementsNRS = movements.map(move => move * USDToNRS);

console.log(movementsNRS);   //output: [650, 910, 1300, -7800, 26000, 78000, -5200, 65000]



// Calculating total:
const  totalMovements = movementsNRS.reduce((acc, curr) => acc + curr);
console.log(totalMovements); //output 158860



///////////////////////////////////////////////////////////////////////////////////////////////


