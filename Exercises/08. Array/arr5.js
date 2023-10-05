
//////////////////////////////////////////////////////////////////

// Q1.
const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in

let sum = 0;
for (let num of arr) {
    sum += num; 
};

console.log(sum);


//////////////////////////////////////////////////////////////////


//high level

// Q2.
const users =['hari', 'shyam', 'hari']
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate

// let temUser = [];

if(users.includes('hari')) {
    users.pop();
    // temUser.push(users);
}

console.log(users);




//////////////////////////////////////////////////////////////////


// Q3.
const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array

const flatArr = newArr.flat();

let sumOdd = 0;
for(let elem of flatArr) {
    if(elem %2 != 0) {
    sumOdd += elem
    }
};

console.log(sumOdd);



//////////////////////////////////////////////////////////////////


const myDetails = [
    {id:3, name: 'hari'},
    {id:5, name: 'shyam'},
    {id:6, name: 'gopal'},
  ]
  
// return only array of ids: expected output  [3,5,6]

const idArr = [];
myDetails.forEach((index) => {
    idArr.push(index.id)
   
});

console.log(idArr);



///////////////////////////////////////////////////////////////////////////////////////////////



const userDetails= [
    {score: 0, name:'hari', marks: [10,3,23]},
    {score: 0, name:'shyam', marks: [50,23,23]},
    {score: 0, name:'shyam',marks: [20,13,43]},
]
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]


const newUserDetails = userDetails.map((user) => {
    let marks = user.marks;

    // calculating sum of array
    let totalSum = marks.reduce((accu, curr) => accu + curr);
    
    // Returning new object with totalSum
    return {...user, score: totalSum}    // (Object destructuring shorthand)
    
});


console.log(newUserDetails);



///////////////////////////////////////////////////////////////////////////////////////////////
