
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Class:
  -> a blueprint for creating objects that share similar properties and behaviors. 
  ->  a fundamental concept in  (OOP) and allows you to define a reusable template for creating objects.*/ 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example:

// Creating person class
class person {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Methods
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}



//* Creating object using person class:
let alex = new person("Alex", 30);
let rose = new person("Rose", 25);

console.log(alex);   // person { name: 'Alex', age: 30 }
console.log(rose);   // person { name: 'Rose', age: 25 }



//* Accessing object properties:
console.log(alex.name);  // Alex
console.log(rose.age);   // 25



//* Calling object methods:
alex.greet();  // Hi, I'm Alex
rose.greet();  // Hi, I'm Rose



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*  Inheritance: 
 -> the ability of an object to inherit properties and methods from a parent object or class. 
 -> to create a hierarchy of objects where child objects inherit the characteristics of their parent objects.*/ 


//  Example:
class employee {
    constructor(name) {
        this.name = name;
        console.log(`Hi, I am ${this.name}`);
    }
}



// Another class: --> Inheritetating from employee class
class manager extends employee {   // extends --> extends the methods & properties from employee class
  
    // When creating child's own propeties:
    constructor(name, depart) {
        // for that we must call super constructor function:
        super(name)
        this.department = depart;
    }

};


// Creating manager object with class
let manager1 = new manager('Elon', 'Backend');

console.log(manager1);   // Hi, I am Elon (Inherited from employee class)   
// output: manager { name: 'Elon', departmanet: 'Backend'};

