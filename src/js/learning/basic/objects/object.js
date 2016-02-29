/* Object is a collection of properties (key-value pair). Properties could even
/* be functions which are called methods*/

/* Property key can be any valid string */

/* Way 1 of creating objects */
var car = new Object();
car.color = "red";
car.make = "Honda";
car.model = "city";
console.log(car);
console.log(car.make);
console.log(car["color"]);

function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}

console.log(showProps(car, "car"));
console.log(Object.keys(car));


/* Way 2 - Creating object using initializer */
var animal = {"eyeColor": "red",
              "numberOfLegs": 4}

console.log(animal);
console.log(Object.create(animal));

/* Way 3 - Using constructor */
/* methods in objects */
function displayAnimal(){
  console.log(this);
}

function Animal(numberOfLegs, weight){
  // Note teh use of 'this'
  this.numberOfLegs = numberOfLegs;
  this.weight = weight;
  this.displayAnimal = displayAnimal();
}

var animalObject = new Animal(10, 100);
//console.log(animalObject);


animalObject.displayAnimal();
