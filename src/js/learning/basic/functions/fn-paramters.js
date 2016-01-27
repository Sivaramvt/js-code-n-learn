
// rest parameter

function multiply(multiplier, ...args){
  return args.map(x => multiplier * x); // Note the arrow function
  
}

var result = multiply(2, 1, 2, 3);
console.log(result);
