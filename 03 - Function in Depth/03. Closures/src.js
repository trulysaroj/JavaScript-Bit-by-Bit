// Closoures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;    // passengerCount is accessable because of closure
    console.log(`${passengerCount} passengers`);
  };
};



const booker = secureBooking();

booker(); //p. 1 passengers
booker(); //p. 2
booker(); //p. 3



//////////// -- More Example: 1 -- ///////////////
let f;
const g = function () {
  let a = 22;
  f = function () {
    console.log(a * 2);
  };
};



//   again
let h = function () {
  const b = 30;
  f = function () {
    console.log(b * 3);
  };
};

g(); // p. 44
f();

//   RE-assign f - function
h();
f(); // p. 90



//////////// -- More Example: 2 -- ///////////////

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // callback functin -> timeout
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers !!`);

    console.log(`There are 3 group each of with ${perGroup} of passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds!`);
};


//   Calling
boardPassengers(200, 3);
