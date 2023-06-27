
///////////////////////////////////////////////////////////////////////////////////////////////

/* reduce() Method:
 -> used to reduce an array into a single value. 
 -> It applies a callback function to each element of the array, resulting in a single accumulated value 


*Syntax:
array.reduce(callback, initialValue)  */



///////////////////////////////////////////////////////////////////////////////////////////////


// Example -1
// sum of elements in array
const arr = [1, 2, 3, 4, 5];
const sumArr = arr.reduce((accu, currentValue) => {
    return accu + currentValue;
}, 0);


console.log(sumArr);  //output 15


///////////////////////////////////////////////////////////////////////////////////////////////


// Exampple - 2
// maximum value in an array of numbers:

const arr2 = [2, 6, 20, 40, 39, 90, 100];
const maxNum = arr2.reduce((max, currentNum) => {
    if(max > currentNum) {
        return max;
    } else {
        return currentNum;
    }
});


console.log(maxNum);  //output 100



///////////////////////////////////////////////////////////////////////////////////////////////


// Exampl-3 
// containing mixed data types (strings and numbers) to calculate the sum of all numeric values:

const arr3 = [1, 2, 'a', 'b', 4, 5, 'c', 'd'];

const sumNUM = arr3.reduce((sum, current) => {
    if(typeof current === 'number') {
        return sum + current;
    } else {
        return sum;
    }

});

console.log(sumNUM);  //output 12



///////////////////////////////////////////////////////////////////////////////////////////////



