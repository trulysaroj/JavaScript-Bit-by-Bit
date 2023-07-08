
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* filter() function:
  -> iterate over an array and create a new array containing only the elements that satisfy a given condition.
  -> filter() function is another higher-order function */ 

// *Synatx

// const newArray = array.filter((element, index, array) => {
     // Condition to filter the element
//     return condition;
//   });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Example: 1

// Filtring only odd numner from array
const arr = [1, 2, 3, 4, 5];
const oddArr = arr.filter(value => value %2 !== 0);

console.log(oddArr);   // [1, 3, 5]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example: 2

const team = [
  {
    name: 'Alex',
    position: 'Software Engineer',
  },

  {
    name: 'Alice',
    position: 'QA Engineer',
  },

  {
    name: 'Ram',
    position: 'Software Engineer',
  },

  {
    name: 'Leo',
    position: 'CEO',
  },

  {
    name: 'Neo',
    position: 'Software Engineer',
  },

];


// filtering only software Engineer:
const engineers = team.filter(value => value.position === 'Software Engineer');

console.log(engineers);