

///////////////////////////////////////////////////////////////////////////////////////////////

/* Chaining Methods:
   -> to apply multiple methods consecutively on an object or a result of a method call. 
   -> to write more concise and readable code by combining multiple operations into a single expression 


*Syntax:

objectOrValue
  .method1()
  .method2()
  .method3()

  ... more methods  */


///////////////////////////////////////////////////////////////////////////////////////////////


// Exampl -1
const arr = [1, 2, 3, 4, 5];

const chainSum = arr
                .map(num => num * 2)
                .filter(num => num > 5)
                .reduce((acc, curr) => acc + curr, 0);


console.log(chainSum);  //outpout 24


///////////////////////////////////////////////////////////////////////////////////////////////



// Example -2
// method chaining with value pairing:

const fruits = ['apple', 'banana', 'orange'];

const result = fruits
  .map(fruit => fruit.toUpperCase()) // Converts each fruit to uppercase
  .reduce((pairing, fruit) => `${pairing}, ${fruit}`, 'Fruits:'); // Combines fruits with a pairing string

console.log(result); // Output: "Fruits: APPLE, BANANA, ORANGE"



///////////////////////////////////////////////////////////////////////////////////////////////
