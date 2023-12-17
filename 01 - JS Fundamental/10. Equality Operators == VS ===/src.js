// Equality Operators in JS

// === ---> Strict equal value  (don't perfomr type coercion)
let age = 18;
if (age === 18) {
  console.log("You just become an Adult, Now you should Earn on you own!!!"); // Print -> You just become an Adult, Now you should Earn on you own!!!
}


console.log(18 === 18); // True
console.log(18 === 19); // False



// == ---> Loose operators (Do perform type coercion)
console.log("18" == 18); // true   ie. '18' will convert into number
console.log("18" === 18); // false

// Note:- Avoid loose equality operators as much as possible to prevent from bug in programs




// prompt() ---> Take input from user
const userAge = Number(prompt("Plz, Enter your age!"));
console.log(userAge, typeof userAge); 



// Using equality
if (userAge === 22) {
  // 22 = 22  ---> Convert to string
  console.log(`Cool! your age is ${userAge} in you 20s!!!`); // Print -> Cool! your age is 22 in you 20s!!!
} else if (userAge === 30) {
  console.log("You are in your 30s");
} else {
  console.log("You are not 22 or 30");
}



// !== & != ---> Not Equal operators


// !== --> Strict not equal
console.log(3 !== 2); // True
console.log(3 !== 3); // False
console.log(3 !== "3"); // True


// != ---> Loose operators
console.log(5 != 3); //true
console.log(5 != 5); // False
console.log(5 != "5"); // False
