
/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript"
"I don't like books"                                -> "I like books"
*/



let str1 = "I like apples and oranges";
let str2 = "Java is not a scripting programming language";
let str3 = "I don't like books";

str1.slice(7, 12).toUpperCase();

str2.slice(0,4) + str2[14].toUpperCase() + str2.slice(15,20);

str3.replace("don't ", "");

console.log(str1.slice(7, 12).toUpperCase());
console.log(str2.slice(0,4) + str2[14].toUpperCase() + str2.slice(15,20))
console.log(str3.replace("don't ", ""));


/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters     
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/


let s1 = "htashsdhsghsre";

s1.length;
s1[0];
s1[s1.length - 1];

console.log(s1.length);
console.log(s1[0]);
console.log(s1[s1.length - 1]);

s1.includes('a');
s1.includes('e');
s1.includes('i');
s1.includes('o');
s1.includes('u');

s1 = s1.toLowerCase();

console.log(s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u'));

/*
Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1:
let s2 = "x";

Expected Result 1:
"x"


Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"


Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"

*/


s2 = "abcdefg";

console.log(s2[Math.floor(s2.length / 2)]);


/*
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""


Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc"


Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"
*/


let s3 = "mariap";

console.log(s3[s3.length / 2 - 1] + s3[s3.length / 2]);

console.log(s3.slice(s3.length / 2 - 1, s3.length / 2 + 1));

/*
TASK 05
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters


Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 


Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/


let s4 = "computer"

console.log(`The first 2 characters are = ${s4.slice(0,2)}
    The last 2 characters are = ${s4.slice(-2)}
    The other characters are = ${s4.slice(2, s4.length - 2)}`);



/*
Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.

Test Data 1:
let s5 = "ab";;

Expected Result 1:
true

Test Data 2:
let s5 = "abcd";

Expected Result 2:
false

Test Data 3:
let s5 = "12ab12";;

Expected Result 1:
true

Test Data 4:
let s5 = "JavaScript";

Expected Result 4:
false
*/

let s5 = 'basjghgsghrgba';

console.log(s5.slice(0,2) === s5.slice(-2));

/*
TASK 09
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:
let s8 = "";

Expected Result 1:
""


Test Data 2:
let s8 = " ";

Expected Result 2:
" "


Test Data 3:
let s8 = "I like Apple";

Expected Result 3:
"Apple like I"



Test Data 4:
let s8 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript"
*/
let s8 = "I like apple";

let firstWord = s8.slice(0, s8.indexOf(' '));
let lastWord = s8.slice(s8.lastIndexOf(' ') + 1);
let mid = s8.slice(s8.indexOf(' ') + 1, s8.lastIndexOf(' '));

console.log(firstWord);
console.log(lastWord);
console.log(mid);

console.log(`${lastWord} ${mid} ${firstWord}`);

/*
TASK 10
Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1:
let s9 = "Good morning";

Expected Result 1:
2


Test Data 2:
let s9 = "Hello";

Expected Result 2:
1


Test Data 3:
let s9 = "I like Apple";

Expected Result 3:
3



Test Data 4:
let s9 = "JavaScript is nice to learn";

Expected Result 4:
5
*/

let s9 = "I want chocolate";

s9.split(' ').length;
console.log(s9.split(' ').length);

// 'I like Apple'       -> 12

let str10 = 'I like Apple';
console.log(str10.length) // 12
console.log(str10.replaceAll(' ', '').length); // 10

console.log(str10.length - str10.replaceAll(' ', '').length + 1);


// Requirement:
// Write a program that gets rid of first and last characters of given two String values. 
// Then, add these two String values to each other and print the result.

let s61 = '123456'; s62 = 'Blue';

console.log(`${s61.slice(1, s61.length - 1)}${s62.slice(1, s62.length - 1)}`);


// Requirement:
// Write a program that checks if a given String starts and ends with xx. 
// -If given String starts and ends with xx, then print true. 
// -Otherwise, print false

let s7 = 'xxbluexx';

console.log(s7.startsWith('xx') && s7.endsWith('xx'));

