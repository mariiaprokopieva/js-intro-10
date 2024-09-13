/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/

console.log('\n------------------TASK01------------------\n');

console.log('\n------------------1st solution------------------\n');

const hasUpperCase = str => {
    return str.search(/[A-Z]/) !== -1;
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

console.log('\n------------------2nd solution------------------\n');

const hasUpperCase2 = str => {
    let arr = str.split('');
    return arr.filter(x => x < 'A' || x > 'Z').length !== arr.length;
}

console.log(hasUpperCase2("javascript"));
console.log(hasUpperCase2("John"));
console.log(hasUpperCase2("$125.0"));
console.log(hasUpperCase2(""));

/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/

console.log('\n------------------TASK02------------------\n');

const noDigit = str => {
    let arr = str.split('');
    return arr.filter(x => x < '0' || x > '9').join('');
}

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"
*/

console.log('\n------------------TASK03------------------\n');

const noVowel = str => {
    const arr = str.split('');
    return arr.filter(x => !'AEIOUaeiou'.includes(x)).join('');
}

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

/*
Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​
Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []
*/

console.log('\n------------------TASK04------------------\n');

const no13 = arr => {
    return arr.map(x => x === 13 ? 0 : x);
}

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));

/*
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number. ​
Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
*/

console.log('\n------------------TASK05------------------\n');

const middleInt = (n1, n2, n3) => {
    return [n1, n2, n3].sort((a,b) => a - b)[1];
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0
*/

console.log('\n------------------TASK06------------------\n');

const sumOfDigits = str => {
    return str.split('').filter(x => x >= '0' && x <= '9').reduce((acc, curr) => acc += Number(curr), 0);
}

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits(`John's age is 29`));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/

console.log('\n------------------TASK07------------------\n');

const arrFactorial = arr => {
    return arr.map(x => {
        let factorial = 1;
        for(let i = 1; i <= x; i++) {
            factorial *= i;
        }
        return factorial;
    });
}

console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));

/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/

console.log('\n------------------TASK08------------------\n');

const categorizeCharacters = str => {
    let arr = str.split('');
    
    let letters = arr.filter(x => x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z').join('');
    let digits = arr.filter(x => x >= '0' && x <= '9').join('');
    let specials = arr.filter(x => (x < 'a' || x > 'z') && (x < 'A' || x > 'Z') && (x < '0' || x > '9')).join('');

    return [letters, digits, specials];
}

console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));