
///////////////////////////////////////////////////////////////////////////////////////////////

// Function:  part-1

// (1) Write a function that checks if the provided number is odd or even.
function checkNum(number) {
    if(number %2 === 0) {
        console.log('This is an even number');
    } else {
        console.log('This is an odd number');
      
    }
}


checkNum(2);
checkNum(5)


///////////////////////////////////////////////////////////////////////////////////////////////


// (2) Write a function that takes a number and prints value from 0 to that number (use while loop).
function printNum(num) {
    let i = 0;
    while(i <= num) {
        console.log(i);
        i++;
    }
}


printNum(10);


///////////////////////////////////////////////////////////////////////////////////////////////


// (3) Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as parameters and perform appropriate operations.
function calculate(operation, num1, num2) {
    let result = 0;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else {
        console.log('Plz enter valid input !!!');
    }

    console.log(result);
}


calculate('add', 2, 3);
calculate('multiply', 10, 10)



///////////////////////////////////////////////////////////////////////////////////////////////


// (4) Write a function that takes day of week as parameter and returns 1,2,3,4,5,6. Example.. Provided sunday should return 1,monday returns 2
function dayCheck(day) {
    if(day === 'sunday') {
        return 1;
    } else if (day === 'monday') {
        return 2;
    } else if (day === 'tuesday') {
        return 3;
    } else if (day === 'wednesday') {
        return 4;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 6;
    } else if (day === 'saturday') {
        return 7;
    }
}


dayCheck('sunday');



////////////////////////////////////////////////////////////////////////////////////////


// (5) Write a function that takes 10 numbers and calculates the average of the provided numbers.
function calAverage(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
    let sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
    let average = sum / 10;
    console.log(average);
}

calAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



////////////////////////////////////////////////////////////////////////////////////////


// (6) Write a function that takes a number as a parameter and returns a sum from 0 to that number. 
// E.g if number is 5 then function should return 0+1+2+3+4+5=15

function sumTo(num) {
    let sum = 0;
    for(let i = 0; i < num; i++) {
        sum += i;
    }

    console.log(sum);
}


sumTo(100);  //p. 4950



////////////////////////////////////////////////////////////////////////////////////////


// (7) WAF that converts dollars into cents.
function dollerToCent(doll) {
    console.log(doll * 100);
}


dollerToCent(89);


////////////////////////////////////////////////////////////////////////////////////////

// (8) WAF that converts temperature in Celsius into Fahrenheit
function CelsiusToFahrenheit(celsius) {
    let Fahrenheit = (celsius * 9/5) + 32;
    console.log(Fahrenheit);
}


CelsiusToFahrenheit(100);


////////////////////////////////////////////////////////////////////////////////////////

// (9) WAF that calculates the factorial of a number.
function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}


factorial(5);


////////////////////////////////////////////////////////////////////////////////////////
