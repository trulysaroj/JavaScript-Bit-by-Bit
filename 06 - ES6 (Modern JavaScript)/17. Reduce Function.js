
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* reduce() function:
  -> to iterate over an array and accumulate a single value based on the elements of the array. 
  -> It takes a callback function as its first parameter and an optional initial value as the second parameter.*/

  
// *Syntax:
// array.reduce(callback, initialValue);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example: 1
// Generating sum from array

const arr = [1, 2, 3, 4, 5];

const sumArr = arr.reduce((accu, curr) => {
  return accu + curr;
}, 0)                           // 0 is defult value here

console.log(sumArr);  // 15



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example: 2

// Finding maximum value in array
const arr2 = [ 2, 6, 8, 34, 5, 6 ,78, 23 ];

const maxNum = arr2.reduce(((accu, curr) => Math.max(accu, curr)));

console.log(maxNum);  // 78


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
