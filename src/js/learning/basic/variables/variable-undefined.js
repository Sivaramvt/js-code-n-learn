var a;
console.log("The value of a is " + a); // logs "The value of a is undefined"
//console.log("The value of b is " + b); // throws ReferenceError exception

// In boolean context undefined
var input;
if(input === undefined){
  console.log('True');
} else {
  console.log('false');
}

// Case of array.
var myArray = [];
if (!myArray[0]){
  console.log('undefined adapted to false');
}
