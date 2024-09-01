

const numbers = [-2, -5, 3, 0, 5, 8, 10];

// Get positice numbers -> [3, 5, 8, 10]

console.log(numbers.filter(x => x > 0));

// ['even', 'odd', 'odd', 'even', 'odd', 'even', 'even']

const evenOdd = numbers.map(x => x % 2 === 0 ? 'even' : 'odd')

console.log(evenOdd); // ['even', 'odd','odd',  'even', 'odd', 'even', 'even']

// Sum of the numbers: 19

// let sum = 0;

// for(const number of numbers) {
//     sum += number;
// }

// console.log(sum); 

// Using reduce to find sum of the numbers

let finalResult = numbers.reduce((sum, number) => {
    return sum + number;
}, 0)

console.log(finalResult);

// count how many negative elements we have -> 2

const countNeg = numbers.reduce((acc, curr) => curr < 0 ? acc + 1 : acc, 0);
console.log(countNeg); // 2