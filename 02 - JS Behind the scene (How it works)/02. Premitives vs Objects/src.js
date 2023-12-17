// Premitives vs Object type

//   Primitives --> number, string, boolean

let age = 20;
let oldAge = age;
age = 22;

console.log(age);
console.log(oldAge);

// Example ---> In primitives types
let lastName = "Shrestha";
let oldLastName = lastName;

lastName = "Tamang";

console.log(lastName); // Print -> Tamang
console.log(oldLastName); // Print -> Shrestha



// In refreence or objects

let yesodhara = {
  firstName: "Yesodhara",
  lastName: "Shrestha",
  age: 26,
};

// After Married
let marriedYesodhara = yesodhara; // Assigning to old object
marriedYesodhara.lastName = "Tamang";

console.log("Before Marriage:", yesodhara); // Print -> lastName: 'Tamang',
console.log("After marriage:", marriedYesodhara); // Print -> lastName: 'Tamang',



// Soultion for assingmeing new objcts for this
// Coppying objects
let yesodhara2 = {
  firstName: "Yesodhara",
  lastName: "Shrestha",
  age: 26,
};



// merging and creating new object
const newYesodhara2 = Object.assign({}, yesodhara2);
newYesodhara2.lastName = "Tamang";

console.log(yesodhara2); // Print -> lastName: 'Shrestha'
console.log(newYesodhara2); // Print -> lastName: 'Tamang',
