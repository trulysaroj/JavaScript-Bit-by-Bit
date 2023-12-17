
///////////////////////////////////////////////////////////////////////////////////////////////


/* Template literals:
   -> create strings that can include variables and expressions. 
   -> They are enclosed within backticks ( ` `) instead of single or double quotes.  */ 




///////////////////////////////////////////////////////////////////////////////////////////////


// example:
const name = 'Alex';
const age = 25;

// Using template literals
const message = `My name is ${name} and I'm ${age} years old.`;

console.log(message);  // Output: My name is alex and I'm 25 years old.



///////////////////////////////////////////////////////////////////////////////////////////////


// *Note: Template literals also support multi-line strings without the need for manual line breaks. 

// example:
const multiLine = `
  This is a multi-line
  string using template literals.
`;

console.log(multiLine);
/*
Output:
This is a multi-line
string using template literals.
*/



///////////////////////////////////////////////////////////////////////////////////////////////


