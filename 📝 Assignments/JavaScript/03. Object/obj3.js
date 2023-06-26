
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


// soln:

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


