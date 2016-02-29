
number = new Number(100);
number.x = 10;
console.log(number.x); // Prints 10.

delete number.x;
console.log(number.x); // Returns undefined.
console.log(number); // Prints number object

delete number;
console.log(number.x); // Returns undefined.
console.log(number); // Prints number object
