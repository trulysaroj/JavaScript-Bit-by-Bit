
///////////////////////////////////////////////////////////////////////////////////////////////


/* filter(): 
   -> is used to create a new array containing elements from the original array
      that satisfy a specified condition. 
   -> It doesn't modify the original array but returns a new array with the filtered elements. 
   
  
   
*Filter Syntax

let newArray = array.filter(callback(element[, index[, array]])[, thisArg])  */ 



///////////////////////////////////////////////////////////////////////////////////////////////



// example:
const arr = [1, 2, 3, 4, 5];

// filtering only odd numbers
const oddNum = arr.filter(num => num %2 != 0);

console.log(oddNum);  //output [1, 3, 5]



///////////////////////////////////////////////////////////////////////////////////////////////


// another example:
const mixArr = [1, 2, 'a', 'b', 3,  4, 'c', 'd'];


// filtering only number value
const numArr = mixArr.filter(Number);
console.log(numArr);   //output [1, 2, 3, 4]


// filtering only string value:
const strArr = mixArr.filter(value => typeof value != 'number') ;
console.log(strArr);  //output ['a', 'b', 'c', 'd']




///////////////////////////////////////////////////////////////////////////////////////////////








  