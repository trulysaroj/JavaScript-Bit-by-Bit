
///////////////////////////////////////////////////////////////////////////////////////////////

// Array: Part-1

// (1) Create an array called friendsList and add your friends name. Print out your friend's name one by one.
const friendsList = ['Ram', 'Shyam', 'Hari', 'Gopal'];

console.log(friendsList[0]);
console.log(friendsList[1]);
console.log(friendsList[2]);
console.log(friendsList[3]);



///////////////////////////////////////////////////////////////////////////////////////////////



// (2) Create an array called favourite sportsPerson and use a for loop to print the player's name.
const favouriteSportsPerson =  ['Ronaldo', 'Messi', 'Pele', 'Neymar'];

// Print player's name using loop
for(let i = 0; i < favouriteSportsPerson.length; i++) {
    console.log(favouriteSportsPerson[i]);
};



///////////////////////////////////////////////////////////////////////////////////////////////



// (6) Create an array called myFavourite actors and print out who is your best actor among all actors.

const favouriteActors = ['Keanu Reevs', 'Leonardo Dicaprio', 'Vidyut Jamwal', 'Tum cruise'];

console.log(`My favourite actors is ${favouriteActors[0]}.`);



///////////////////////////////////////////////////////////////////////////////////////////////


// (7) Make an array of numbers that double the items.

const arr = [1, 2, 3, 4, 5];

const doubleArr = arr.map((item) => item * item);
console.log(doubleArr);


///////////////////////////////////////////////////////////////////////////////////////////////


// (8) Make an array of numbers and print whether the numbers are odd or even.
	
const arr2 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    if(num %2 === 0) {
        console.log(`${num} is a even number`);
    } else {
        console.log(`${num} is a odd number`);
    }
};
 


///////////////////////////////////////////////////////////////////////////////////////////////


// (9) Create an array called laptopPriceList and run map,filter, find, slice,splice,every,some,findIndex,reverse on it. 

const laptopPriceList = [3, 5, 6, 7, 8];

// map:
console.log(laptopPriceList.map((price) => price * 1000));


// filter:
console.log(laptopPriceList.filter((price) => price > 5));


// slice:
console.log(laptopPriceList.slice(1, 5));


// splice:
console.log(laptopPriceList.splice(1, 3));


// every:
console.log(laptopPriceList.every(price => price > 5));  //print false


// some:
console.log(laptopPriceList.some(price => price < 5 ));  //print true


// findIndex:
console.log(laptopPriceList.findIndex(price => price === 3));  //print 0


// reverse:
console.log(laptopPriceList.reverse());




///////////////////////////////////////////////////////////////////////////////////////////////


// There is array called laptopBrands = [“Dell”,”Asus”,”Acer”,”Hp”]
const laptopBrands = ['Dell', 'Asus', 'Acer', 'Hp'];



// 	**Run map on it and print all elements:
laptopBrands.map((laptop) => console.log(laptop));


// 	**Filter out Hp only
const favlaptop = laptopBrands.filter((laptop) => laptop === 'Hp');
console.log(favlaptop);




// 	**Use slice,splice, sort,reverse on this array.

// slice:
console.log(laptopBrands.slice(1, 3));

// splice:
console.log(laptopBrands.splice(1, 2));


// sort:
console.log(laptopBrands.sort());


// reverse:
console.log(laptopBrands.reverse());



///////////////////////////////////////////////////////////////////////////////////////////////
