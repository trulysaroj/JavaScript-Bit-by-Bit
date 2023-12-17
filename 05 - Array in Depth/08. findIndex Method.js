
///////////////////////////////////////////////////////////////////////////////////////////////


/* findIndex() Method: 
  -> to find the index of the first element in an array that satisfies a given condition. 
  -> It returns the index of the first matching element, or -1 if no matching element is found.



*Syntax:
array.findIndex(callback(element, index, array), thisArg)  */



///////////////////////////////////////////////////////////////////////////////////////////////

// Example -1
// with index of numbers

const arr = [1, 2, 3, 4, ,5];
const index = arr.findIndex(num => num == 4);

console.log(index);  //output 3



///////////////////////////////////////////////////////////////////////////////////////////////


// Example -2
// With string

const fruits = ['apple', 'banana', 'orange', 'pear'];
const letter = 'o';

const foundIndex = fruits.findIndex(fruit => fruit.startsWith(letter));

console.log(foundIndex); // Output: 2



///////////////////////////////////////////////////////////////////////////////////////////////
