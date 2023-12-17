
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Callback function:
 -> a function that is passed as an argument to another function and 
 -> is executed when a certain condition or event occurs. 
 -> Callback functions are commonly used in asynchronous operations or to handle events */
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example:

function sum(a, b, callback) {
    console.log(a + b);
    callback();  
}

sum(2, 3, greet);  // 5   & Hello



// another functin to pass as a parameter (Callback function):
function greet() {
    console.log('Hello');
   
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// *In annonymous Function:

function addSum (a, b, alert)  {
    console.log(a + b);
    alert()
    
}


// passing anynomous fuction as a parameter:
addSum(7, 7, function() {
    console.log('Alert ...');
});    // 14 & Alert ...



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


