/* Arguments of a function are maintained in an array-like object -
/* arguments[i], i starting from 0. Total number of arguments is indicated by
/* argument.length. This helps in case of variable arguments when you do not
/* know how many arguments will be present when invoked.  */

stringMaker = function(){
  var result = "";
  for (var i = 0; i < arguments.length; i++) {
    result += "," + arguments[i];
  }
  return result;
}

console.log(stringMaker("one", "two", "three"));


defaultParameterFn = function(a=8){
  console.log(a);
}

defaultParameterFn(10);
