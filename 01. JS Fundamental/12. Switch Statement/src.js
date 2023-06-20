

// Switch Statement ---> Use for complex decison making instead of multiple if else code

let day = "Sunnday";

switch (day) {
  case "sunday": // day === 'sunday'  ---> Strict comparision
    console.log("Sunday = Plan");
    console.log("My weekly plan & schedule !");
    break; // Tak break from above code block

  case "monday": // day === 'monday'
    console.log("Monday = Funday");
    break;
  case "tuesday":
    console.log("Tuesday = No excuess Day !");
    break;
  case "wednesday":
    console.log("wednesday = Accountasble Day");
  case "thursday":
    console.log("Thursday = Thought Day");
    break;

  case "friday":
  case "saturday": // same condition for both case
    console.log("Saturday &  Friday = Weekend Day Enjoy it :)");
    break;

  default: // Same as else code block
    console.log("Not a valid Day :(");
}

//   Using logical operator for weekday
day = "monday";

if (day === "friday" || day === "saturday") {
  console.log(
    "Hurry! It's weekend, But I don't celebrate weekend I celebrate only success!!!"
  );
} else if (day === "sunday") {
  console.log("Sunday = Plan");
} else if (day === "monday") {
  console.log("Monday = Funday");
} else {
  console.log("Not a valid Day :(");
}
