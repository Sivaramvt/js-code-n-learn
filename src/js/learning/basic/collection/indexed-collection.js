// Arrays
/* 3 ways of creating Arrays */
var array1 = new Array("one", "two", "three");
var array2 = Array("Eleven", "Twelve", "Thirteen");
var array3 = ["TwentyOne", "TwentyTwo", "TwentyThree"];
console.log(array1);
console.log(array2);
console.log(array3);


// Length of an array.
var arr = [];
console.log(arr.length);

var arr1 = Array(10); // Defining the expected size as 10.
console.log(arr1.length); // Result - 10.

// Referring array elements
var myArray = [10,11,12];
console.log(myArray[1]); // Index starts from 1.


// Iterating over arrays.
var colors = ["yellow", "red", "white", "green"];
colors.forEach(function(color){console.log(color);});
colors.forEach(color => console.log(color)); // Using arraow function.

// Tradining looping for statement also available.

// Array methods.
colors.concat("purple"); // Joins 2 array.
console.log(colors);
console.log(colors.join("-")); // Format a string with the delimiter.
console.log(colors.push("orange")); //Add one more.
console.log(colors.pop("orange")); // Removed one.
// Examples - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// Map methods
var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // logs A,B,C
