const { getRandomNumber } = require('../utils/MathHelper.js');


// Assume that we are playing a game and one person in the class is 
// just writing a number on a paper and others are trying to guess the 
// number 
// •NOTE: number can only be between 1 to 10 ( 1 and 10 are included)
// •See how many attempts it is going to take to find the number?
// Write JavaScript program to play the 
// game  

let written = 4;
let guess = undefined;
let attempts = 0;
const allGuesses = [];

while(written !== guess) {
    guess = getRandomNumber(1,10);
    if(!allGuesses.includes(guess)) {       // eliminating identical guesses
        allGuesses.push(guess);
        attempts++;
    }
}

// if(attempts === 3) {
//     console.log('You made 3 guesses already but could not win!')
//   }
//   else {                                                                // limiting the game to 3 attempts
//     console.log('You got the prize!')
//   }


console.log(`We got the matching number finally after ${attempts} attempts!`);




for(let i = 1; i <= 10; i++) {
    console.log(i);
}

let num = 1;

while (num <= 10) {
    console.log(num); // 1, 2...
    num++;
}

