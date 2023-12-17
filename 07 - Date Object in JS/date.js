
//* Date object: 
// used to work with dates and times. to create, manipulate, and format dates, enabling various operations related to date and time.


// basic operations using the Date object:
let currentDate = new Date();
console.log(currentDate); 
console.log(typeof currentDate);   //Object 



//* Specific date and time (year, month - 1, day, hour, minute, second, millisecond)
let specificDate = new Date(2023, 11, 5, 10, 30, 0, 0);

let uploadedDate = new Date(2022, 0, 31);
console.log(uploadedDate.toDateString());  // Mon Jan 31 2022




//----------------------------------------------------------------------------------------------------------



//* Getting Components of a Date
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth(); // Month starts from 0 (January)
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let millisecond = now.getMilliseconds();



//----------------------------------------------------------------------------------------------------------



//* Formatting Dates:
// The Date object has several methods to format dates into strings:

let date = new Date();

// Convert to a string using various formats
let dateString = date.toString();
let localeDateString = date.toLocaleDateString();
let localeTimeString = date.toLocaleTimeString();
let customFormat = date.toLocaleString('en-US', { 
     weekday: 'long', 
     year: 'numeric', 
     month: 'long', 
     day: 'numeric' 
    });

console.log(dateString);         //wed dec 6 2023 ...
console.log(localeDateString);   // 12/6/2023
console.log(localeTimeString);   // 1:19:20 AM
console.log(customFormat);       // Wednesday, December 6, 2023




//----------------------------------------------------------------------------------------------------------
