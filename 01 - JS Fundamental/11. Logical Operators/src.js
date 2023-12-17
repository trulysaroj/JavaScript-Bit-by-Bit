

// Logical Operators ---> Makes decision based on two boolean value 
let hasDrivingLicense = true;  // A
let hasGoodVision = true;   // B


// AND OPERATOR && ---> Return true only when all value are true
console.log(hasDrivingLicense && hasGoodVision); // Print -> true, cuz both have true value

hasDrivingLicense = false;
console.log(hasDrivingLicense && hasGoodVision);  // Print -> False, Cuz one value is false



// OR OPERATOR || ---> Return true at least one value is true
hasDrivingLicense = false;
hasGoodVision = true; 

console.log(hasDrivingLicense || hasGoodVision);  // Print -> true, Cuz one value is true


// NOT OPERATORS ! ---> Inverse value return
hasDrivingLicense = false;
console.log(!hasDrivingLicense);  // Print true


// Example in decision making
if (hasDrivingLicense && hasGoodVision) { 
    console.log("You are eligible to drive!");
    
} else {
    console.log("You are not eligble to drive!!!");  // Print -> You are not eligble to drive!!!
}


// Adding another boolean vlaue
const isTired = true;  // C
console.log(hasDrivingLicense || hasGoodVision || isTired );    // Print -> true, Cuz one at leastone  value is true
console.log(hasDrivingLicense && hasDrivingLicense && isTired);  // Print -> False, Cuz all value is not true


// In decision making
if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log("You are prefect for Driving!!!");
    
} else {
    console.log("You are not allowed for driving!!!"); // Print -> You are not allowed for driving!!!
}

  


















</script>