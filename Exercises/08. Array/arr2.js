/////////////////////////////////////////////////////////////////////////////////////////

//  we have an array as follows

const userArr = [
  ["ram", 3],
  ["shyam", 4],
  ["hari", 1],
];



// Q5) calculate the length of this array. expected output is --> 3
const arrLength = userArr.length;
console.log(arrLength);


///////////////////////////////////////////////////////////////////////////



// Q6) write a code that gives following as the expected output: ---> ramshyamhari
const mergedName = userArr[0][0] + (userArr[1][0] + userArr[2][0]);
console.log(mergedName);



///////////////////////////////////////////////////////////////////////////


// Q7) Calculate total sum of 3, 4 and 1 using loop, output should be ---> 8
let sum = 0;
for (let i = 0; i < userArr.length; i++) {
  let innerArr = userArr[i];

  for (let a = 0; a < innerArr.length; a++) {
    let element = innerArr[a];

    if (typeof element === "number") {
      sum += element;
    }
  }
}

console.log(sum);


///////////////////////////////////////////////////////////////////////////


// Q8)calulate all the sum of odd numbers

let sumOfOdd = 0;
for (let i = 0; i < userArr.length; i++) {
  let innerArr = userArr[i];

  for (let a = 0; a < innerArr.length; a++) {
    let element = innerArr[a];

    if (element % 2 == 0) {
      sumOfOdd += element;
    }
  }
}

console.log(sumOfOdd);



///////////////////////////////////////////////////////////////////////////


//hard difficultly level
// convert the above array into object.expected output
//{
//{'ram':3},
//{'shyam', 4},
//{'hari',1}
//]

const userObj = userArr.map(([key, value]) => ({ [key]: value }));
console.log(userObj);

//09) add 10 to exisiting userArr in first indexes, expected output is
//[
//['ram',13],
//['shyam', 14]
//['hari',10]
//]

userArr[2][1] = userArr[2][1] + [0];
console.log(userArr);



///////////////////////////////////////////////////////////////////////////


//find a problem in below code, and rewrite fixed solutions:
/* expected output while running this code is 110, do not add any extra 
lines just fix the exisitng line in the code*/

let a = 10;
function test() {
  return (a += 100);
}
test();

console.log(test());



///////////////////////////////////////////////////////////////////////////


