
///////////////////////////////////////////////////////////////////////////////////////////////

/* Since ES6 (ECMAScript 2015), there have been several new string methods introduced in JavaScript. 
Here are some of the notable ones:*/ 



///////////////////////////////////////////////////////////////////////////////////////////////


// *startsWith() --> Checks if a string starts with a specified substring and returns a boolean value
const quote = 'Work like a hell';

console.log(quote.startsWith('Work'));  // true
console.log(quote.startsWith('enjoy'));  // false



///////////////////////////////////////////////////////////////////////////////////////////////



// *endsWith(): Checks if a string ends with a specified substring and returns a boolean value.

console.log(quote.endsWith('hell'));   // true
console.log(quote.endsWith('Hell'));   // false



///////////////////////////////////////////////////////////////////////////////////////////////


// *includes(): Checks if a string contains a specified substring and returns a boolean value.

console.log('Js is Fun'.includes('Fun'));     // true
console.log('Js is Fun'.includes('boring'));  // false



///////////////////////////////////////////////////////////////////////////////////////////////


// *repeat(): Returns a new string containing the specified number of copies of the original string.

console.log('Javascript'.repeat(3));  // JavascriptJavascriptJavascript



///////////////////////////////////////////////////////////////////////////////////////////////



// *padStart(): Pads the beginning of a string with a specified character until it reaches a given length.

console.log('111'.padStart(5, '*'));  // **111
console.log('rose'.padStart(6, 'sa'));  // sarose



///////////////////////////////////////////////////////////////////////////////////////////////



// *padEnd(): Pads the end of a string with a specified character until it reaches a given length.

console.log('111'.padEnd(5, '*'));  // 111**
console.log('rose'.padEnd(6, 'sa'));  // rosesa



///////////////////////////////////////////////////////////////////////////////////////////////
