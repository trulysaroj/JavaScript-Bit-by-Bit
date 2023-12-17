
 //* 7 Primitive data type in JS 

 let name = 'Leo';            // String
 let age = 27;                // Numbers
 let Isambitious = true;      // Boolean
 let project;                 // Undefined
 let negativity = null;       // Null 
 const id = Symbol('v122')    // symbol  (Unique value vairable)
 let bigNumber = 6540950680972734509790n   // Bigint  (Use to store big scientific number values)




//*  Symbole data-types always give unique value no matter the value passed inside is same 
let userId = Symbol('v122')
console.log(id === userId);  // False


//------------------------------------------------------------------------------------------


 //* Typeofoperator ---> Check Type of the Data 

 console.log(typeof Isambitious);  //  Boolean
 console.log(typeof name);         //  string
 console.log(typeof age);          //  Number
 console.log(typeof id);           // symbol
 console.log(typeof bigNumber);    // bigint
 console.log(typeof 'Siddhartha');  // String


//------------------------------------------------------------------------------------------


 // Dynamic Typing in JS ---> Reassign Value 
    Isambitious = 'Yes'; // Convert to String

    console.log(Isambitious);  // Print 'Yes'
    console.log(typeof Isambitious);  // Now Print String


 
 // Undefined Data Type 
 console.log(typeof project);      // Print undefined
 console.log(typeof negativity);   // This also Undefined
 
 // Eg
 let year;
 console.log(year);
 console.log(typeof year);


 year = 2000;
 console.log(year);         // Print 2000
 console.log(typeof year);  // Print number



 
// -------------------------------------------------------------------------------------
 
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object



