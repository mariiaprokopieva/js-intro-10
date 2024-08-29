const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4

console.log('\n------------------TASK-1------------------\n');

let count = 0;

for(const number of numbers) {
    if(number > 0) count++;
}

console.log(count);

// count negatives

console.log('\n------------------TASK-2------------------\n');

count = 0;

for(const number of numbers) {
    if(number < 0) count++;
}

console.log(count);

// how many even

console.log('\n------------------TASK-3------------------\n');

count = 0;

for(const number of numbers) {
    if(number % 2 === 0) count++;
}

console.log(count);

// how many odd but not negative

console.log('\n------------------TASK-4------------------\n');

count = 0;

for(const number of numbers) {
    if(number % 2 !== 0 && number > 0) count++;
}

console.log(count);

