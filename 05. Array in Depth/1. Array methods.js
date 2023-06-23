/* Array ---> an ordered collection of elements. 
       -> Each element in an array is identified by its index starting from 0. 
       -> allow duplicate values, & also can have multiple occurrences of the same value in array.
       -> use when you need proper ordered list of value */



const myArr = [1, 2, 3, 2, 1];

////////////////////////////////////////////////////////////////////////////////////

 // Some simple Array Methods

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


