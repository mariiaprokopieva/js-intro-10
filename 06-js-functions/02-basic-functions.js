function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(4));

function initials(fname, lname) {
    return `${fname.charAt(0).toUpperCase()}.${lname.charAt(0).toUpperCase()}.`;
}

console.log(initials('maria', 'proko'));


function inits(fullname) {
    return `${fullname.split(' ')[0][0].toUpperCase()}.${fullname.split(' ')[1][0].toUpperCase()}.`;
}

console.log(inits('tren gugu'));


/*

Write a function that tales 2 number arguments and returns a random number between them both included

*/

function getRandomNumber(n1, n2) {
    return Math.floor(Math.random() * (Math.abs(n1 - n2)) + 1) + Math.min(n1, n2);
}

console.log(getRandomNumber(3,5));