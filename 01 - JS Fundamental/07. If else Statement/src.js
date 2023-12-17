
// If else statement  ---> Use for making decision on the basic of conditions

// Checking driving license using If statement
const age = 15;
// const eligibleAge = age >= 18

if (age >= 18) {
    console.log('You are eligible for driving lisence ');  // print --> You are eligible for driving lisence if condition satisfied
} else {
    const yearRemain = 18 - age;
    console.log(`You are not eligible for driving lisence. plz try after ${yearRemain} years!!!`); // else print this --> You are not eligible for driving lisence
}



// Anothe example 
const birthYear = 2000;
let century;

if (birthYear >= 2010) {
    century = 20;
    console.log(`You're born on ${century}th century!`);   // Print --> ou're born on 20th century!
} else {
    century = 21;
    console.log(`You're born om ${century} century!!`);    // Print --> You're born om 21 century!!
}








