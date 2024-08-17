const { getRandomNumber } = require('../utils/MathHelper.js')
// generate a rendom number between 1 and 10 both inclusive
// and check if the number is 7
// if it is, print true
// otherwise, print false

/* PSEUDO CODE
1. Generate a random number
2. Check if it is 7 or not
3. Depending on the condition print the result
*/

let r1 = getRandomNumber(1, 10);

console.log(r1 === 7);

// Another way of using ternary operator for assignment

let result = r1 === 7? true : false;
console.log(result);

let gender = 'female';

let name = gender === 'female' ? 'Jane' : 'John';

console.log(name);



let r2 = getRandomNumber(1, 10);

console.log('Random number is =', r2);

r2 % 2 === 0 ? console.log('EVEN') : console.log('ODD');