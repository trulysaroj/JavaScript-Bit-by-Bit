// callback function

//  generatic function
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirst = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};



//   higher order function ----> function callling other function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);       //p. Original String: JavaScript is the best languge in the world
  console.log(`Transfomred string: ${fn(str)}`);  //p. //p. Transformed String: JAVASCRIPT is the best languge in the world

  // function methods
  console.log(`Transfomred by: ${fn.name}`);
};

// calling higher  order functon ---> callback function
transformer("JavaScript is the best language in the world", upperFirst);


