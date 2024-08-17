let str = 'I like apple and pineapple';

// replace apple with orange

let str1 = str.replace('apple', 'orange');

console.log(str1);

// replace all aplle occurances with oranges

let str2 = str.replaceAll('apple', 'orange');

console.log(str2);


/*
replace()
TASK: used to replace first occurance of a substring within the original string
RETURN: a new string with the replaced value
ARGUMENTS: takes two arguments: target(substring to be replaced) and source: new value
CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static

 replaceAll()
TASK: used to replace all occurances of a substring within the original string
RETURN: a new string with the replaced value
ARGUMENTS: takes two arguments: target(substring to be replaced) and source: new value
CHANGE ORIGINAL VALUE: does not change original value
 STATIC or NON-STATIC: non-static
 */
console.log('Hello everyone!'.replaceAll('e', 'a').replaceAll('o', 'U'));