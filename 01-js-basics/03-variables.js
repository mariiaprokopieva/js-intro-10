//var-let-const keywords are used for variables
// 1. let allows us to change the value of the variable at any point in the program

let firstName = 'John'

console.log(firstName); //'John'

//to reassign a new value to a variable

firstName = 'James'
console.log(firstName)

// 2. const stands for constant 
const pi = 3.14

console.log(pi);

//pi = 10 // Error 

//console.log(pi);

// 3. var

var lastName = 'Doe'
lastName = 'Smith'

console.log(lastName);

//Another difference bt let and const

let city = 'Chicago'; //variable initialization = declare a variable and assign value

let country; // declaring a variable or variable declaration
country = US; // value assignment to a variable

const firstMonth = 'January'; //const must always be initialized

let numberOfStudentsInBatch10;
console.log(numberOfStudentsInBatch10); //undefined

numberOfStudentsInBatch10 = 20;
console.log(numberOfStudentsInBatch10);
