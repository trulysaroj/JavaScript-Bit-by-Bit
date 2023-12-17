
// Short Circuiting

//   or || operator ---> Can use any data type, return any data type, & use short circuting
console.log(3 || "Saroj"); // Print -> 3
console.log("" || "Saroj"); // Print -> Saroj
console.log(true || 0); // Print -> true
console.log(undefined || null); // Print -> null

// Note:- only truthy value will execute and stop executed after it

console.log(0 || false || null || undefined || "Hello" || ture || 23); 
// Print -> hello, cuz it's the first truthy vlaue


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const restaurent = {
  name: "Palpasa",
};

// Using ternery operators
// restaurent.guestNum = 20;
const guest1 = restaurent.guestNum ? restaurent.guestNum : 10;
console.log(guest1); // Print now 20 (or 10)

// Using short circuting
const guest2 = restaurent.guestNum || 15;
console.log(guest2); // Print 15



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// AND (&&) operatros ---->
console.log(0 && "Saroj"); // Print -> 0
console.log(false && 23); // False
console.log(undefined && null);
console.log(7 && "Saroj");

// Note:- Don't executed after gettting falsy value when all is true then last value will be returend

console.log("Hello" && true && 23 && null && false); // Print -> null


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
