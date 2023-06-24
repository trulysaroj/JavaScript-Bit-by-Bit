
/* This is a part-1 Section of JS variables & Constant exercise,
under this we'll be solving some simple beginners friendly problem related with variable & constant. */



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q1. Store your current age,name,college/workplace name into  variables.
// Output the result like -->
// “My name is Nischal and I am 20 years old. I am an IT student at broadway.” 

// soln:
const name = 'Arya';
const age = 20;
const occupation = 'Soft. Engineer';
const workplace = 'spaceX';

const output = `My name is ${name} and I am ${age} years old. I am a ${occupation} at ${workplace}.`;

console.log(output);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q2. Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be an engineer in Kathmandu, and married to Asmita with 2 kids."


// soln:
const numChildren = 2;
const parentsName = 'Asmita';
const location = 'Kathmandu';
const job = 'Engineer';

const fortune = `You will be an ${job} in ${location}, and married to ${parentsName} with ${numChildren} kids.`;

console.log(fortune);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q3. Store a radius into a variable. Calculate the circumference based on the radius.Circumference of circle = 2*Pi*r

// soln:
const radius = 40;
const circumOfCircle = 2 * Math.PI * radius;

console.log(circumOfCircle);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Q4. Write a JavaScript program to convert temperatures from celsius to fahrenheit. Formula:C = (5/9) * (F - 32)

// soln:
function toFahrenheit(celsius) {
    return ((celsius * 9/5) + 32);
};

// converting 10 celsius t0 Fahrenheit
console.log(toFahrenheit(26));



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q5. Calculate expression:  Such that x =3 and y=2
// 3x-2y+2xy
// (x+y)2-1
// (x^3+y^2)/3
// x mod y


// soln:
let x = 3;
let y = 2;

console.log(3 * x - 2 * y + 2 * x * y);
console.log((x + y) * 2 - 1);
console.log((x**3 + y**2) / 3);
console.log(x % y);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////




