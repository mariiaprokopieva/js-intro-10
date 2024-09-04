const arr1 = [ 1, 2, 3];

const arr2 = arr1;

console.log(arr1); // [ 1, 2, 3]
console.log(arr2); // [ 1, 2, 3]

arr1.push(4);

console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(arr2); // [ 1, 2, 3, 4 ]

const arr3 = arr1.concat(arr2);


// primitives
let str1 = 'John';
let str2 = str1;

console.log(str1); // John
console.log(str2); // John

str1 = 'James';

console.log(str1); // James
console.log(str2); // John

// Copying your array to prevent mutability using spread operator
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [ ...numbers1 ];

console.log(numbers1);
console.log(numbers2);

numbers1.push(6);


console.log(numbers1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]

// Copying your array to prevent mutability using loops
const booleans1 = [ true, false, true];
const booleans2 = [];

booleans1.forEach((el) => booleans2.push(el));

console.log(booleans1);
console.log(booleans2);


booleans1.push('hello');

console.log(booleans1);
console.log(booleans2);

// spread operator or loops doesn't work in case of nested arrays or objects

const groups1 = [
    'John',
    ['Alex', 'Mariia'],
    ['John', 'Jane']
];

const groups2 = [...groups1];

console.log(groups1);
console.log(groups2);

groups1.push('Mark');
groups1[1][1] = 'Jessica';

console.log(groups1);
console.log(groups2);

// we call this copying with looops or spread operator as shallow copy
// DEEP COPY: safer way to prevent mutability and can be achieved using JSON
