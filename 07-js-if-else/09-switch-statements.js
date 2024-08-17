const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Generate a random number between 1 and 10 both included
if the number is 1, print '3 POINTS'
if the number is 2, print '2 POINTS'
if the number is 3, print '1 POINT'
if the number is anything else, print '0 POINT'
*/

let rand = getRandomNumber(1, 10);

console.log(rand);
if (rand === 1) console.log('3 POINTS');
else if (rand === 2) console.log('2 POINTS');
else if (rand === 3) console.log('1 POINT');
else console.log('0 POINT');

switch(rand) {
    case 1: 
        console.log('3 POINTS');
        break;
    case 2:
        console.log('2 POINTS');
        break;
    case 3:
        console.log('1 POINT');
        break;
    default:
        console.log('0 POINT');
}


const date = new Date();

console.log(date.getDate()); // 5
console.log(date.getMonth()); // 7; Jan - 0
console.log(date.getFullYear()); // 2024
console.log(date.getDay()); // 1 (Monday); Sunday - 0
console.log(date.getHours()); // 20
console.log(date.getMinutes()); // 29
console.log(date.getTime()); // 1722904206165

console.log(date.toLocaleTimeString()); // 8:31:45 PM
console.log(date.toLocaleDateString()); // 8/5/2024

/*
0 Sunday
1 Monday
.
.
.
.
6 Saturday

in case it returns 0 or 6, print 'WEEKEND'
otherwise, print 'WEEKDAY' 
*/

let day = new Date().getDay(); 

switch (day) {
    case 0:
    case 6:
        console.log('WEEKEND');
        break;
    default:
        console.log('WEEKDAY');
    
}


if (day === 0 || day === 6) console.log('WEEKEND');
else console.log('WEEKDAY');

if(day >= 1 && day <= 5) console.log('WEEKDAY');
else console.log('WEEKEND');

if(day !== 0 && day !== 6) console.log('WEEKDAY');
else console.log('WEEKEND');

switch(day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('WEEKDAY');
        break;
    default:
        console.log('WEEKEND');
}

switch(day === 0 || day === 6) {
    case true:
        console.log('WEEKEND');
        break;
    default:
        console.log('WEEKDAY');
}

/*
Find and print the quarter that our r2 is in
1 and 25 inclusive  -> print 'FIRST'
26 and 50 inclusive  -> print 'SECOND'
51 and 75 inclusive  -> print 'THIRD'
76 and 100 inclusive  -> print 'FOURTH'
*/

let r2 = getRandomNumber(1, 100);

console.log('The random number is = ', r2);

if (r2 >= 76) console.log('FOURTH');
else if (r2 >= 51) console.log('THIRD');
else if (r2 >= 26) console.log('SECOND');
else console.log('FIRST');

switch(r2) {
    case 1:
}

