const numbers = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ]; 

// We can check if the array contains some specific elements
let check5 = numbers.includes(5); // true
let check77 = numbers.includes(77); // true
let check20 = numbers.includes(20); // false

console.log(check5);
console.log(check77);
console.log(check20);

// indexOf() vs lastIndexOf()
numbers.indexOf(5); // 0
numbers.lastIndexOf(5); // 8
numbers.indexOf(10); // 1
numbers.lastIndexOf(10); // 3
numbers.indexOf(25); // 4
numbers.lastIndexOf(25); // 4

numbers.indexOf(3); // -1
numbers.lastIndexOf(3); // -1


// How to check if array contaons an element wothout includes() method

const cities = [ 'Chicago', 'Berlin', 'Rome', 'Brugge' ];

console.log(cities.includes('Berlin')); // true
console.log(cities.indexOf('Berlin')); // 1
console.log(cities.indexOf('Berlin') !== -1); // true


cities.includes('Berlin', 3); // false -- starts searching at the specified element
