


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

  // another methods
  orderPizza: function (mainIng, ...othersIng) {
    console.log(mainIng); // Print -> Chicken
    console.log(othersIng); // Print -> ['Mushroom', 'Olive', 'Cheese', 'Garlic']
  },
};


////////////////////////////////////////////////////////////////////////////////////////////////////

//   Calling orderpizza methods
restaurent.orderPizza("Chicken", "Mushroom", "Olive", "Cheese", "Garlic"); // Print -> ['Mushroom', 'Olive', 'Cheese', 'Garlic']


// Rest Pattern ---> Oposite of Spread Operatros it join or collect the data

//   1) Destruturing
// spread example: ---> (...) is on right side
const arr = [1, 2, 3, ...[3, 4]];

// Rest operators ---> ... is on the left hand side
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other); // Print ->  1 2  [3, 4, 5]  ie. put the rest of the eleement in that array



////////////////////////////////////////////////////////////////////////////////////////////////////


// Another Example
const [pizza, , risotto, ...otherFood] = [
  ...restaurent.starterMenu,
  ...restaurent.mainMenu,
];
console.log(pizza, risotto, otherFood); // Print -> Garlic bread Russain Salad (3) ['Pizza', 'Pasta', 'Sapagetti']


////////////////////////////////////////////////////////////////////////////////////////////////////


// In objects
const { sat, ...weekdays } = restaurent.openHours;
console.log(sat, weekdays); // Print -> {open: 0, close: 24} {thu: {…}, fri: {…}}


// 2) Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 4); // Print -> 6
add(2, 4, 6, 7); // Print -> 19
add(6, 7, 8, 9, 3, 5, 6); // Print -> 44


////////////////////////////////////////////////////////////////////////////////////////////////////


// Another example
let x = [1, 2, 4];
add(...x); // Print -> 7

console.log(...x);  //output: 1 2 4
