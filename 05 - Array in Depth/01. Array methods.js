/* Array ---> an ordered collection of elements. 
       -> Each element in an array is identified by its index starting from 0. 
       -> allow duplicate values, & also can have multiple occurrences of the same value in array.
       -> use when you need proper ordered list of value */

const myArr = [1, 2, 3, 2, 1];

////////////////////////////////////////////////////////////////////////////////////

// Some simple Array Methods

// Array Operations
let sub = ["Math", "Account", "Economics", "Physic", "History"];
console.log(sub); // Show all Array element


////////////////////////////////////////////////////////////////////////////////////


// .length ---> Cheking length of Array
console.log(sub.length); // Print 5


////////////////////////////////////////////////////////////////////////////////////


// .push() ---> Adding new element in Last
sub.push("Psychology");
console.log(sub); // Print psychology at last


////////////////////////////////////////////////////////////////////////////////////


// .unshift() ---> Adding new element at beginning
sub.unshift("Sanskrit");
console.log(sub); // Print Sanskrit at beginning


////////////////////////////////////////////////////////////////////////////////////


// .pop() ---> Remove last element from array
sub.pop();
console.log(sub); // Remove Psychology from array


////////////////////////////////////////////////////////////////////////////////////


// .shift() ---> Remove element from first
sub.shift();
console.log(sub); // Remove Sanskrit from Array


////////////////////////////////////////////////////////////////////////////////////


// .splice() ---> Removing element whereever we want
sub.splice(1, 1);
console.log(sub); // Remove Account from Array



sub.splice(1, 3);
console.log(sub); // Remove from index 1 to 3 ie. Economics, Physics & History


//* Differnce between slice & splice:
// slice --> does not modify the original array; it creates a new array based on the specified indices.
// splice --> modifies the original array by removing elements and/or adding new elements at the specified index




////////////////////////////////////////////////////////////////////////////////////



// Removing all Element form Array
// sub = [];
// or
sub.length = 0;

console.log(sub); // Remove All element


////////////////////////////////////////////////////////////////////////////////////


// .indexOf() ---> Checking Position
let lang = ["C", "C++", "Javascript", "Python", "Java"];
let Position = lang.indexOf("Python");

console.log(Position); //Print 4


////////////////////////////////////////////////////////////////////////////////////

// Arrary.isArray() ---> Checking Array:
let langu = "Nepali";
console.log(Array.isArray(langu)); //Print False
console.log(Array.isArray(lang)); //Print true


////////////////////////////////////////////////////////////////////////////////////


// .split() ---> Make string a array by spliting
let text = "Hello! I'm Saroj";
let textArray = text.split(" ");
console.log(textArray); // Make Array  with 3 element ie. Hello, I'm, Saroj


////////////////////////////////////////////////////////////////////////////////////


// .join() ---> Add Element in Array
lang = ["C", "C++", "Javascript", "Python", "Java"];
let langs = lang.join("-");
console.log(langs); //Join all Element as give as a full sting


////////////////////////////////////////////////////////////////////////////////////


//  .concate() ---> Joining 2 Array
lang2 = ["PHP", "Go", "Typescript", "c#"];
lang4 = ["SQL", "MySQL", "Oracle"];

let lang3 = lang.concat(lang2, lang4);

console.log(lang3); // Print all elemetn in once


////////////////////////////////////////////////////////////////////////////////////



// Multidimentional Array ---> Array inside Assay
let langFound = [
  ["C", 1920],
  ["C++", 1930],
  ["Java", 1934],
  ["JavaScript", 1940],
];

console.log(langFound); // Print 4 Array

// Accessing data from multidimentioinal Array
console.log(langFound[3][0]); // Print Javascript ---> 0 index of 3 index
console.log(langFound[1]); // print ---> ['C++', 1930],


// Accessing Data from Array thorgh Programming
// For Loop
lang = ["C", "C++", "Javascript", "Python", "Java"];
let langLength = lang.length;

for (i = 0; i < langLength; i++) {
  console.log(`Element ${i} is ${lang[i]} \n`); // Print all element of Array with their index
}



////////////////////////////////////////////////////////////////////////////////////


let arr = ["a", "b", "c", "d", "e"];

// .slice() --> devide array in two part  (** Doesn't change original array )
console.log(arr.slice(2)); // p.  ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // p.  ['c', 'd']
console.log(arr.slice(-2)); // p.  ['d', 'e']
console.log(arr.slice(-4)); // p.  ['b', 'c', 'd', 'e']
console.log(arr.slice(1, -2)); //p. ['b', 'c']

// Also can create shallow copy
console.log(arr.slice()); // p. ['a', 'b', 'c', 'd', 'e']

////////////////////////////////////////////////////////////////////////////////////

// spread operatros
console.log([...arr]); //p. ['a', 'b', 'c', 'd', 'e']

//Splice() ---> creating array from new array (** Change or affect array )
console.log(arr.splice(3)); //p.  ['d', 'e']
console.log(arr); // p. ['a', 'b', 'c']  ---> Remove d. e from above

console.log(arr.splice(-1)); //p. ['c']
console.log(arr); //p. ['a', 'b']

let newArr = [1, 2, 3, 4, 5];
console.log(newArr.splice(1, 3)); //p [2, 3, 4]
console.log(newArr); // p [1, 5]

////////////////////////////////////////////////////////////////////////////////////

// reverse() ---> Reverse the element     (** affect original array )
arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); //p [5, 4, 3, 2, 1]
console.log(arr); //p  [5, 4, 3, 2, 1]

////////////////////////////////////////////////////////////////////////////////////

//  concat() ---> concate or join 2 array
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

console.log(arr1.concat(arr2)); //p [1, 2, 3, 4, 5, 6]


////////////////////////////////////////////////////////////////////////////////////

// using spread operatros
console.log([...arr1, ...arr2]); //p [1, 2, 3, 4, 5, 6]

// join() ---> join two array
console.log(arr1.join("-")); //p 1-2-3


////////////////////////////////////////////////////////////////////////////////////

