
// string ---> sequence of characters that represents text. It is one of the primitive data types in JavaScript


// Creating a String:
const str1 = 'Hello';
const str2 = "World";
const str3 = `JavaScript`;

console.log(str1, str2, str3);  //output Hello World JavaScript



////////////////////////////////////////////////////////////////////////////////////////////////

// Someuseful JS String methods

const str = 'Hello, World!';

console.log(str.length);         // Output: 13
console.log(str.toLowerCase()); // Output: 'hello, world!'
console.log(str.toUpperCase()); // Output: 'HELLO, WORLD!'
console.log(str.charAt(7));     // Output: 'W'
console.log(str.charCodeAt(0)); // Output: 72
console.log(str.concat(' Goodbye!'));  // Output: 'Hello, World! Goodbye!'
console.log(str.includes('World'));    // Output: true
console.log(str.indexOf('o'));         // Output: 4
console.log(str.lastIndexOf('o'));     // Output: 8


console.log(str.slice(7, 12));         // Output: 'World'
console.log(str.substring(7, 12));     // Output: 'World'
console.log(str.substr(7, 5));         // Output: 'World'
console.log(str.replace('World', 'JavaScript')); // Output: 'Hello, JavaScript!'
console.log(str.split(','));                     // Output: ['Hello', ' World!']
console.log(str.trim());                         // Output: 'Hello, World!'
console.log(str.startsWith('Hello'));            // Output: true
console.log(str.endsWith('World'));              // Output: false
console.log(str.repeat(3));                      // Output: 'Hello, World!Hello, World!Hello, World!'



////////////////////////////////////////////////////////////////////////////////////////////////


