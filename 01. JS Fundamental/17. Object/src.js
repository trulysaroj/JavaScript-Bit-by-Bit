

// Object overview ---> An entity having state & behaviour (properties & methods)

// Basic Array
const SarojArray = [
    "Saroj",
    "Tamang",
    20,
    "Programmer",
    ["Alex", "Elon", "Leo"],
  ]; // Bt don't have an peropeties
  
  
  // Using Object ---> Assign data with their key or properties
  const saroj = {
    firstName: "Saroj",
    lastName: "Tamang",
    age: 20,
    profession: "Programmers",
    friends: ["Alex", "Elon", "Leo"],
  };
  
  console.log(saroj);
  
  
  // Note:- Objects are very  important topic of Javascript, It's used to group & store a related data on one variables
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Dot Notation vs Bracket Notation ---> accessing Data from object

const elon = {
    firstName: 'Elon',
    lastName: 'Musk',
    age: 52,
    profession: 'CEO',
    company: ['Tesla', 'SpaceX', 'Twitter', 'Solarcity', 'Boring Compnay']
};

console.log(elon);


// Dot Notation  .peopertyName ---> Give propeerties value 
console.log(elon.age);         // Print -> 52
console.log(elon.profession);  // Print -> CEO
console.log(elon.company);    // Print -> ['Tesla', 'SpaceX', 'Twitter', 'Solarcity', 'Boring Compnay']


// Bracket Notation - ['properties Name'] ---> Give propeerties value 
console.log(elon['lastName']);   // Print -> Musk
console.log(elon['age']);        // Print -> 52
console.log(elon['profession']);  // Print -> CEO


// Bracket notation allows to concanicate value 
const nameKey = 'Name';
console.log(elon['firstName' + nameKey]);

// Another example
const interestedIn = prompt('What do you want to know about Elon? Name, Age, company !!!')
console.log(elon[interestedIn]);  // Print -> 52

// console.log(elon[girlFriend]);  // Error

// Handling Error
// if (elon[girlFriend]) {
//     console.log(elon[girlFriend]);
    
// } else {
//     console.log('Wrong Request!!, Plz choose between Name, Age, company ');
// }


// Adding value to objects ---> .propertyName = value; (Dot Notation)
elon.netWorth = 300; // In billion
console.log(elon);  // Print -> netWorth: 300


// Adding new value ['key'] = value; (Bracket Notation)
elon['Strength'] = 'Work Ethic';
console.log(elon);


// Challenge --> Print Elon has 3 company and most popular is Tesla
const name = elon.firstName;
const companyCount = elon.company.length;
const popularCompnay = elon.company[0];

console.log(`${name} has ${companyCount} company and the most popular is ${popularCompnay}`);
// Print -> Elon has 5 company and the most popular is Tesla



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Objects Methods

const elon = {
    firstName: "Elon",
    lastName: "Musk",
    birthYear: 1970,
    profession: "CEO",
    company: ["Tesla", "spaceX", "Twitter", "Boring Company"],
    isAmbitious: true,
  
    // function inside object ---> calAge is properties & functino is  value here
  // calAge: function () {
  //     // console.log(this);  ---> Print -> elon object
  //     return 2023 - this.birthYear;  // 'This' keywords ---> It repreent the elon object itself
  // }
  
  // Store value inside with properties name
  calAge: function () {
      this.age = 2023 - this.birthYear;
      return this.age;
  },
  
  getSummary: function () {
      return `${this.firstName} is a ${this.calAge()} old ${this.profession} of ${this.company.length} company and he ${this.isAmbitious ? 'is a' : 'is not a'} ambitious man!!`
  }
  
  
  };
  
  console.log(elon.calAge());  // Print -> 53
  
  console.log(elon.age); // Print -> 53
  
  // console.log(elon.calAge()); // Print -> 53
  // console.log(elon["calAge"](1970)); // Using [] Notation
  
  
  // Challenge -> Summary of Elon 'Elon is 53 year old CEO of 5 company and he is/not a ambitious man'
  
  console.log(elon.getSummary());
  // Print -> Elon is a 53 old CEO of 4 company and he is a ambitious man!!



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  