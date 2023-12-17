
///////////////////////////////////////////////////////////////////////////////////////////////

// ES6 (Modern JavaScript Section)


// (1) var ---> has function scope, is hoisted, allows redeclaration and reassignment.

var name = 'Alex';
 name = 'Siddhartha';
console.log(name);  // Print 'Siddhartha'


// Example with var:
function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }


  exampleVar();




///////////////////////////////////////////////////////////////////////////////////////////////


// (2) let ---> has block scope, is not hoisted, allows reassignment but not redeclaration.

let age = 30;
 age = 32;  // Now value of age is 32

//  let age = 30; // can't do it


// Example with let
function exampleLet() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
  }


exampleLet();


///////////////////////////////////////////////////////////////////////////////////////////////


// (3) const --->  has block scope, is not hoisted, and cannot be reassigned (but does not make objects or arrays immutable).


const DOB = 2010;
 //DOB = 2010;  // Can't reassign --> Show error

// Can't declare empty variable with const year; // It's an error



// Example with const
function exampleConst() {
    const x = 10;
    if (true) {
      const x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
  }

 
exampleConst();



///////////////////////////////////////////////////////////////////////////////////////////////









