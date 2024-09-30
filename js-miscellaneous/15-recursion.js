/*
Write a function that takes a number and returns the sum of the numbers 
starting from one to given number
sum(5) -> 15
*/

const sum = (num) => num === 0 ? 0 : num + sum(num - 1);

console.log(sum(3));