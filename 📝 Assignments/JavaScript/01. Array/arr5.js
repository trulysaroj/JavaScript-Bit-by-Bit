
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
