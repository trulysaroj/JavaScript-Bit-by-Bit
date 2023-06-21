
// Default paramter --> Passing by default parameter in function
"use strict";

const bookings = [];

//   Booking function
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 2000 * numPassenger
) {
  // ES6  already set to defult
  // ES5 - style
  // numPassenger = numPassenger || 1;  // short circuting
  // price = price || 2000; // short circuting

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking); // p. {flightNum: 'A2030', numPassenger: undefined, price: undefined}
  console.log(booking); // P. {flightNum: 'A2030', numPassenger: 1, price: 2000}
//   bookings.push(booking);
};

createBooking("A2030");
createBooking("A4048", 3); // p. {flightNum: 'A4048', numPassenger: 3, price: 2000}
createBooking("S34890", undefined, 3432089);
