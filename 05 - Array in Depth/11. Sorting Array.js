

///////////////////////////////////////////////////////////////////////////////////////////////


/* Sort method:
   -> arranges the elements of the array in ascending order based on their string representations. 
   -> rearranges the elements of the array in ascending alphabetical order. 
   -> modifies the original array in place and returns a reference to the sorted array. */



///////////////////////////////////////////////////////////////////////////////////////////////


// Example -1
// Sorting with String

const subjects =  ['Mathematics', 'Physics', 'Zoology', 'Philosophy', 'Biology', 'Economics'];
subjects.sort();

console.log(subjects);   //output: ['Biology, 'Economics', 'Mathematics', 'Philosophy', 'Physics', 'Zoology']




///////////////////////////////////////////////////////////////////////////////////////////////



// Example - 2
// Sorting with Numbers

const arr = [5, 2, 1, 3, 4];

// Ascending order
arr.sort();
console.log(arr);   //output [1, 2, 3, 4, 5]


// Descending order
arr.sort((a, b) => b- a);
console.log(arr);   //output [5, 4, 3, 2, 1]



/* Note: (a, b) => b - a func is used to sort the numbers in descending order, 
which resulting in a negative value for descending sorting. */



///////////////////////////////////////////////////////////////////////////////////////////////
