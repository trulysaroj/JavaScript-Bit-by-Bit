
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* map() function:
 -> to iterate over an array and apply a transformation or operation to each element, 
 -> returning a new array with the results.
 ->  is a higher-order function */


// *Syntax:
// const newArray = array.map((element, index, array) => {
        // Transformation or operation on the element
//     return transformedElement;
//   });
  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example:
// To double array's element
const arr = [2, 3, 4, 5];


// Mapping Array
// const DblArr = arr.map(function(elem) {
//     return elem * 2;
// });



// *Using shortcut Arrow function:
const DblArr = arr.map(elem => elem * 2);

console.log(DblArr);    // [4, 6, 8, 10]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
