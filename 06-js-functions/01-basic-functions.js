/*
Create a function that prints 'Hi" when invoked
*/

function sayHi() {
    console.log('Hi');
}                 // semicolon is not preferred after these curly braces

sayHi(); // 'Hi'



/* 
Write a function which takes a string name as an argument
and returns 'Hello {name}'

sayHello('Alex)     -> 'Hello, Alex!'
*/

function sayHello (name) { // name - local variable
    return `Hello, ${name}!`;
}

let result = sayHello('Bermet');

console.log(result); // Hello, Bermet!

console.log(sayHello('John')); // 'Hello, John!'
console.log(sayHello(5)); // 'Hello, 5!'
console.log(sayHello(true)); // 'Hello, true!'


function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}        

greet('Good morning', 'Maria');
greet('Good evening', 'Alex');

function sum(n1, n2) {
    return n1 + n2;
}       

console.log(sum(1, 3));

/*
write a function that takes multiple numbers as arguments
return max and min numbers as an array min is at index 0 and max is at index 1

minMax(2, 4, 6, 8)  -> [2, 8]   -> returning an array
minMax(10, 4, -5, -1) -> [-5, 10]
*/

function product(n1, n2, n3) {
    return n1 * n2 * n3;
}

console.log(product(1, 2, 3));


