

///////////////////////////////////////////////////////////////////////////////////////////////

/*find() Method: 
-> is used to search and retrieve the first element in an array that satisfies a given condition. 
-> returns the value of the first element that matches the condition, or undefined if no matching element is found. 


*Syntax:

array.find(callback(element, index, array), thisArg)  */


///////////////////////////////////////////////////////////////////////////////////////////////


// Example - 1
// Finding nerest number greater than 3
const arr = [1, 2, 3, 4, 5];
const findNum = arr.find(num => num > 3);

console.log(findNum);  //output 4


///////////////////////////////////////////////////////////////////////////////////////////////



// Example - 2
// Finding userID is 3

const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Alex', age: 28 },
  ];
  
  const userId = 3;

  const findUser = users.find(user => user.id === userId);
  console.log(findUser);   //output  { id: 3, name: 'Alex', age: 28 }




///////////////////////////////////////////////////////////////////////////////////////////////







