
// function returning new function

const greet = function (greeting) {
  // returning new function
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};

const greeters = greet("Hey"); // Now greeters is also function it call greet functuon
greeters("Saroj"); // p. Hey Saroj
greeters("Elon"); // p. Hey Elon



//   direct calling
greet("Hello")("Saroj"); // p. Hello Saroj



// Using arrow function
const greet2 = (greeting) => {
  // returning new function
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeters2 = greet2("Hello"); 

greeters2("Leo"); //output: Hello Leo}
greet2("Hellluuu")("Yasu!!!"); //p. Hellluuu Yasu!!!
