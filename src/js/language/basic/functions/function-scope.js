var num1 = '1';
var num2 = '2';

function printNum() {
    // num1 takes local scope and undefined at this state.
    console.log(num1 + num2);

    var num1 = "inner";

    // Nested function
    function printNumNestedFunction() {
        console.log(num1 + num2);
    }

    printNumNestedFunction();

}

printNum();

// Below function cannot be accessed from here.
//NestedFunction();
