// Requirement:
// Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

// Multiply number with 5 and print the result with below message

// Expected result:
// The random number * 5 = {result}

console.log('\n------------------TASK01------------------\n');

let ranNum0_50 = Math.random() * 51;

console.log(`The random number * 5 = {${Math.floor(ranNum0_50)}}`);

// Requirement:
// Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

// Find the min number
// Find the max number
// Find the absolute difference of the numbers

// Expected result:
// Min number = {min}
// Max number = {max}
// Difference = {difference}

console.log('\n------------------TASK02------------------\n');

let ranNum1 = Math.floor(Math.random() * 11);
let ranNum2 = Math.floor(Math.random() * 11);

console.log(`Min number = {${(Math.min(ranNum1, ranNum2))}}`);
console.log(`Max number = {${(Math.max(ranNum1, ranNum2))}}`);
console.log(`Difference = {${Math.abs(Math.min(ranNum1, ranNum2) - Math.max(ranNum1, ranNum2))}}`);

// Requirement:
// Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

// Find the remainder of the number by 10

// Expected result:
// The random number % 10 = {result}

console.log('\n------------------TASK03------------------\n');

let ran50_100 = Math.floor(Math.random() * 51) + 50;

console.log(`The random number % 10 = {${ran50_100 % 10}}`);

// Requirement:
// Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
// Calculate some points based on numbers generated. So, the points will be calculated as below
// 1st  number will be multiplied by 5 and added as points
// 2nd number will be multiplied by 4 and added as points
// 3rd number will be multiplied by 3 and added as points
// 4th number will be multiplied by 2 and added as points
// 5th number will be multiplied by 1 and added as points

// Test data:
// 3 7 2 1 8

// Expected result:
// 59

console.log('\n------------------TASK04------------------\n');

let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
let random3 = Math.floor(Math.random() * 10) + 1;
let random4 = Math.floor(Math.random() * 10) + 1;
let random5 = Math.floor(Math.random() * 10) + 1;

console.log(5 * random1 + 4 * random2 + 3 * random3 + 2 * random4 + random5);

// Requirement:
// Write a program that generates 4 random numbers as below;
// 1st  number to be between 1 and 25 (both included)
// 2nd number to be between 26 and 50 (both included)
// 3rd number to be between 51 and 75 (both included)
// 4th number to be between 76 and 100 (both included)

// Find the absolute difference between the max and min number
// Find the absolute difference between the second and third number
// Find the average of all 4 numbers

// Expected result:
// Difference of max and min = {result}
// Difference of second and third = {result}
// Average of all = {average}

console.log('\n------------------TASK05------------------\n');

let r1 = Math.floor(Math.random() * 25) + 1;
let r2 = Math.floor(Math.random() * 25) + 26;
let r3 = Math.floor(Math.random() * 25) + 51;
let r4 = Math.floor(Math.random() * 25) + 76;

let maxNum = Math.max(r1, r2, r3, r4);
let minNum = Math.min(r1, r2, r3, r4);

console.log(`Difference of max and min = {${Math.abs(maxNum - minNum)}}`);
console.log(`Difference of second and third = {${Math.abs(r2 - r3)}}`);
console.log(`Average of all = {${(r1 + r2 + r3 + r4) / 4}}`);