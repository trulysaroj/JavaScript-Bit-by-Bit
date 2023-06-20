// Functions ---> JavaScript function is a block of code designed to perform a particular task.


// eg.function declearation
function greet() {
  console.log("Hello, I am Saroj, a Software Engineer!");
}


// Function calling or invoking or renning functions
greet(); // Print -> Hello, I am Saroj, a Software Engineer!
greet(); // Print -> Hello, I am Saroj, a Software Engineer!
greet(); // Print -> Hello, I am Saroj, a Software Engineer!

// Note:- We can use function as many times we wish



// Example with parameters
function fruitMixture(apple, orange) {
  // Passing 2 parameters
  console.log(apple, orange);
  const juice = `Juice with ${apple} apples & ${orange} oranges.`;
  return juice;
}


// Function calling  ---> with passing an arguments
const mixJuice = fruitMixture(5, 7);
console.log(mixJuice); // Print -> Juice with 5 apples & 7 oranges.
console.log(fruitMixture(5, 7)); // Print -> Juice with 2 apples & 4 oranges.



// Using another time
const mixJuice2 = fruitMixture(2, 6);
console.log(mixJuice2); // Print -> Juice with 2 apples & 6 oranges.


/* Note:- Some built in functions in JAvascript languages 
     -> console.log();
     -> promplt();
     -> alert();
     -> Number();
     -> String(); 
     -> etc ....
  */

///////////////////////////////////////////////////////////////////////////////////////////////

// Function Declaration & Expression

// 1) FUNCTiON DECLERATIONS ---> First delcear function then call it later
// console.log(calAge(2005)); // Print -> 25

function calAge(birthYear) {
    return 2030 - birthYear;
  }
  
  // Function calling
  let age1 = calAge(2000);
  console.log(age1); // Print 30
  
  // Note:- Function declearation also can called before the functin declere
  
  
  // 2) FUNCTION EXPRESSION  ---> assign to variable and don't give any name also called anonymous function
  // console.log(calAge2(2005)); // Throw error cuz functin expression can't call begore it decleare
  
  const calAge2 = function (birthYear) {
    return 2030 - birthYear;
  };
  
  // calling function
  const age2 = calAge2(2000);
  console.log(age1, age2); // Print -> 30, 30

  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Arrow function ---> Shorter form to write function

const calAge = function (birthYear) {
    return 2030 - birthYear;
  };
  
  // calling function
  const age = calAge2(2000);
  console.log(age2); // Print -> 30


//  Same case using Arrow function 
const calAgeARR = birthYear => 2023 - birthYear;
const age3 = calAgeARR(1999)
console.log(age3);  // Print -> 24


// Another example with multiple parameters
const yearUntillRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return  `${firstName} will retire after ${retirement} years!!`;
}


const AlexRemain = yearUntillRetirement(2000, 'Alex');
const LeoRemain = yearUntillRetirement(1990, 'Leo');

console.log(AlexRemain, LeoRemain);  // Print -> Alex will retire after 42 years!! Leo will retire after 32 years!!


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Callback Function ---> Function calling other functions

// Another function
function cutfruits(fruit) {
    return fruit * 4;
  }
  
  // function calling inside function
  function fruitmixture(apple, orange) {
    const applepices = cutfruits(apple);    // Function calling inside function
    const orangepices = cutfruits(orange);  // Function calling inside function
  
    const juice = `Juice with ${applepices} apples & ${orangepices} oranges`;
    return juice;
  }
  
  // calling function
  console.log(fruitmixture(2, 3));  // Print -> Juice with 8 apples & 12 oranges  ,Cuz 2 * 4 = 8 & 3 * 4 = 12;
  
  
  
  // Another exampe from pervius example
  // function for calculating age
  const calAge = function(birthYear) { 
      return 2023 - birthYear;
  }
  
  
  // Year until retirement function
  function yearRemaining(birthYear, firstName) {
      
      // calling age function in side function
      const Age = calAge(2000);
  
      const yearRemain = 65 - Age;
      const msg = `${firstName} retire after ${yearRemain} years`;
      return msg;
  }
  
  
  // Finally calling yearremainig function
  console.log(yearRemaining(2000, "Alex"));  // Print -> Alex retire after 42 years


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////