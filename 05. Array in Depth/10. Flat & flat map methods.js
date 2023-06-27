

///////////////////////////////////////////////////////////////////////////////////////////////


/* Flat method:
   -> is used to flatten nested arrays. 
   -> It creates a new array that is a one-dimensional version of the original array
    by concatenating all nested arrays recursively. */



///////////////////////////////////////////////////////////////////////////////////////////////


// Example -1
// In simple flated Array:


const arr = [[1, 2, 3], [4, 5], [6, 7, 8]];
const flatArr = arr.flat();


console.log(flatArr);  //output: [1, 2, 3, 4, 5, 6, 7, 8]


///////////////////////////////////////////////////////////////////////////////////////////////



// Example -2
// In Deeply flated Array:

const arr2 = [[1, [2, 3], [4, [5, 6]]]];
const flatArr2 = arr2.flat(3);     // 3 denotes the 3 deeper level 

console.log(flatArr2);  //output: [1, 2, 3, 4, 5, 6]



///////////////////////////////////////////////////////////////////////////////////////////////



/* FlatMap: 
  -> first, it maps each element using a mapping function, 
      and then flattens the result into a new array. 
  -> used to perform a combination of mapping and flattening in a single operation.*/ 



///////////////////////////////////////////////////////////////////////////////////////////////



// *Incase of flatMap method:

const arr3 = [1, 2, 3];
const flatMapArr = arr3.flatMap(num => [num * num]);

console.log(flatMapArr);    //output  [1, 4, 9]



// *Incase of Map method:
const mapArr = arr3.map(num => [num * num]);

console.log(mapArr);      //output [[1], [4], [9]]




///////////////////////////////////////////////////////////////////////////////////////////////


