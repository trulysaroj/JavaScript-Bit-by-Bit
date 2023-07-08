
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* sort() function: 
   -> is used to sort the elements of an array in place. 
   -> takes an optional compareFunction parameter, which is used to define the sorting logic.
   -> compareFunction compares two elements of the array and determines their relative order.*/ 



// *Syntax:
// array.sort(compareFunction);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example: 1
const arr = [1, 4, 3, 5, 2];

// Sorting the array in ascending order
const ascend = arr.sort((a, b) => a - b);

console.log(ascend);  // [1, 2, 3, 4, 5]


// Sorting the array in decending order
const decend = arr.sort((a, b) => b - a);

console.log(decend);  // [5, 4, 3, 2, 1]




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Example -2
// Sorting with String

const subjects =  ['Mathematics', 'Physics', 'Zoology', 'Philosophy', 'Biology', 'Economics'];
subjects.sort();

console.log(subjects);   //output: ['Biology, 'Economics', 'Mathematics', 'Philosophy', 'Physics', 'Zoology']



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

