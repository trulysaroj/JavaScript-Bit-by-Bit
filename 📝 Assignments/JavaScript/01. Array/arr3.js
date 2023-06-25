
///////////////////////////////////////////////////////////////////////////////

const name = "ram thapa";
//Q1) calculate the length of letters in this string excluding spaces
//expected output is 8

let nameLength = name.length - 1;
console.log(nameLength);


///////////////////////////////////////////////////////////////////////////////


// Q2) write a code that gives following as the expected output:
//['r','a','m',' ','t','h','a','p','a']

let splitName = name.split("");
console.log(splitName);


///////////////////////////////////////////////////////////////////////////////


// Q3) Write a code that capitalizes name. expected output is
// 'RAM THAPA'

const capName = name.toUpperCase();
console.log(capName);


///////////////////////////////////////////////////////////////////////////////


//hard problems
const arr = [3, 3, 1, 2, 6, 3];
// Q4) calculate the sum of only odd numbers.expected output is ---> 8

let oddSum = 0;

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];

  if (element % 2 === 0) {
    oddSum += element;
  }
}

console.log(oddSum);

// console.log(oddNumber);



///////////////////////////////////////////////////////////////////////////////


// Q5) calculate the sum of unique numbers in arr output ---> 12

const uniqueNum = new Set(arr);
const uniqueArr = [...uniqueNum];
// const uniqueArr = Array.from(uniqueNum);

const uniqueSum = uniqueArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);



console.log(uniqueSum);

console.log(uniqueNum);

// Converting Array in to Set
const Arr = [1, 3, 3, 2, 3, 4, 1];
const set = new Set(Arr);

console.log(set); //output: set {1, 3, 2, 4}

// converting set to Array
const Arr2 = [...set];
console.log(Arr2); //output: [1, 3, 2, 4]



///////////////////////////////////////////////////////////////////////////////

