// Bind methods

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


const yaso = {
  airline: "Yaso Air",
  code: "BV",
  booking: [],
};

const book = buddhaAir.book; // will create new book function outside

//   Call methods
//   book.call(yaso, 200040, "Stanza"); // now p. Stanza booked a flight from Yaso Air flight BV 200040




//////////////  Bind methods  ---> return new function /////////////////////
const bookYasu = book.bind(yaso);

// function calling
bookYasu(233048, "Aarya"); // p. Aarya booked a flight from Yaso Air flight BV 233048


//   partial application -- bind
const addTax = (taxRate, value) => value + (value * taxRate) / 100;
console.log(addTax(10, 200)); // p. 220

const addVAT = addTax.bind(null, 23);
console.log(addVAT(5000)); //p. 6150


