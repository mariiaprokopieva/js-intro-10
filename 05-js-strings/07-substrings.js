let str = 'TechGlobal';

// 1. get a substring at the beginning or in the middle -> Tech or Glo

console.log(str.substring(0, 4)); // the left index included, right index not included
console.log(str.slice(0, 4)); 

console.log(str.substring(4, 7)); // 'Glo'
console.log(str.slice(4, 7)); // 'Glo'


// 2. get a substring starting from any index and going all the way till the end -> Global or bal

console.log(str.slice(7)); // 'bal' 
console.log(str.substring(4)); // 'Global' - if there is no second argument, it will be till the end of the string

// Difference

let lan = 'JavaScript';

console.log(lan.slice(-1)); // last character

// get the last three characters 

console.log(lan.substring(lan.length - 3));

console.log(lan.slice(-3)); // slice works with negative indexes

// Sc

lan.slice(4,6);

// 'Today is Sunday' : 'Sun'

let day = 'Today is Sunday';
console.log(day.slice(-6, -3));



/*
slice()
TASK: retrieve a substring from another string based on the given indexes
RETURN: new substring
ARGUMENTS: 1 or 2 indexes, first one starting index (included), second is the ending index (excluded)
    NOTES: works with negative indexes as well
    NOTES: if the left index is greater than the right index, then it returns empty string
CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

 substring()
TASK: retrieve a substring from another string based on the given indexes
RETURN: new substring
ARGUMENTS: 1 or 2 indexes, first one starting index (included), second is the ending index (excluded)
    NOTES: doesn't work with negative indexes
    NOTES: if the left index is greater than the right index, it modifies it to correct way and gives a meaningful substring
CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

 */