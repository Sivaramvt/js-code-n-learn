/*
2 ways to create regex.
(1) Using regex between slashes
(2) Using constructor of regex
*/

// Using regex between slashes
// When JS loads, it is compiled once. Suitable for higher performance.
var regex1 = "/ab*/";

// Using constructor
// Use this only when the argument changes dynamically.
var regex2 = new RegExp("ab*");
console.log(regex2.test("ab"));
