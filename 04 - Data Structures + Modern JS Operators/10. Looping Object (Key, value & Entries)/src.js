// To loop over an object's properties and values in JavaScript

// Looping over keys and values:
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};


// Looping over keys
for (const key in obj) {
  console.log(key);     // Output: 'name', 'age', 'city'
}

// Looping over values
for (const key in obj) {
  console.log(obj[key]);    // Output: 'John', 30, 'New York'
}


/////////////////////////////////////////////////////////////////////////////////////////////

// Looping over entries (keys and values):
const obj2 = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  // Looping over entries (keys and values)
  for (const [key, value] of Object.entries(obj2)) {
    console.log(`${key}: ${value}`);  //output: name: Jhon, age: 30, city: New York
  }
  


  