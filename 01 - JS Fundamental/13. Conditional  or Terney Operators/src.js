
// Conditional/Ternery Operators  ---> Same as if else condition but write in jsut one line code

let age = 20;
age >= 18 ? console.log("Now you have became an Adult, Make a lots of moeny!!!") : console.log("Alrigh you are still a child Don't worry!!");
// Print -> Now you have became an Adult, Make a lots of moeny!!!

/* Note:- It's also ternery Operators cus it have 3 parts 
  (condition) ?  if code : else code  */


// Since its a expression we can stor value using it
const user = age >= 18 ? "Adult" : "Child";
console.log(user); // Print -> Adult


// Same this case using if else statement
let User2;
let age1 = 20;
if (age1 >= 18) {
  User2 = "Adult";
} else {
  User2 = "Çhild";
}


console.log(User2); // Print -> Adult


// Since its an expression it can also use in templete literal
console.log(`I like to drink ${age1 >= 18 ? "Wine" : "Juice"}`); // Print -> I like to drink Wine since age = 22
