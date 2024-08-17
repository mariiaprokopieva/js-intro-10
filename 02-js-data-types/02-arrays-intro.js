/*
    'Toyota', 'Tesla', 'Honda', 'BMW'
    7, 6, 5, 25
*/

let favNumber = 7;
let firstKidName = 'Alex';

let cars = [ 'Toyota', 'Tesla', 'Honda', 'BMW' ];
let numbers = [7, 6, 5, 25];

console.log(cars);
console.log(numbers);

// Getting a particular element from an array using index
//index of the elements in an array always starts with zero

console.log(cars[2]); // Honda

console.log(numbers[1]); //6

// Updating the exissting elements with new values;

cars[0] = 'GMC';
console.log(cars);

cars[3]; // BMW

let myFavCar = cars[3];
console.log(myFavCar);

// Getting the size of an array
// length is an array property which returns the total numbers of elements

const students = ['Alex', 'John', 'Jane', 'Mariia'];

students[-1]; // undefined
students[4]; // undefined

students[2] = 'Jessie'; // allowed even when array is declared with const

console.log(students);

student = 1; // not allowed since the array is declared with const;

console.log(cars.length); // 4
console.log(numbers.length); // 5

students[6] = 'Data';
console.log(students); // [ 'Alex', 'John', 'Jessie', 'Mariia', <2 empty items>, 'Data' ]
console.log(students.length); // 7

// creating array with the constructor
const array = new Array('Mariia', 25, null, undefined, Symbol('Hello'), 25n);
const array2 = ['Mariia', 25, null, undefined, Symbol('Hello'), 25n];

console.log(typeof array); // object
console.log(typeof array2); // object


// Accessing the first and last element in the array

const nums = [10, 20, 30, 40];

let first = nums[0]; // first
let last = nums[ nums.length - 1 ];

console.log(first);
console.log(last);









