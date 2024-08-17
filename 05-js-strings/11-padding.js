let n1 = '123', n2 = '5', n3 = '5000';

console.log(n1.padStart(4, ' '));
console.log(n2.padStart(4, ' '));
console.log(n3.padStart(4, ' '));

let s1 = 'Hello', s2 = 'Hi', s3 = 'JavaScript';

console.log(s1.padEnd(10, ' '));
console.log(s2.padEnd(10, ' '));
console.log(s3.padEnd(10, ' '));

/*
padStart()
TASK: fills the string at the beginning with repeating characters until reaching to specified length
RETURN: a new string
ARGUMENTS: 2 args; new desired length, what you would like to fill your string with
CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

 padEnd()
TASK: fills the string at the end with repeating characters until reaching to specified length
RETURN: a new string
ARGUMENTS: 2 args; new desired length, what you would like to fill your string with
CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static
*/
