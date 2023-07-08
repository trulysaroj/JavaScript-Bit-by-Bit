
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*  'This' keyword behaves differently depending on how it is used. 


(1) Global Scope: 
In the global scope (outside of any function),
this refers to the global object, which is window in browsers or global in Node.js.


(2) Object Methods: 
When this is used inside a method of an object, 
it refers to the object itself. The value of this is dynamically determined 
at runtime based on how the method is called.


(3) Function Invocation: 
When a function is invoked as a standalone function (not a method or constructor), 
the value of this depends on how the function is called. In strict mode ("use strict"), this is undefined, 
whereas in non-strict mode, this refers to the global object.


(4) Arrow Functions: 
Unlike regular functions, arrow functions dont bind their own this value. 
Instead, they inherit the this value from the surrounding scope. 
So, the value of this inside an arrow function refers to the this value of the enclosing scope.  */ 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example:

// *Object methods:
const person = {
    name: 'Alex',
    greet () {
        console.log(`Hi, ${this.name}`);
    },
};


person.greet();  // hi, Alex



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// *Standalone Function:
function greet() {
    console.log(`Hi, ${this.name}`);
};


const user = {
    name: 'Lisa',
}


greet();  // Hi, undefined! (in non-strict mode)
greet.call(user)  // Hi, Lisa  (explicitly binding 'this')



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// *Arrow Function:
const obj = {
    name: 'Ramya',
    greet: () => {
       console.log(`Hi, ${this.name}`);
    },
};


obj.greet();  // Hi, undefined

// *Note:- arrow functions dont bind their own this value


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
