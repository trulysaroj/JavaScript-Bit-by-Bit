   // Hoisting in Javascript  ---> only aplicalble in var variables  (Moving variable declearatio to top nefore execution of code)

      //   Hoisting with variable
      console.log(Fname); // Print -> Undefined
    //   console.log(title);  // Thorw error
    //   console.log(birthYear);  // Thorw error

      var Fname = "Elon";
      let title = "CEO";
      const birthYear = 1975;


    //   Checking 
    console.log(add(2, 5));  // Print --> 7, Because of hositiing 
    console.log(addExpre(2, 5));   // Throw Error 
    console.log(addArrow(2, 5)); 




      // Hoistning with function
      function add(a, b) {
        return a + b;
      }


      const addExpre = function (a, b) {
        return a + b;
      };


      const addArrow = (a, b) => a + b;