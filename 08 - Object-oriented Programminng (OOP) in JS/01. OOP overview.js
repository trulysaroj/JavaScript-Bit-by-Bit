
///////////////////////////////////////////////////////////////////////////////////////////////


/* Object-oriented programming (OOP):
   -> a programming paradigm that organizes code into objects that interact with each other
   -> JavaScript supports object-oriented programming through its prototype-based inheritance system.*/ 



///////////////////////////////////////////////////////////////////////////////////////////////


// 2 way of creating object in js:



//* (1) Object Literals:

// Example:

// Creating an object literal
let person = {
  name: "Alex",
  age: 20,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing object properties
console.log(person.name); // Output: Alex
console.log(person.age);  // Output: 20

// Calling object method
person.greet(); // Output: Hello, my name is Alex



///////////////////////////////////////////////////////////////////////////////////////////////


//* (2) Constructor Functions and Prototypes:
//  -> Constructor functions are used to create objects with shared properties and methods


// Example:

// Constructor function
function Person(name, age) {
   this.name = name;
   this.age = age;
 }
 
 // Adding a method to the prototype
 Person.prototype.greet = function() {
   console.log("Hello, my name is " + this.name);
 };
 

 // Creating objects using the constructor function
 let person1 = new Person("Alex", 20);
 let person2 = new Person("Riya", 25);
 
 // Accessing object properties
 console.log(person1.name); // Output: Alex
 console.log(person2.age);  // Output: 25
 

 // Calling object method
 person1.greet(); // Output: Hello, my name is Alex
 

///////////////////////////////////////////////////////////////////////////////////////////////



//* Note:-  4 fundamental principles of object-oriented programming (OOP) / "four pillars" of OOP:


/* (1) Encapsulation:
  ->  bundling data and the methods that operate on that data within a single unit
  -> It hides the internal implementation details of an object and provides a public interface to interact with the object. 


  (2) Inheritance:
   ->  inherit properties and methods from other objects, creating a hierarchical relationship between classes


  (3) Polymorphism:
   -> it allows different objects to respond to the same method call in their own specific way.


  (4) Abstraction:
  -> It involves identifying the essential features and behaviors of an object and ignoring the irrelevant details  */ 



///////////////////////////////////////////////////////////////////////////////////////////////
