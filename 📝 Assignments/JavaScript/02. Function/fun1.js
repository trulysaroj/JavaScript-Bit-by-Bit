

///////////////////////////////////////////////////////////////////////////////////////////////


//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}


// soln:
function calPrice(obj) {
    const distance = Number(obj.distance.slice(0, 2));
    const unitPrice = obj.unitKmPrice
    const finalPrice = distance * unitPrice

    return finalPrice;
    
}


console.log(calPrice(rideDetails));



///////////////////////////////////////////////////////////////////////////////////////////////


//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}


// soln:
const checkIfSucces = (obj) => {
    if (obj.status === 'onTheWay') {
      return false;
    } else {
      return true;
    }
};
  
  
checkIfSucces(status1)  //should return false
  
checkIfSucces(status2)  //should return true




///////////////////////////////////////////////////////////////////////////////////////////////

