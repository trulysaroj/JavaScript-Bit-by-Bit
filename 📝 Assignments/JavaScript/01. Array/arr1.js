
///////////////////////////////////////////////////////////////////////////


// Q1. Expexcted output ---> ['carrot', 'cabbage']
const myMeals = ["carrot", "pumpkin", "cabbage"];

// soln:
const myMeals1 = [myMeals[0], myMeals[2]];
console.log(myMeals1);


///////////////////////////////////////////////////////////////////////////


// Q2. Expected output ---> 'rvp'
const footballTeam = {
  name: "arsenal",
  players: ["ozil", "rvp"],
};

// soln:
const player = footballTeam.players[1];
console.log(player);


///////////////////////////////////////////////////////////////////////////


// Q3. Expected output ---> 11
const titleCount = {
  1998: [4, 5, 6],
  1976: [6, 6, 7],
};

// soln:
let sum = titleCount[1998][0] + titleCount[1976][2];
console.log(sum);


///////////////////////////////////////////////////////////////////////////


// Q4. Output Guessing
function outer() {
  function inner() {
    return [3, 5, 6];
  }
  return inner()[0];
}

outer();

// Output Guessing ---> 3
console.log(outer());


///////////////////////////////////////////////////////////////////////////


// Q5: Expected output ---> name: 'hello hari'
const userDetails = {
  name: "hari",
};
const greeting = "hello";

// soln:
// userDetails.name = greeting + userDetails.name ;
userDetails.name = greeting + " " + userDetails.name;
console.log(userDetails);



///////////////////////////////////////////////////////////////////////////
