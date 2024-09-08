// spreading arrays

const numbers1 = [1, 2, 3, 4];

const numbers2 = [...numbers1, 5, 6];

console.log(numbers2);

let max = Number.MIN_VALUE;

for(const number of numbers2) {
    if (number > max) max = number;
}

console.log(max);

let min = Number.MAX_VALUE;

for(const number of numbers2) {
    if (number < min) min = number;
}

console.log(min);
