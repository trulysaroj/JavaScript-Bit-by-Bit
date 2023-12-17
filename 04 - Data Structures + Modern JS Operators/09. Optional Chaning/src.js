
/* Optional chaining: 
Allows you to safely access properties and methods of an object 
without causing an error if an intermediate property or method is nullish (null or undefined).*/


const person = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA',
      
    }
  };
  
  console.log(person.address?.street); // Output: '123 Main St'
  console.log(person.address?.zipCode); // Output: undefined
  
  