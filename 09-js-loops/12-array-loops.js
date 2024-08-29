const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

console.log('\n------------------TASK-1------------------\n');

let sum = 0;

for(const number of numbers) {
    sum += number;
}

let average = sum / numbers.length;

console.log(sum);
console.log(average);

// find the product of all numbers starting from the index of 3

console.log('\n------------------TASK-2------------------\n');

let product = 1;

for(let i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log(product); // 84

// 

console.log('\n------------------TASK-3------------------\n');