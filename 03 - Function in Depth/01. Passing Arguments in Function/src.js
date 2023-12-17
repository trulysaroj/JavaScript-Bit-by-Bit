

// Passing arguent

const flight = "Ase3456";
const saroj = {
  name: "Saroj Tamang",
  passport: "232458900",
};

const checkIN = function (flightNum, passenger) {
  flightNum = "ASD34";
  passenger.name = "Mr." + saroj.name;
  if (flight.passenger === 232458900) {
    console.log("Check in Successful !!!");
  } else {
    console.log("OOPs wrongs Passport :(");
  }
};

checkIN(flight, saroj);  //output: "OOPs wrongs Passport :(


console.log(flight);
console.log(saroj); // p. {name: 'Mr.Saroj Tamang', passport: '232458900'}



//  anothher
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random * 1000000);
};

newPassport(saroj);
checkIN(flight, saroj);
