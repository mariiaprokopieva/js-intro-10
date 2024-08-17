function getRandomNumber(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.
Test data 1:
20, 70, 25

Expected Output 1: false
Test data 2:
65, 80, 90

Expected Output 2: true
*/

console.log('\n------------------TASK01------------------\n');

let r1 = getRandomNumber(1, 100);
let r2 = getRandomNumber(1, 100);
let r3 = getRandomNumber(1, 100);

console.log((r1 + r2 + r3) / 3 >= 50);

/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3

Expected Output 1: TRIPLE MATCH
Test data 2:
1, 3, 3

Expected Output 2: DOUBLE MATCH
*/

console.log('\n------------------TASK02------------------\n');

let ran1 = getRandomNumber(1, 3);
let ran2 = getRandomNumber(1, 3);
let ran3 = getRandomNumber(1, 3);

console.log(ran1, ran2, ran3);
if(ran1 === ran2 && ran2 === ran3) {
    console.log('TRIPLE MATCH');
}
else if(ran1 === ran2 || ran2 === ran3 || ran1 === ran3) {
    console.log('DOUBLE MATCH');
}
else console.log ('NO MATCH');

// SECOND SOLUTION

if(ran1 === ran2) {
    if(ran2 === ran3) console.log('TRIPLE MATCH');
    else console.log('DOUBLE MATCH');
}
else if(ran2 === ran3) console.log('DOUBLE MATCH');
else if(ran1 === ran3) console.log('DOUBLE MATCH');
else console.log ('NO MATCH');


/*
Requirement:
Write a function named as hasA() which takes a string word as an argument and returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true
*/
console.log('\n------------------TASK03------------------\n');

function hasA(str) {
    let strLower = str.toLowerCase();
    return strLower.includes('a');
}

/*
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple”
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"
*/

console.log('\n------------------TASK04------------------\n');

function doubleOrTripleWord(str) {
    if(str.length % 2 === 0) {
        return str + str + str;
    }
    else if(str = ' ') {
        return str;
    }
    else {
        return str + str;
    }
}

/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument and returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		-> "Hello"
firstWord("") 		-> ""
firstWord("    ") 		-> ""
*/

console.log('\n------------------TASK05------------------\n');

function firstWord(str) {

    str = str.trim();

    if(str.indexOf(' ') === -1) return str;

    else return str.slice(0, str.indexOf(' '));
}

/*
Requirement:
Write a function named as lastWord() which takes a string word as an argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript”
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/

console.log('\n------------------TASK06------------------\n');

function lastWord(str) {

    str = str.trim();

    if(str.lastIndexOf(' ') === -1) return str;

    else return str.slice(str.lastIndexOf(' ') + 1); 
}

/*
Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript”
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""
*/

console.log('\n------------------TASK07------------------\n');

function firstLastWord(str) {

    str = str.trim();

    if(str.lastIndexOf(' ') === -1) return str + str;

    else return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1); 
}

/*
Requirement:
Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false
*/

console.log('\n------------------TASK08------------------\n');

function startVowel(str) {
    // str = str.toLowerCase();
    // return str.startsWith('a') || str.startsWith('e') || str.startsWith('i') || str.startsWith('o') || str.startsWith('u');
    return 'aeiouAEIOU'.includes(str[0]);
}

/*
Requirement: 
Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	-> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 		-> ""
swap4("    ") 		-> ""
swap4("Apple") 	-> ""
*/

console.log('\n------------------TASK09------------------\n');

function swap4(str) {
    
    // let first4 = str.slice(0,4), last4 = str.slice(-4), mid = str.slice(4, str.length - 4)

    // if(str.length < 8) return '';
    
    // else return `${last4}${mid}${first4}`;

    if(str.length >= 8) {
        let first4 = str.slice(0,4);
        let last4 = str.slice(-4); 
        let mid = str.slice(4,- 4);
        return `${last4}${mid}${first4}`;
    }
    else return '';
}

/*
Requirement: 
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/

console.log('\n------------------TASK10------------------\n');

function swapFirstLastWord(str) {
    str = str.trim();
    let firstWord = str.slice(0, str.indexOf(' '));
    let lastWord = str.slice(str.lastIndexOf(' ') + 1);
    let mid = str.slice(str.indexOf(' ') + 1, str.lastIndexOf(' '));

    if(str.indexOf(' ') === -1) return ''; // alternative: if (str.includes(' ')) return `${lastWord} ${mid} ${firstWord}`; else re turn empty string
    return `${lastWord} ${mid} ${firstWord}`;
}
