/*
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/

console.log('\n------------------TASK01------------------\n');

console.log('\n------------------1st solution------------------\n');

const countPos1 = (arr) => arr.reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0);

console.log(countPos1([-45, 0, 0, 34, 5, 67]));
console.log(countPos1([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos1([0, -1, -2, -3]));

console.log('\n------------------2nd solution------------------\n');

const countPos2 = (arr) => (arr.filter((x) => x > 0)).length;

console.log(countPos2([-45, 0, 0, 34, 5, 67]));
console.log(countPos2([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos2([0, -1, -2, -3]));

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

console.log('\n------------------1st solution------------------\n');

const countA1 = (str) => {
    let strSplitArr = str.toLowerCase().split('');
    return strSplitArr.reduce((acc, curr) => curr === 'a' ? acc + 1 : acc, 0);
}

console.log(countA1("TechGlobal is a QA bootcamp"));
console.log(countA1("QA stands for Quality Assurance"));
console.log(countA1("Cypress"));

console.log('\n------------------2nd solution------------------\n');

const countA2 = (str) => {
    let strSplitArr = str.toLowerCase().split('');
    return (strSplitArr.filter((x) => x === 'a')).length;
}

console.log(countA2("TechGlobal is a QA bootcamp"));
console.log(countA2("QA stands for Quality Assurance"));
console.log(countA2("Cypress"));

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

console.log('\n------------------1st solution------------------\n');

const countVowels1 = (str) => {
    let lettersToLowerCaseArray = str.toLowerCase().split('');
    return lettersToLowerCaseArray.reduce((acc, curr) => 'aeoui'.includes(curr) ? acc + 1 : acc, 0);
}

console.log(countVowels1("Hello"));
console.log(countVowels1("Hello World"));
console.log(countVowels1("JavaScript is fun"));
console.log(countVowels1(""));

console.log('\n------------------2nd solution------------------\n');

const countVowels2 = (str) => {
    let lettersToLowerCaseArray = str.toLowerCase().split('');
    return (lettersToLowerCaseArray.filter(x => 'aeoui'.includes(x))).length;
}

console.log(countVowels2("Hello"));
console.log(countVowels2("Hello World"));
console.log(countVowels2("JavaScript is fun"));
console.log(countVowels2(""));

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

console.log('\n------------------1st solution------------------\n');

const countConsonants1 = (str) => {
    let lettersToLowerCaseArray = str.toLowerCase().split('');
    return lettersToLowerCaseArray.reduce((acc, curr) => !'aeoui'.includes(curr) ? acc + 1 : acc, 0);
}

console.log(countConsonants1("Hello"));
console.log(countConsonants1("Hello World"));
console.log(countConsonants1("JavaScript is fun"));
console.log(countConsonants1(""));

console.log('\n------------------2nd solution------------------\n');

const countConsonants2 = (str) => {
    let lettersToLowerCaseArray = str.toLowerCase().split('');
    return (lettersToLowerCaseArray.filter(x => !'aeoui'.includes(x))).length;
}

console.log(countConsonants2("Hello"));
console.log(countConsonants2("Hello World"));
console.log(countConsonants2("JavaScript is fun"));
console.log(countConsonants2(""));

/*
Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				-> 4
*/

console.log('\n------------------TASK05------------------\n');

const countWords = (str) => {
    let wordsArray = str.trim().split(' ');
    return wordsArray.length;
}

console.log(countWords("   Javascript is fun    "));
console.log(countWords("Cypress is an UI automation tool.  "));
console.log(countWords("1 2 3 4"));

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

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

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

console.log('\n------------------1st solution------------------\n');

const countMultipleWords1 = (arr) => {
    return arr.map(x => x.trim()).reduce((acc, curr) => curr.indexOf(' ') !== -1 ? acc + 1 : acc, 0);
}

console.log(countMultipleWords1([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords1([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords1([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords1([]));

console.log('\n------------------2nd solution------------------\n');

const countMultipleWords2 = (arr) => {
    let arrTrimmed = arr.map(x => x.trim());
    return (arrTrimmed.filter(x => x.indexOf(' ') !== -1)).length;
}

console.log(countMultipleWords2([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords2([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords2([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords2([]));

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

console.log('\n------------------1st solution------------------\n');

const count3OrLess1 = (str) => {
    return str.trim().split(' ').reduce((acc, curr) => curr.length <= 3 && curr.length !== 0 ? acc + 1 : acc, 0);
}

console.log(count3OrLess1("Hello"));
console.log(count3OrLess1("Hi John"));
console.log(count3OrLess1("JavaScript is fun"));
console.log(count3OrLess1("My name is John Doe"));
console.log(count3OrLess1(""));

console.log('\n------------------2nd solution------------------\n');

const count3OrLess2 = (str) => {
    let wordsArr = str.trim().split(' ');
    if (str === '') return 0;
    else return (wordsArr.filter(x => x.length <= 3)).length;
}

console.log(count3OrLess2("Hello"));
console.log(count3OrLess2("Hi John"));
console.log(count3OrLess2("JavaScript is fun"));
console.log(count3OrLess2("My name is John Doe"));
console.log(count3OrLess2(""));

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

console.log('\n------------------1st solution------------------\n');

const isPrime1 = (num) => {
    let allNum = [];
    for (let i = num; i > 0; i--) {
        allNum.push(i);
    }
    return allNum.reduce((acc, curr) => num % curr === 0 ? acc + 1: acc, 0) === 2;
}

console.log(isPrime1(5));
console.log(isPrime1(2));
console.log(isPrime1(29));
console.log(isPrime1(-5));
console.log(isPrime1(0));
console.log(isPrime1(1));

console.log('\n------------------2nd solution------------------\n');

const isPrime2 = (num) => {
    let allNum = [];
    for (let i = num; i > 0; i--) {
        allNum.push(i);
    }
    return (allNum.filter(x => num % x === 0)).length === 2;
}

console.log(isPrime2(5));
console.log(isPrime2(2));
console.log(isPrime2(29));
console.log(isPrime2(-5));
console.log(isPrime2(0));
console.log(isPrime2(1));

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
    let max = Math.max(arr1.length, arr2.length);
    let result = [];
    for(let i = 0; i < max; i++) {
        arr1[i] === undefined ? arr1.push(0) : arr1[i];
        arr2[i] === undefined ? arr2.push(0) : arr2[i];
        result[i] = arr1[i] + arr2[i]
    }
    return result;
}
    

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

/*
Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> ""
*/

console.log('\n------------------TASK12------------------\n');

const removeExtraSpaces = (str) => {
    return str.trim().split(/\s+/).join(' ');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

/*
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

console.log('\n------------------TASK13------------------\n'); 

const findClosestTo10 = arr => {
    let closestTo10 = Infinity; 
    for (let i = 0; i < arr.length; i++) { 
       if (arr[i] === 10) continue; 
   else {
          let currentDist = Math.abs(10 - arr[i]);
          let closestDist = Math.abs(10 - closestTo10);
          if ((currentDist < closestDist) || (currentDist === closestDist && arr[i] < closestTo10)) closestTo10 = arr[i];
       }
    }
    return closestTo10;
 }

 console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
 console.log(findClosestTo10([10, -13, 8, 12, 15, -2]));
 console.log(findClosestTo10([0, -1, -2]));

/*
Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least 2 characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true
*/

console.log('\n------------------TASK14------------------\n');

console.log('\n------------------1st solution------------------\n');

const isEmailValid = (str) => {
    return /^([A-Za-z0-9._%-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,})$/.test(str);
}

console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

console.log('\n------------------2nd solution------------------\n');

const isEmailValid2 = (str) => {
    if(str.includes(' ') || str.indexOf('@') !== str.lastIndexOf('@') || !str.includes('@')) return false;
    else {
        let beforeAt = str.slice(0, str.indexOf('@'));
        let afterAtBeforeDot = str.slice(str.indexOf('@') + 1, str.lastIndexOf('.'));
        let afterDot = str.slice(str.lastIndexOf('.') + 1);

        if(beforeAt.length >= 2 && afterAtBeforeDot >= 2 && afterDot >= 2) {
            return  true;
        }
        else {
            return false;
        }
    }
}

console.log(isEmailValid2('!#$@!^^.!^'));

/*Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
*/

console.log('\n------------------TASK15------------------\n'); 

console.log('\n------------------1st solution------------------\n');

const isPasswordValid = (str) => {
    if (str.length < 8 || str.length > 16) return false;
    else if (!/\d/.test(str)) return false;
    else if (!/[A-Z]/.test(str)) return false;
    else if (!/[a-z]/.test(str)) return false;
    else if (!/[!-/:-@]/.test(str)) return false;
    else if(str.includes(' ')) return false;
    else return true;
}


console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));

console.log('\n------------------2nd solution------------------\n');

const isPasswordValid2 = pass => {
    if(pass.length < 8 || pass.length > 16 || pass.includes(' ')) return false;

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let hasSpecial = false;

    for(let char of pass) {
        if(char >= 'a' && char <= 'z') hasLowerCase = true;
        else if(char >= 'A' && char <= 'Z') hasUpperCase = true;
        else if(char >= '0' && char <= '9') hasDigit = true;
        else hasSpecial = true;
    }
    return hasUpperCase && hasLowerCase && hasDigit && hasSpecial;
}

console.log(isPasswordValid2(""));
console.log(isPasswordValid2("abcd"));
console.log(isPasswordValid2("abcd1234"));
console.log(isPasswordValid2("Abcd1234"));
console.log(isPasswordValid2("Chicago12345US!#$%"));
console.log(isPasswordValid2("Abcd1234$"));
console.log(isPasswordValid2("Chicago123$"));
console.log(isPasswordValid2("Test1234#"));

console.log('\n------------------3rd solution------------------\n');

const isPasswordValid3 = pass => {
    if(pass.length < 8 || pass.length > 16 || pass.includes(' ')) return false;

    if(pass.split('').filter(ele => ele >= 'A' && ele <= 'Z').length === 0) return false;
    if(pass.split('').filter(ele => ele >= 'a' && ele <= 'z').length === 0) return false;
    if(pass.split('').filter(ele => ele >= '0' && ele <= '9').length === 0) return false;
    if(pass.split('').filter(ele => (ele < 'a' || ele > 'z') && (ele < 'A' || ele > 'Z') && (ele < '0' || ele > '9').length === 0)) return false;

    return true;
}


console.log(isPasswordValid3(""));
console.log(isPasswordValid3("abcd"));
console.log(isPasswordValid3("abcd1234"));
console.log(isPasswordValid3("Abcd1234"));
console.log(isPasswordValid3("Chicago12345US!#$%"));
console.log(isPasswordValid3("Abcd1234$"));
console.log(isPasswordValid3("Chicago123$"));
console.log(isPasswordValid3("Test1234#"));


