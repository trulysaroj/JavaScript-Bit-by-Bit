

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Spread operator (...)
   -> to expand elements from an iterable (like an array or a string) or an object into individual elements or properties.*/ 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// It's lots of use cases such as:

//* (1) Spreading elements of an array:
const arr = [ 1, 2, 3, 4, 5];

console.log(...arr);   // 1 2 3 4 5 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//* (2) Concatenating arrays:

const arr1 = [1, 2, 3];
const arr2 = [ 4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);  // [ 1, 2, 3, 4, 5, 6]


const newArray = [0, ...arr1];
console.log(newArray);  // [0, 1, 2, 3 ]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//* (3) Copppying Array:

const oldArr = [2, 6, 8];
const copyArr = [...oldArr];

console.log(copyArr);   // [2, 6, 8]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//* (4) Spreading elements of a string:
const lang = 'JAVASCRIPT';

console.log(...lang);   // J A V S C R I P T


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//* (5) Creating shallow copies of objects:
const obj = {
   name: 'Radha',
   age: 25,
};

const radha = {...obj};

console.log(radha);   // {name: 'Radha', age: 25}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////