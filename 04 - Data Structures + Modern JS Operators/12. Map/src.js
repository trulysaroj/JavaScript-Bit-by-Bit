
// Map ---> a built-in object that allows you to store key-value pairs. 

// Creating a Map:
const map = new Map(); // Empty Map
const mapFromArray = new Map([['A', '1'], ['B', '2']]); // Map with initial key-value pairs

console.log(mapFromArray);  //output Map {'A' => '1', 'B' => '2'}


// Adding and Retrieving Key-Value Pairs:
const map2 = new Map();

map2.set('name', 'John');
map2.set('age', 30);
map2.set('city', 'New York');

console.log(map2.get('name'));  // Output: 'John'
console.log(map2.get('age'));   // Output: 30



// Checking Map Size and Presence of Keys:
console.log(map2.size); // Output: 3

console.log(map2.has('name'));     // Output: true
console.log(map2.has('country'));  // Output: false



// Updating and Deleting Key-Value Pairs:
map2.set('age', 31); // Update value
map2.delete('name'); // Remove key-value pair

console.log(map2);  //output: Map {'age' => 31, 'city' => 'New York'}