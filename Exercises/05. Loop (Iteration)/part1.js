

///////////////////////////////////////////////////////////////////////////////////////////////

// Iterations/Loop:  part-1

 
// (1) Write a JS code to print numbers from 0 to 10 

for(let i = 0; i <= 10; i++) {
    console.log(i);
};


///////////////////////////////////////////////////////////////////////////////////////////////
 

// (2) WAP to print the numbers from 12 to 24

for(let i = 12; i <= 24; i++) {
    console.log(i);
};
 

///////////////////////////////////////////////////////////////////////////////////////////////


// (3) WAP to add numbers from 0 to n using for loop and while loop. 
 
// **Using for loop
let sum = 0;
for(let i = 0; i <= 20; i++) {
    sum += i
}

console.log(sum);  //output: 210



// **Using While
let i = 0;
let sum1 = 0;
while(i <= 20) {
    sum1 += i;
    i++;
}
console.log(sum1);  //output 210



///////////////////////////////////////////////////////////////////////////////////////////////


// (4) Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even and displays a message on the screen. 

// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even"


for(let i = 0; i <= 15; i++) {
    if(i %2 == 0) {
        console.log(`${i} is even.`);
    } else  {
        console.log(`${i} is odd.`);   
    }    
};



///////////////////////////////////////////////////////////////////////////////////////////////

 

// (5) Write a JS code to calculate the sum of digits in a number 

function sumOfDigit (number) {
    let sum = 0;
    let num = Math.abs(number);  // Convert negative number to positive

    while (num > 0) {
        sum += num % 10; // Add the last digit to the sum
        num = Math.floor(num / 10); // Remove the last digit
      }
    
      return sum;
}


console.log(sumOfDigit(23));  //output 5



///////////////////////////////////////////////////////////////////////////////////////////////



// (6) Add from 0 to n numbers using for and while loop. E.g. if n = 10;

// **Using For lop:
let sum2 = 0;
for(let i = 0; i < 10; i++) {
    sum2 += i;
}

console.log(sum2);  //output 45



// **Using while loop:
let j = 0;
let sum3 = 0;

while (j < 10) {
    sum3 += j;
    j++;
    // return sum  
}

console.log(sum3);  //output 45




///////////////////////////////////////////////////////////////////////////////////////////////
