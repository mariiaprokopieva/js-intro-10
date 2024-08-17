/* 
Assume that you are given a string of any length

Get the last 5 characters from it

*/

let str1 = 'Hello';

console.log(str1.slice(-3));
console.log(str1.substring(str1.length - 3));

// Get the first 3 characters and the last 3 characters
//  then concatenate thos in a new string


let str2 = 'Hello, how are you?'

let firstThree = str2.slice(0, 3);
let lastThree = str2.slice(-3);

let newStr = firstThree + lastThree;

console.log(newStr);

function firstLast3Chars(str) {
    if(str.length < 3) throw Error('This string has length less than 3!!!');
    else return str.slice(0,3) + str.slice(-3);

};

console.log(firstLast3Chars('12'));