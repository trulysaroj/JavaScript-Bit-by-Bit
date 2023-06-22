
/* for .. of Loop:
loop over elements of an array, string, map, set, 
or any other object that implements the iterable protocol. 

for (variable of iterable) {
  // Code to be executed for each iteration
} 

*/ 


// example:
const items = [1, 2, 3, 4, 5];

for (let item of items) {
    console.log(item);    //output: 1, 2, 3, 4, 5
}




// example-2
const iterable = ['a', 'b', 'c'];

for (const [index, value] of iterable.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}
