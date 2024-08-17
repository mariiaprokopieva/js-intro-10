// startsWith)() ns endsWith() vs includes()

let str = 'TechGlobal';

str.startsWith('Hi'); // false
str.startsWith('Tech'); // true
str.startsWith('T'); // true
str.startsWith('t'); // false

str.toLowerCase().startsWith('tech'); // true


console.log(str.startsWith('')); // true

console.log(str.endsWith('apple')); // false
console.log(str.endsWith('obal')); // true
console.log(str.endsWith('la')); // false
console.log(str.endsWith('l')); // true
console.log(str.endsWith('')); // true


console.log(str.includes('G')); // true
console.log(str.includes('oab')); // false
console.log(str.includes('')); // true

/*
startsWith()
 TASK: checks if the string starts with another substring
 RETURN: boolean
ARGUMENT: substring
 CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

endsWith()
 TASK: checks if the string ends with another substring
 RETURN: boolean
ARGUMENT: substring
 CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

 includes()
 TASK: checks if the string contains or includes another substring
 RETURN: boolean
ARGUMENT: substring
 CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static
*/

'I like apples and pineapples'.includes('apple'); // true



// indexOf() vs lastIndexOf()

let message = 'Can I can a can?';

message.charAt(4); // 'I'

console.log(message.indexOf('I')); // 4
console.log(message.indexOf('?')); // 15

console.log(message.indexOf('can')); // 6 - returns the first index (index of 'c')

console.log(message.lastIndexOf('can')); // 12 - returns left index of the last can

console.log(message.indexOf('Can'));
console.log(message.lastIndexOf('Can'));

message.indexOf('A'); // -1 - in case the substring is absent in the strings, returns -1

console.log(message.indexOf('')); // 0
console.log(message.lastIndexOf('')); // 16
console.log(message.indexOf('Can'));

/*
indexOf()
TASK: checks if the string contains another substring and returns the index
 RETURN: returns the first index of the first found match as a number
    NOTE: returns -1 if it cannot find the substring within the string
ARGUMENT: substring
 CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

 lastIndexOf()
TASK: checks if the string contains another substring and returns the index
 RETURN: returns the first index of the last found match as a number
    NOTE: returns -1 if it cannot find the substring within the string
ARGUMENT: substring
 CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static
*/