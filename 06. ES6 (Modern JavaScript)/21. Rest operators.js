
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Rest operator (...) 
   -> to represent an indefinite number of arguments as an array. 
   -> It is primarily used in function declarations and function expressions to handle variable-length argument lists.*/


// *Syntax:

// function functionName(...restParameter) {
    // Function body
//   }
  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example: 1

function sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number;
    }
    console.log(total);
};


// clling with rest parameter
sum(1, 2, 3, 4, 5); // 15


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//* Others useful applications of Rest operators:


//* (1) Destructuring arrays

const arr = [1, 2, 3, 4, 5];
const [num1, num2, num3, ...rest] = arr;

console.log(num1);  // 1
console.log(num2);  // 2
console.log(num3);  // 3
console.log(rest);  // [4, 5]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//* (2) Destructuring objects:

const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
  };
  
  const { name, age, ...Rest } = person;
  
  console.log(name); // Output: John
  console.log(age); // Output: 30
  console.log(Rest); // Output: { city: "New York", country: "USA" }
  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//* (3) Passing multiple arguments to a function: 

function printNames(...names) {
    names.forEach(name => {
      console.log(name);
    });
  }
  
  printNames("John", "Jane", "Alice");  // John, Jane, Alice



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
