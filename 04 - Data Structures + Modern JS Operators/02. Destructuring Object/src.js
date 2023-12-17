

 // Object Destructuring

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

   // Another methods
   orderDelivery: function (obj) {
       console.log(obj);
   },
 };


//   Calling orderdeliverymethod 
restaurent.orderDelivery({
   time: '10:30',
   address: 'Bouddha',
   mainIndex: 2,
   starterIndex: 2
})



 //   Destructuring Object
 const { name, openHours, categories } = restaurent;
 console.log(name, openHours, categories);
 //  Print -> Maestro Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open: 12, close: 22}[[Prototype]]: Object (4) ['Italian', 'Pizzareia', 'Vegetarian', 'Organic']


 // Giving Names
 const {
   name: restaurentNAme,
   openHours: hours,
   categories: tag,
 } = restaurent;


 console.log(restaurentNAme, hours, tag);  // Print -> same as above bt assing net varables names


//   Default value
const {menu = [], starterMenu: starters = []} = restaurent;
console.log(menu, starters);  // Prnit -> Empty menu with stated menu value


// Mutating variables
let a = 111;
let b = 222;

let obj = {a:25, b:77, c:30};
({a, b} = obj);  // Locked on parenthesis

console.log(a, b);  // Print -> 25, 77



// Nested Object destructuring 
const {fri: {open, close}} = openHours;
console.log(open, close);  // Print -> open: 11, close: 23

