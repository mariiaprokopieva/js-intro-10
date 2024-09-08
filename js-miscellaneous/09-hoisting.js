// use functions and variables before they're declared

// this will work since the function is hoisted

printHi(); // Hi

// function declaration
function printHi() {
    console.log('Hi');
}

printHi(); // Hi

// printHi1(); // error

// // function expression
// const printHi1 = function () {
//     console.log('Hi');
// }

// printHi1(); // error

// only function declaration is hoisted


// variable hoisting

console.log(fname); // undefined

var fname = 'John';

/*
var fname;
console.log(fname); // undefined

fname = 'John';

*/

