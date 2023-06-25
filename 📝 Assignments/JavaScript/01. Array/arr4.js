
/////////////////////////////////////////////////////////////////////////////////////


//Q1 find if hari is in allUsers array or not/
//expected output is : true


const name= 'hari';
const allUsers = ['hari','shyam','thakur'];

// Solution:
const chekcHari = allUsers.includes('hari');
console.log(chekcHari);


/////////////////////////////////////////////////////////////////////////////////////


//Q2 find number of duplicates
//expected output is : 2

const user= 'hari';
const userArr = ['hari','shyam','hari','thakur'];

// Solution:
const userCount = userArr.filter(value => value === user).length;

console.log(userCount);


/////////////////////////////////////////////////////////////////////////////////////
