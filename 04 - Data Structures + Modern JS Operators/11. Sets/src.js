

/* Set data structure --> a built-in object that allows you to store unique values of any type */

// Creating set 
const set = new Set(); // Empty Set
const setFromArray = new Set([1, 2, 3]); // Set with initial values

console.log(setFromArray);   //output  set {1, 2, 3}


/////////////////////////////////////////////////////////////////////////////////////////////////


// Adding and Removing Elements:
const set2 = new Set();

set.add('apple');
set.add('banana');
set.add('orange');

console.log(set.size); // Output: 3

set.delete('banana');

console.log(set.size); // Output: 2


/////////////////////////////////////////////////////////////////////////////////////////////////


// Checking Set Size and Presence of Elements:
const set3 = new Set(['apple', 'banana', 'orange']);

console.log(set.size); // Output: 3

console.log(set3.has('banana')); // Output: true
console.log(set3.has('grape')); // Output: false


/////////////////////////////////////////////////////////////////////////////////////////////////


