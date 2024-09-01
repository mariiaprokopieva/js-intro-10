const numbers = [-5, 0, 5, 10, 23, -10];
// check if some elements are divisible by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true

console.log(numbers.some(x => x % 5 === 0)); // true
console.log(numbers.every(x => x > 0)); // false
console.log(numbers.some(x => x < 0)); // true

