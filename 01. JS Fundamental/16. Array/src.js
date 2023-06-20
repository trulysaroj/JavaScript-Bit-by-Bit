
//  Arrays ---> Collection of similar types of Data (Based on index)

// Using variable
const firend1 = "Alex";
const friend2 = "Elon";
const friend3 = "Leo";

// Using Array
const friends = ["Alex", "Elon", "Leo"];
console.log(friends); // Print -> ['Alex', 'Elon', 'Leo']

// Another ways of creatig Array
const year = new Array("1990, 1995, 1997, 2000");


// array[index] ---> Getting data from Array
console.log(friends[0]); // Print -> Alex
console.log(friends[1]); // Print -> Elon
console.log(friends[2]); // Print -> Leo


// .length ---> Check the number of element
console.log(friends.length); // Print -> 3

// Passing Expressoin 
console.log(friends[friends.length - 1]);  // Print -> Leo   ie. 3 -1 = 2 index element

// Replacing value 
friends[2] = 'Ram';  // Replace Leo with Ram
console.log(friends[2]); // Print -> Ram


// Array can hold a differt type of value at the same time
const firstName = 'Ram';
const ram = [firstName, 'Bahadur', 2023 - 1995, 'Programmer', friends];

console.log(ram);  // Print -> 'Ram', 'Bahadur', 28, 'Programmer', Array(3)]
console.log(ram.length); // Print -> 5



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Exercise 
const calAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1995, 1997, 2000, 2005, 2010];
// calculating age 
const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[2]);
const age4 = calAge(years[3]);
const age5 = calAge(years[4]);
const age6 = calAge(years[5]);

console.log(age1, age2, age3, age4, age5, age6);  // Print -> 33 28 26 23 18 13


// Group age into arrays
const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length -1]), age5, age4 ];
console.log(ages);  // Print -> (5) [33, 28, 13, 18, 23]



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array Operations (Methods)

const friends = ["Ankit", "Sushil", "Kiran"];

// .push() ---> Add element at last of array
friends.push("Ganesh");
console.log(friends); // Print -> ['Ankit', 'Sushil', 'Kiran', 'Ganesh']

// .pop() ---> Remove elemnt from last of Array
friends.pop();
console.log(friends); // Print -> ['Ankit', 'Sushil', 'Kiran']

// .unshift() ---> Add elemnt from beginning of the array
friends.unshift("Siddhartha");
console.log(friends); // Print ->  ['Siddhartha', 'Ankit', 'Sushil', 'Kiran']

//  .shift() ---> Remove element from beginning
friends.shift();
console.log(friends); // Print ->  ['Ankit', 'Sushil', 'Kiran']

// .indexOf() ---> check the inex position
console.log(friends.indexOf("Ankit")); // print -> 0
console.log(friends.indexOf("Sushil")); // print -> 1

console.log(friends.indexOf("Suman")); // print -> -1 ie not in Array

// .includes() ---> check element that exist on aray or not and return boolean vlaue
console.log(friends.includes("Sushil")); // Print -> True
console.log(friends.includes("Harry")); // Print -> false , cuz it's not on the array


// Useful in condition
if (friends.includes("Sushil")) {
  console.log(
    "You have a friends called Sushil, & He  is a great Man indeed!!!"  // Print -> You have a friends called Sushil, & He  is a great Man indeed!!!
  );
}

