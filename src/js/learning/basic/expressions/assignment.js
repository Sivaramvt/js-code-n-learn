var foo = ["one", "two", "three"];
console.log(foo);

/* This way of assigning is called Destructuring.
For more complex assignments, the destructuring assignment syntax is a
JavaScript expression that makes it possible to extract data from arrays or
objects using a syntax that mirrors the construction of array and object
*/

//literals. var [one, two, three] = foo;
//console.log(one);


/* Difference between equals and strict equals */
// Equals
if(1 == "1"){
  console.log("They are equal");
}

// Strict Equals
if(1 === "1"){
  console.log("They are equal");
} else{
  console.log("They are not strict equal as they are not of same type.")
}
