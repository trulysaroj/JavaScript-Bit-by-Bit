
/////////////////////////////////////////////////////////////////////////////////////


const userDetails={
    name: "kaylin",
    maths: 23,
    science: 35,
    gk:30
}

// Expected Output:

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }



/////////////////////////////////////////////////////////////////////////////////////


// soln:

// **Ideal way:

const userDetails2 = {
    usernme: userDetails.name,
    subjectCodes: Object.keys(userDetails).filter(sub => sub != 'name').map(value => value[0].toUpperCase()),
    subjectScores: Object.values(userDetails).filter(Number),
}


console.log(userDetails2);




/////////////////////////////////////////////////////////////////////////////////////



// (1) Using Hardcoded:

// **Generating subject code:
let subjectCodes = [];
const subject = Object.keys(userDetails).splice(1, 3);
let subCode = subject.forEach((item) => {
    subjectCodes.push(item.charAt(0).toUpperCase());  
   
})


// **Storing on new object:
let obj = {
    userName: userDetails.name,
    subjectcodes: subjectCodes,
    subjectScores: [userDetails.maths, userDetails.science, userDetails.gk],

};


console.log(obj);


/////////////////////////////////////////////////////////////////////////////////////


// (2) Using Object.assign methods:


const subjects = Object.keys(userDetails).splice(1, 3);
let subCodes = [];
subjects.forEach((item) =>  {
    subCodes.push(item.charAt(0).toUpperCase())
});


let newObj = Object.assign({}, {userName: userDetails.name, 
                                subjectCodes: subCodes,
                                subjectScores: Object.values(userDetails).filter((elem) => typeof elem === 'number'),
                            })         

console.log(newObj);







/////////////////////////////////////////////////////////////////////////////////////



