const { getRandomNumber } = require('../utils/MathHelper.js')

// Output the numbers from 1 to 10 (both inclusive) -> 1 2 3 4 5

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// Output the numbers from 100 to 0 (both inclusive) -> 100 99 98 97...

for(let i = 100; i >= 0; i--) {
    console.log(i);
}

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 ....

for(let i = 0; i <= 50; i += 2) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) console.log(i);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ...

for(let i = 0; i <= 50; i += 5) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
}

// Find sum of the numbers from 1 to 5 (both inclusive) -> 15

let sum0 = 0;

for(let i = 1; i <= 5; i++) {
    sum0 += i;
}

console.log(sum0); // 15

// Find sum of the numbers from 10 to 15 (both inclusive) -> 75

let sum = 0;

for(let i = 10; i <= 15; i++) {
    sum += i;
}

console.log(sum);

// Find 6!

let factorial = 1

for(let i = 6; i >= 1; i--) {
    factorial *= i;
}

console.log(factorial);

// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l

let str = 'TechGlobal School';

for(let i = 0; i <= str.length - 1; i++) {
    console.log(str[i]);
}

// Count the total occurrences of letter o in TechGlobal School  -> 3

let str1 = 'TechGlobal School';
let sum1 = 0;

for(let i = 0; i <= str1.length - 1; i++) {
    if(str1[i] === 'o') sum1 += 1;
}

console.log(sum1);

// Output all the odd numbers from 1 to Random Number (both inclusive) -> 1 3 5 7 9 ....

let r1 = getRandomNumber(10, 20);

console.log(r1);

for(let i = 1; i <= r1; i += 2) {
    console.log(i);
}

for(let i = 0; i <= r1; i++) {
    if(i % 2 !== 0) console.log(i);
}

//

let r2 = getRandomNumber(1, 10);
console.log(`r2 = ${r2}`);
let product = 1;
for(let i = r2; i >= 1; i--) {
    product *= i;
}
console.log(product);

/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);


    if(ran1 < ran2) {
        for(let i = ran1; i <= ran2; i++) {
            console.log(i);
        }
    }
    else if (ran2 < ran1) {
        for(let i = ran2; i <= ran1; i++) {
            console.log(i);
        }
    }
    else console.log(ran1);



