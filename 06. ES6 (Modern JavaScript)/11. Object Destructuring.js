
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Object destructuring:
It allows you to extract values from an object and assign them to variables in a convenient way.  */ 


// *Syntax
// const { property1, property2, ...rest } = object;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example:

const person = {
    name: 'Elon Musk',
    age: 52,
    position: 'CEO',
};


// Assigning to variable using old way:
// let name = person.name;
// let age = person.age;
// let position = person.position;

// console.log(name, age, position);   // Elon Musk 52 CEO



// Using Object destructuring:
const {name, age, position} = person;

console.log(name);      // Elon Musk
console.log(age);       // 52
console.log(position);  // CEO



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// *Renaming variables: --> Object destructuring allows you to rename variables during assignment:

// example:
const user = {
    name: 'Alex',
    cast: 'Lama',
};


// Renaming vairbale name using obj destructuring:
const {name: firstName, cast: lastName} = user;

console.log(firstName);  // Alex
console.log(lastName);   // Lama




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// *Default values --> Obj destructuring can be combined with default values to handle cases when 
// a property is undefined or missing.


// example:
const man = {
    fName: 'Leonardo',
}

let {fName, lName = 'Da Vinchi'} = man;
console.log(lName);   // Da Vinchi



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// *object destructuring with nested objects:

const Details = {
    userName: 'John',
    userAge: 30,
    occupation: 'Developer',
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  

  // Destructuring assignment with nested objects
  const { userName, userAge, address: { city, country } } = Details;
  
  console.log(userName);    // Output: 'John'
  console.log(userAge);     // Output: 30
  console.log(city);    // Output: 'New York'
  console.log(country); // Output: 'USA'
  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
