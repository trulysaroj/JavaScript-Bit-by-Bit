
// call & apply methods


const buddhaAir = {
  airline: "Buddha Air",
  code: "BA",
  booking: [],
  // book: function ()
  book(flightNum, name) {
    console.log(
      `${name} booked a flight from ${this.airline} flight ${this.code} ${flightNum}`
    );

    this.booking.push(
      `Flight: ${this.airline} flight ${this.code} ${flightNum} `
    );
  },
};

//   calling mthods
buddhaAir.book(2233, "Saroj Tamang");

console.log(buddhaAir);




/////////////////  New obj /////////////////////////////

const yaso = {
  airline: "Yaso Air",
  code: "BV",
  booking: [],
};

const book = buddhaAir.book; // will create new book function outside
//   book(200304, 'Lanam'); // p. error

//  CALL METHODS for ---> set this keyword menually to the fucntion calling
// book.call(yaso, 200040, 'Stanza');  // now p. Stanza booked a flight from Yaso Air flight BV 200040

console.log(yaso);


const rahu = {
  airline: "rahu Air",
  code: "RH",
  booking: [],
};


// APPLYMETHODS ---> same as call methods but take array of data
const flightData = [24356, "Sameer"];
book.apply(flightData);
console.log(rahu);
