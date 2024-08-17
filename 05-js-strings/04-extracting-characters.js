// property access with [] vs charAt() vs codeCharAt() vs at()

let str = 'TechGlobal';

// get the first character

console.log(str[0]); // 'T'
console.log(str.charAt(0)); //'T'
console.log(str.charCodeAt(0)); // 84 -> ASCII represantation
console.log(str.at(0)); //'T'

// get the last chatacter
str[str.length - 1]
console.log(str[str.length - 1]); // 'l'
console.log(str.charAt(str.length - 1)); // 'l'
console.log(str.at(str.length - 1)); // 'l'

let city = 'Rome'; // 0, 1, 2, 3

console.log(city[-1]); // undefined
console.log(city.charAt(-1)); // '' - empty string
console.log(city.at(-1)); // 'e' - counts backwards, useful getting the characters from the end

console.log(city[4]); // undefined
console.log(city.charAt(4)); // ''
console.log(city.at(4)); // undefined

/*
[] Property access is the most used when getting characters from left index (0)
[0] returns the first character
[1] returns second character

at() method is useful getting characters starting from right index using negative indices
at(-1) returns the last character
at(-2) returns the 2nd last character

[] property access
 TASK: gets a single character from the string using an index
 RETURN: returns the single character as a string
    note: returns undefined if the given index is not valid for the string
    ARGUMENT: index
 CHANGE ORIGINAL VALUE: does not change original value
 

 charAt() method
 TASK: gets a single character from the string using an index
 RETURN: returns the single character as a string
    note: returns empty string ('') if the given index is not valid for the string
ARGUMENT: index
 CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static


 charCodeAt() method
 TASK: gets a single character' Unicode - ASCII decimal represantation from the string using an index
 RETURN: returns a number (unicode)
    note: returns NaN if the given index is not valid for the string
ARGUMENT: index
 CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

*/