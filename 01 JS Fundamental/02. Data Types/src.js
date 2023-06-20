
 // 7 Primitive data type in JS 

 let name = 'Leo';        // String
 let age = 27;             // Numbers
 let Isambitious = true;   // Boolean
 let project;              // Undefined
 let negativity;           // Null 



 console.log(name);
 console.log(age);
 console.log(Isambitious);


 // Typeofoperator ---> Check Type of the Data 

 console.log(typeof Isambitious);  // Print Boolean
 console.log(typeof name);         // Print string
 console.log(typeof age);          // Print Number

 console.log(typeof 'Siddhartha');  // String



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

