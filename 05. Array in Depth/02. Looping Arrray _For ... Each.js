
/* forEach method is used to iterate over elements of an array. 
It allows you to execute a provided callback function for each element in the array.*/ 


////////////////////////////////////////////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (value) {
    console.log(value);  //output 1, 2, 3, 4, 5
});


// Using Arrow function
arr.forEach(value => {
    console.log(value);  //output 1, 2, 3, 4, 5 
});



////////////////////////////////////////////////////////////////////////////////////////////////




  // For each on Map
  const curriencise = new Map([
    ["USD", "United state dollers"],
    ["EUR", "Euro"],
    ["INR", "Indian Rupees"],
  ]);

  curriencise.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
  });




////////////////////////////////////////////////////////////////////////////////////////////////



  //   for each with set ---> Unique Array
  const currienciseUnique = new Set(["USD", "EUR", "USD", "NRP", "EUR"]);
  console.log(currienciseUnique);  // p {'USD', 'EUR', 'NRP'}


  currienciseUnique.forEach(function (key, value, set) {
    console.log(`${key}: ${value}`);
  })

  
 
////////////////////////////////////////////////////////////////////////////////////////////////


