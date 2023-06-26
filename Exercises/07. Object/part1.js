

///////////////////////////////////////////////////////////////////////////////////////////////

// Objects: Part-1


// (1) Why do we use objects?

/* Objects are essential because they allow us to organize and manipulate data in a structured and efficient way.
 They play a crucial role in programming by providing a means to represent real-world entities, 
 abstract concepts, or any complex data structure. 

  **Importance of objects:
       -> Encapsulation, organization, and modular code.
       -> Abstraction and simplification of complex concepts.
       -> Improved code readability and reusability.
       -> Dynamic flexibility for runtime modifications.
       -> Enhanced collaboration and data sharing among developers. */



///////////////////////////////////////////////////////////////////////////////////////////////


// (2) Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

const myHouseDetails = {
    numberOfRooms: 1,
    numberOfMemebers: 5,
    colorOfHouse: 'blue',
    builtYear: 2055,
    numberOfStor: 2,
    
};


// **Delete numberOfMembers property:
delete myHouseDetails.numberOfMemebers;


// **Update numberOfRooms by new value:
myHouseDetails.numberOfRooms = 10;


// **Add a  new property called estimatedPriceOfHouse:
myHouseDetails.estimatedPriceOfHouse = 100000000;

console.log(myHouseDetails);


// **Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”
const msg = `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMemebers} people are living.The house is ${myHouseDetails.numberOfStor} and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}.`;
console.log(msg);



///////////////////////////////////////////////////////////////////////////////////////////////


// (3) Can we create an object inside an object. Give an example.


// Yes, we can exampple:
const person = {
    name: 'Elon',
    age: 52,

    // object inside an object (Nested Objects)
    companies: {
        name: ['Tesla', 'spaceX', 'Twitter'],
        position: 'CEO',
    }
};



///////////////////////////////////////////////////////////////////////////////////////////////


// (4) Create an object named myFavoutireFood and add any three properties on it.    
// Create another object by copying this object.

const myFavoutireFood = {
    name: 'paneer curry',
    category: 'Veg',
    isDelicious: true,

};


// coppy object:
const food = {...myFavoutireFood};  // [ Using spread (...) Operators ]



///////////////////////////////////////////////////////////////////////////////////////////////



// (5) hospital Details

// **add field => name,location,patientCapacity, numberOfBed, numberOfBlock,

const newHospitalDetails = {
    name: 'KMC',
    location: 'Kathmandu',
    patientCapavitty: 50000,
    numberOfBed: 500,
    numberOfBedBlock: 10,
};


// **numberOfDoctor,numberOfNurse:
newHospitalDetails.numberOfDoctor = 100;
newHospitalDetails.numberOfNurse = 250;


// **delete numberOfBed and numberOfNurse:
delete newHospitalDetails.numberOfBed;
delete newHospitalDetails.numberOfNurse;


// **update numberOfBlock:
newHospitalDetails.numberOfBedBlock = 15;


// **add new field named numberOfAmbulance
newHospitalDetails.numberOfBedAmbulance = 50;


// **copy the object to new variable named newHospitalDetails:
let HospitalDetails = {...newHospitalDetails};


// **print out results like "There is a hospital named ABC with...."
console.log(`This is a hospital named  ${newHospitalDetails.name} with ...`);





///////////////////////////////////////////////////////////////////////////////////////////////
