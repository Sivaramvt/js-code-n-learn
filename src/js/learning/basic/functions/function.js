var myCar = {make:"Hyndai", model:"i20", variant:"Sportz"};

// Usual way of defining functions.
function printMake(car){
  console.log(car.make);
}
printMake(myCar);


// Function expression
var printModel = function(car){
  console.log(car.model);
}
printModel(myCar);
