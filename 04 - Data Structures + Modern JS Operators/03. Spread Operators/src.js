
// Spread Operatros (...) ---> contruct new array from old


// Example:
const restaurent = {
  name: "Maestro Italiano",
  location: "Bouddha, Thamel, Pokhara, Birgunj",
  categories: ["Italian", "Pizzareia", "Vegetarian", "Organic"],
  starterMenu: ["Garlic bread", "Mushroom Shop", "Russain Salad"],
  mainMenu: ["Pizza", "Pasta", "Sapagetti"],

  // Method
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Object inside object
  openHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0,
      close: 24, // Open 24 hrs
    },
  },
  //   Another methods
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your yummy pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};




///////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Spread Operatros (...) ---> contruct new array from old
let array = [4, 5, 6];
let badArr = [1, 2, 3, array[0], array[1], array[2]];
console.log(badArr); // Print -> [1, 2, 3, 4, 5, 6]


// But after ES6 or spread operators
let goodArr = [1, 2, 3, ...array];
console.log(goodArr); // Print -> [1, 2, 3, 4, 5, 6]


// Logging individually
console.log(...goodArr); // Print -> 1 2 3 4 5 6



///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Example
// Copy Array --> shallow copy
const mainCopy = [...restaurent.mainMenu];
console.log(mainCopy); // Print ->  ['Pizza', 'Pasta', 'Sapagetti']



// Join 2 Array
const joinMenu = [...restaurent.mainMenu, ...restaurent.starterMenu];
console.log(joinMenu);
// Print -> ['Pizza', 'Pasta', 'Sapagetti', 'Garlic bread', 'Mushroom Shop', 'Russain Salad']

// Note:- Iterable: Arrays, String, Maps, Sets, Not Object !!


// Example in String
const fName = "Saroj";
const letter = [...fName, "", "t"];
console.log(letter); // Print -> ['S', 'a', 'r', 'o', 'j', '', 't']

console.log(...fName); // Print -> S a r o j


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Spread operatros in function ---> Real world objects
const ingredients = [
  prompt("Let's make pasta! Ingrident1"),
  prompt("Ingredient 2"),
  prompt("Ingrident 3"),
];

console.log(ingredients); // Print -> ['x', 'y', 'z'] or whateve input is filled

// Calling function orde pasta
restaurent.orderPasta(...ingredients); // Print -> Here is your yummy pasta with z, x and c

