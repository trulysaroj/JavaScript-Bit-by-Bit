
/////////////////////////////////////////////////////////////////////////////////////

const obj = {
    computer: 42,
    maths: 42,
    science: 50,

    // **Using function:
     calPercent() {
        total = this.computer + this.maths + this.science;
        return (total/150 * 100).toFixed(2); 
    },
}


//calculate the percentage he scored in the exams out of total 150 score


// soln:

// **Mannually
const totalScore = obj.computer + obj.maths + obj.science;
const percentage = (totalScore/150 * 100).toFixed(2);

console.log(percentage);


/////////////////////////////////////////////////////////////////////////////////////


// **Using loop:
let sumScore = 0;

for (let marks in obj) {
    sumScore += obj[marks];
}

const percent = (sumScore/150 * 100).toFixed(2)
console.log(percent);



/////////////////////////////////////////////////////////////////////////////////////


// **Using Function 
obj.calPercent();  //calling object methods from function



/////////////////////////////////////////////////////////////////////////////////////
