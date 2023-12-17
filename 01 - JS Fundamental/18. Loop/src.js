

// For Loop ---> Automate repeated task in programs

// Boring example
// console.log("Push up repetation 1");
// console.log("Push up repetation 2");
// console.log("Push up repetation 3");
// console.log("Push up repetation 4");
// console.log("Push up repetation 5");
// console.log("Push up repetation 6");
// console.log("Push up repetation 7");
// console.log("Push up repetation 8");
// console.log("Push up repetation 9");
// console.log("Push up repetation 10");

// Implementing using For loop ---> For loop keep running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Push up repetation ${rep}`);  // Print it 1 - 10 times with numbers
  }
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Looping Array ---> One of the most use case of loop is on Array

// Array
const elonArray = [
    "Elon",
    "Musk",
    52,
    "CEO",
    ["Tesla", "SpaceX", "Twitter"],
    true,
  ];
  
  // Creating new array from array with their type
  const types = [];
  const types2 = [];
  
  // Iterating all value form array
  for (let i = 0; i < elonArray.length; i++) {
    // Rading from jonas Array
    console.log(elonArray[i], typeof elonArray[i]); // Print -> all vlaue for array
  
    //   Filling types array
    types[i] = typeof elonArray[i];
  
    // Another way
    types2.push(typeof elonArray[1]);
  }
  
  console.log(types); // Print all value type of array
  console.log(types2); // Print all value type of array


  
  // Another Example
  const birthYear = [1990, 1920, 1960, 1950];
  
  const ages = [];
  
  for (let i = 0; i < birthYear.length; i++) {
    ages.push(2023 - birthYear[i]);
  }
  
  console.log(ages); // Print -> [33, 103, 63, 73]
  
  console.log('--- ONLY STRING ---');
  // Continue & Break in Loop
  for (let i = 0; i < elonArray.length; i++) {
    if(typeof elonArray[i] !== 'string') continue;  // Print only vlaue is string and continue
  
    console.log(elonArray[i], typeof elonArray[i]);
  
  }
  


  
  console.log('--- BREAK WITH  NUMBER ---');
  
  // Break ---> Break or stop the channing of loop 
  for (let i = 0; i < elonArray.length; i++) {
    if(typeof elonArray[i] === 'number') break;
  
    console.log(elonArray[i], typeof elonArray[i]);  // Don't print after ---> number ie 52
  }
  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Backward Loop 

// Array
const elonArray2 = [
    "Elon",
    "Musk",
    52,
    "CEO",
    ["Tesla", "SpaceX", "Twitter"],
   
  ];

// Looping it from backward ---> 4, 3, 2, 1, 0 
for(let i = elonArray2.length - 1; i >= 0; i--) {
    console.log(i, elonArray[i]);   // Print all vlaue backwardly
}



// Nested Loop ---> Loop inside loop
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`---> Starting Exercise ${exercise}`);


    // Loop inside Loop 
    for(let rep = 1; rep <= 10; rep++) {
        console.log(`Exercise ${exercise}: Pushup repetation ${rep}`);
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// While loop

// For loop
for (let rep = 1; rep < 10; rep++) {
    console.log(`Push Repition ${rep}`);
  }
  
  console.log("--- While Loop Start ---");
  
  //  Same case using while loop
  let rep = 1;
  
  while (rep < 10) {
    console.log(`While:- Push Repition ${rep}`);
    rep++;
  }
  
  
  // Rolling Dice
  let dice = Math.trunc(Math.random() * 6) + 1;
  
  // console.log(dice);
  
  while (dice !== 6) {
      console.log(`You rolled a ${dice}`);
      dice = Math.trunc(Math.random() * 6) + 1;
      if(dice === 6) {
          console.log('Loop is about to end!!!');
      }
  
  }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


