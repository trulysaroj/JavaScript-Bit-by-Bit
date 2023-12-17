
// this in reg. functuion and arrow function



//   this in arrow function
const saroj = {
  fName: "Saroj",
  birthYear: 2000,
  passion: "Codding",
  ismarried: false,

  greetArrow: () => {
    console.log(`Hello, ${this.fName}`); // Print -> Hey undifined
  },

  greet: function () {
    console.log(this);
    console.log(`Hello, ${this.fName}`); // Print -> Hey undifined
  },
};



saroj.greet(); // Print -> Hello, Saroj
saroj.greetArrow(); // Print -> Hello, undefined

console.log(this); // Print -> window
console.log(this.fName); // Print -> Undefined



// Note:- In Arrow function this keyword refrer to it's global window object