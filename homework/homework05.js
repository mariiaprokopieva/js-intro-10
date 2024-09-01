/*
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/

console.log('\n------------------TASK01------------------\n');

const countPos = (arr) => (arr.filter((x) => x > 0)).length;

/*
Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/

console.log('\n------------------TASK02------------------\n');

const countA = (str) => {
    let strSplitArr = str.toLowerCase().split('');
    return (strSplitArr.filter((x) => x === 'a')).length;
}


/*
Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/

console.log('\n------------------TASK03------------------\n');

const countVowels = (str) => {
    let lettersToLowerCaseArray = str.toLowerCase().split('');
    return (lettersToLowerCaseArray.filter(x => 'aeoui'.includes(x))).length;
}

/*
Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

console.log('\n------------------TASK04------------------\n');

const countConsonants = (str) => {
    let lettersToLowerCaseArray = str.toLowerCase().split('');
    return (lettersToLowerCaseArray.filter(x => !'aeoui'.includes(x))).length;
}

/*
Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 countWords("1 2 3 4") 				-> 4
*/

console.log('\n------------------TASK05------------------\n');

const countWords = (str) => {
    let wordsArray = str.trim().split(' ');
    return wordsArray.length;
}

/*
Requirement:
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/

console.log('\n------------------TASK06------------------\n');

const factorial = (num) => {
    let prod = 1;
    for (let i = 1; i <= num; i++) prod *= i;
    return prod;
}

/*
Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true
*/

console.log('\n------------------TASK07------------------\n');

const isPalindrome = (str) => {
    let strBackwards = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === strBackwards;
}

/*
Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0
*/

console.log('\n------------------TASK08------------------\n');

const countMultipleWords = (arr) => {
    let arrTrimmed = arr.map(x => x.trim());
    return (arrTrimmed.filter(x => x.indexOf(' ') !== -1)).length;
}

/*
Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/

console.log('\n------------------TASK09------------------\n');

const count3OrLess = (str) => {
    let wordsArr = str.trim().split(' ');
    if (str === '') return str;
    else return (wordsArr.filter(x => x.length <= 3)).length;
}

/*
Requirement:
Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 		-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/

console.log('\n------------------TASK10------------------\n');

const isPrime = (num) => {
    let allNum = [];
    for (let i = num; i > 0; i--) {
        allNum.push(i);
    }
    return (allNum.filter(x => num % x === 0)).length === 2;
}

/*
Requirement:
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]
*/

console.log('\n------------------TASK11------------------\n');

const add = (arr1, arr2) => {
    if (arr1.length < arr2.length) {
        for (let i = arr1.length; i < arr2.length; i++) {
            arr1.push(0);
        }
    }
    if (arr2.length < arr1.length) {
        for (let i = arr2.length; i < arr1.length; i++) {
            arr2.push(0);
        }
    }
    let result = [];
    for (let i = 0; i < arr1.length; i++) result[i] = arr1[i] + arr2[i];
    return result;
}
    

// console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]​));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

