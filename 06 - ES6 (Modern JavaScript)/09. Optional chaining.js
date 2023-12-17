
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Optional chaining (safe navigation operator)":"
allows to access nested properties or methods of an object without explicitly checking each level for null or undefined values.*/ 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// example: 1

const user = {
    name: 'Elon',
    age: 52,

    address: {
        country: 'US',
        // state: 'LA',
    }
};


// Accessing nested properties with optional chaining
const houseNumber = user.address.state?.houseNumber;

console.log(houseNumber);  // undefined




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// *Optional channing in Array
/* Optional chaining can also be used with arrays in JavaScript to access elements 
or call methods on an array without encountering errors if the array or the desired element is missing. */ 

// example:
const arr = [1, 2.5, 3];

console.log(arr[1].toFixed());
// console.log(arr[3].toFixed());   // Throw Error
console.log(arr[3]?.toFixed());    //  undefined (Because ofoptional chaining)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



