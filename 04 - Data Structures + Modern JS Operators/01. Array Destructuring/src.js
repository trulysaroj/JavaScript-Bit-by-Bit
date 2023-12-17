// Destruccturing Array --> breakdown complex data structure in small data structure

"use strict";

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
};


//   Destrucuring Array
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Constructure
const [x, y, z] = arr;

console.log(a, b, c); // Print -> 1, 2,3
console.log(x, y, z); // Print -> 1, 2,3


// Destruecturing from restaurent object
let [main, , secondary] = restaurent.categories;
console.log(main, secondary); // Print -> Italian Vegetarian (skip middle)

// Switching variable Array
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary); // Print -> Vegetarian Italian


// Switching variable Array using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // Print -> Vegetarian Italian



// Destructure array with order methods (Receive value from function)
const [starter, Main] = restaurent.order(0, 2);
console.log(starter, Main); // Print -> ['Garlic bread', 'Sapagetti']


// Nested Array Destructuring
const nested = [2, 4, [1, 2]];
const [m, , n] = nested;
console.log(m, n); // Print -> 2  [1, 2]



// Destructuring individually
const [p, , [q, r]] = nested;
console.log(p, q, r); // Print -> 2 1 2


