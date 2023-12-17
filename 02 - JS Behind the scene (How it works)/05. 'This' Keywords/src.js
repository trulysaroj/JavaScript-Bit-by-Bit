// This keywords  ---> Points to its owners it's statics not always the same

"use strict";

//   this in ---> gloabl scope
console.log(this); // Print global window object

// this in ---> function
const calAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // Print -> undefined
};

calAge(1999);

//   this in ---> Arrow functino
const calAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this); // Print -> window cuz, this refres to an global in arrow functions
};

calAgeArrow(1999);

//   this in --->  object or methods
const saroj = {
  birthYear: 2002,
  passion: "Coding",
  ismarried: false,

  calAge: function (birthYear) {
    console.log(this);
    console.log(2023 - this.birthYear); // This means -> Saroj Object
  },
};

saroj.calAge(); // Print -> 21

//   Method borrowing
let Elon = {
  year: 1980,
};

Elon.calAge = saroj.calAge;
Elon.calAge();
