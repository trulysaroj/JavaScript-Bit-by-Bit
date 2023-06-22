
  // Nullish Coallescing ---> to select a default value when encountering null or undefined values

  const restaurent = {
    name: "Palpasa",
  };

  restaurent.guestNum = null;

  // Using Nullish circuting
  const guestCorrect = restaurent.guestNum ?? 15;
  console.log(guestCorrect); // Print 15


// Nullish value --> null, undefined (Not 0 or '')




// Nullish coalescing operator:
// const result = leftOperand ?? rightOperand;


const value1 = null;
const value2 = undefined;
const value3 = '';
const value4 = 0;

console.log(value1 ?? 'A'); // Output: A
console.log(value2 ?? 'B'); // Output: B
console.log(value3 ?? ''); // Output: ''  (Empty String)
console.log(value4 ?? 'D'); // Output: 0



