
// String & Templete literals in JavaScript

const name = 'Saroj';
const job = 'Software Engineer';
const DOB = 2005;
const currentYear = 2023;


// Using string concanicate
const intro = "I'm " + name  + ', a ' + (currentYear - DOB) + " years old " + job + '!';
      console.log(intro);  // Print --> I'm Saroj, a 18 years old Software Engineer!


// Using Templete literals (``) ---> Added after ES6
const introduction = `I'm ${name} ,a ${currentYear - DOB} years old ${job}!`;
      console.log(introduction);  // Print --> I'm Saroj, a 18 years old Software Engineer!



// We can use `` ---> for just regular string too 
console.log(`I'm Just a regular string ...`);  // Print --> I'm Just a regular string ...



// We can use `` ---> For  Multi-line string too 
const mantra = `Om
mani 
padme 
hum`;
    
console.log(mantra);  // Print --> Om mani padme hum  in multiline











