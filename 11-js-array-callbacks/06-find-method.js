const numbers = [0, 10, -4, 5, 2, -3];

// Find first positive
// Find first negative

let firstPos = numbers.find((number) => number > 0);

let firstPosIndex = numbers.findIndex((number) => number > 0);

console.log(firstPos); // 10
console.log(firstPosIndex); // 1

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

let first4Letters = cities.find((city) => city.length === 4);
let last6Letters = cities.findLast((city) => city.length === 6);
let indexOfLA = cities.findIndex((city) => city === 'LA');
let firstCityWithI = cities.find((city) => city.toLowerCase().includes('i'));
let last4Letters = cities.findLast((city) => city.length === 4);

console.log(first4Letters); // Rome
console.log(last6Letters); // Brugge
console.log(indexOfLA); // 4
console.log(firstCityWithI); // Kyiv
console.log(last4Letters); // Kyiv


