const { getRandomNumber } = require('../utils/MathHelper.js');

// let attempts = 0;
// let written = 3;
// let guess;

// do {
//     guess = getRandomNumber(0,10);
//     attempts++;
// } while (guess !== written);

// let time = attempts > 1 ? 'times' : 'time';

// console.log(`We've got ${written} after ${attempts} ${time}`);


// Generate an even number bt 1 and 10
// Calculate how many attempts it takes to generate it

let attempts = 0;
let rand;

do {
    rand = getRandomNumber(1, 10);
    attempts++;
} while (rand % 2 !== 0);

let time = attempts > 1 ? 'times' : 'time';
console.log(`You generated ${rand} after ${attempts} ${time}!`);

// Generate an odd number bt 1 and 10
// Calculate how many attempts it takes to generate it

att = 0;
let ranNum;
while(true) {
  ranNum = getRandomNumber(1, 10);
  att++;
  if(ranNum % 2 !== 0) break;
}
console.log(`We got an odd after ${att} times!`);