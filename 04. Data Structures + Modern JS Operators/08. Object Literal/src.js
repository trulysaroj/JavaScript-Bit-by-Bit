
/* object literal --->  For creating and initializing objects directly in your code. 
define and organize key-value pairs as properties of an object in a concise and readable manner.*/


const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm from ${this.city}.`);
    }
  };
  

  console.log(person.name);  // Output: 'John Doe'
  console.log(person.age);   // Output: 30
  person.greet();            // Output: 'Hello, my name is John Doe and I'm from New York.'
  

