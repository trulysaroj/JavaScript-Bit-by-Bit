
/* Promises
   -> a fundamental concept in JavaScript for handling asynchronous operations. 
   -> Promises represent a value that may not be available yet but will be resolved or rejected at some point in the future. 
   -> Promises have three possible states:


   (1) Pending: 
    -> initial state when the promise is created, and the asynchronous operation has not yet completed.

   (2) Fulfilled (Resolved): 
    -> state when the asynchronous operation is successful, and a result is available. When a promise is fulfilled, it typically contains a value.

   (3) Rejected: 
    -> state when an error occurs, promise contains a reason for the rejection, which is usually an error object. */


//--------------------------------------------------------------------------------------------------------------------------------------------------//

// eg.
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Okay, It wokrs..');
    }
    else {
        reject('Oops!!, It broke...');
    }
})


const promise2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, 'Hello !!')
});


const promise3 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 3000, 'Hello !!!')
});


const promise4 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 4000, 'Hello !!!!')
});


Promise.all([promise, promise2, promise3, promise4])
       .then(values =>{
        console.log(values);
       })




promise.then(result => result + '!')
       .then(result2 => console.log(result2))
       .catch(() => console.log('Error !!!'))
       .then(result3 => console.log(result3 + '!!'))



// data fatching with promises
const urls = [
    'https://jsonplaceholder.typicode.com/poss',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users',
];

Promise.all(urls.map((url) => {
    return fetch(url).then(res => res.json());
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    
}).catch(() => console.log('Error...'));



//--------------------------------------------------------------------------------------------------------------------------------------------------//
