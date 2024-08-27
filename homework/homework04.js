const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).

Expected Output:7 
14
21
.
.
.
.
91
98
*/

console.log('\n------------------TASK01------------------\n');

console.log('\n------------------1st solution------------------\n');

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}

console.log('\n------------------2nd solution------------------\n');

let k = 7;

do {
    console.log(k);
    k += 7;
}
while (k <= 100);

/*
Requirement:
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).

Expected Output:6
12
18 
.
.
36
42
48
*/

console.log('\n------------------TASK02------------------\n');

console.log('\n------------------1st solution------------------\n');

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

console.log('\n------------------2nd solution------------------\n');

let j = 1;

while (j <= 50) {
    if (j % 2 === 0 && j % 3 === 0) console.log(j);
    j++;
}

/*
Requirement:
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).

Expected Output:100
95
90
85
.
.
.
60
55
50
*/

console.log('\n------------------TASK03------------------\n');

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
}

/*
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!

Expected Output:The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/

console.log('\n------------------TASK04------------------\n');

for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i * i}`);
}

/*
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10

NOTE: Use loop!!!

Expected Output:
55
*/

console.log('\n------------------TASK05------------------\n');

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

/*
Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

console.log('\n------------------TASK06------------------\n');

let ranNum06 = getRandomNumber(1, 10);
let factorial = 1;

for (let i = ranNum06; i >= 1; i--) {
    factorial *= i;
}

console.log(`${ranNum06}! = ${factorial}`);

/*
Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.

Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s to generate it.
*/

console.log('\n------------------TASK07------------------\n');

let ranNum07;
let attempts = 0;

do {
    ranNum07 = getRandomNumber(1, 100);
    attempts++;
} while (ranNum07 % 5 !== 0);

console.log(`The random number is ${ranNum07} and it took ${attempts} attempt/s to generate it.`);

/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
 */

console.log('\n------------------TASK08------------------\n');

const array = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(array);
console.log(array.sort());

/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/

console.log('\n------------------TASK09------------------\n');

const dogs = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(dogs);

console.log('\n------------------1st solution------------------\n');

console.log(dogs.includes('Pluto'));

console.log('\n------------------2nd solution------------------\n');

console.log(dogs.indexOf('Pluto') !== -1);

/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

console.log('\n------------------TASK10------------------\n');

const cats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];

console.log(cats.sort());

console.log('\n------------------1st solution------------------\n');

console.log(cats.includes('Garfield') && cats.includes('Felix'));

console.log('\n------------------2nd solution------------------\n');

console.log(cats.indexOf('Garfield') !== -1 && cats.indexOf('Felix') !== -1);

/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

console.log('\n------------------TASK11------------------\n');

const arr = [ 10.5, 20.75, 70, 80, 15.75 ];

console.log(arr);

console.log('\n------------------1st solution------------------\n');

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}

console.log('\n------------------2nd solution------------------\n');

for(element of arr) {
    console.log(element);
}

/*Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/

console.log('\n------------------TASK12------------------\n');

const arr12 = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];

console.log(arr12);

console.log('\n------------------1st solution------------------\n');

let count1 = 0;

for (let i = 0; i <= arr12.length - 1; i++) {
    let firstLetter = arr12[i][0].toUpperCase();
    if (firstLetter === 'B' || firstLetter === 'P') count1++; 
}

console.log(`Elements starting with 'B' or 'P' = ${count1}`);

let count2 = 0;

for (let i = 0; i <= arr12.length - 1; i++) {
    let element = arr12[i].toLowerCase();
    if (element.includes('book') || element.includes('pen')) count2++; 
}

console.log(`Elements having 'book' or 'pen' = ${count2}`);

console.log('\n------------------2nd solution------------------\n');

count1 = 0;

for(element of arr12) {
    if ('bBpP'.includes(element[0])) count1++;
}

console.log(`Elements starting with 'B' or 'P' = ${count1}`);

count2 = 0;

for(element of arr12) {
    if (element.toLowerCase().includes('book') || element.toLowerCase().includes('pen')) count2++;
}

console.log(`Elements having 'book' or 'pen' = ${count2}`);

/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/

console.log('\n------------------TASK13------------------\n');

const arr13 = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];

console.log(arr13);

let n1 = 0, n2 = 0, n3 = 0;

console.log('\n------------------1st solution------------------\n');

for (let i = 0; i <= arr13.length - 1; i++) {
    if(arr13[i] > 10) n1++;
    if(arr13[i] < 10) n2++;
    if(arr13[i] === 10) n3++;
}

console.log(`Elements that are more than 10 = ${n1}
Elements that are less than 10 = ${n2}
Elements that are 10 = ${n3}`);

console.log('\n------------------2nd solution------------------\n');

n1 = 0;
n2 = 0;
n3 = 0;

for(number of arr13) {
    if(number > 10) n1++;
    if(number < 10) n2++;
    if(number === 10) n3++;
}

console.log(`Elements that are more than 10 = ${n1}
    Elements that are less than 10 = ${n2}
    Elements that are 10 = ${n3}`);

/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

console.log('\n------------------TASK14------------------\n');

const firstArr = [ 5, 8, 13, 1, 2 ];
const secondArr = [ 9, 3, 67, 1, 0 ];

console.log('1st array is = ', firstArr);
console.log('2nd array is = ', secondArr);

const thirdArr = [];
for (let i = 0; i <= firstArr.length - 1; i++) {
    thirdArr[i] = Math.max(firstArr[i], secondArr[i]);
}

console.log('3rd array is = ', thirdArr);

/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/

console.log('\n------------------TASK15------------------\n');

console.log('\n------------------1st solution------------------\n');

function firstDuplicate(arr) {

    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 1; j <= arr.length - 1; j++) {
            if (i === j) continue;
            if (arr[i] === arr[j]) return arr[i]; 
        }
    }
    return -1;
}

console.log('\n------------------2nd solution------------------\n');

function firstDuplicate2(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr.includes(arr[i], i + 1)) return arr[i];  
    }
    return -1;
}

/*
Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/

console.log('\n------------------TASK16------------------\n');

console.log('\n------------------1st solution------------------\n');

function getDuplicates(arr) {

    const arrDuplicates = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 1; j <= arr.length - 1; j++) {
            if (i === j) continue;
            if (arr[i] === arr[j] && !arrDuplicates.includes(arr[i])) arrDuplicates.push(arr[i]);
        }
    }
    return arrDuplicates;
}

console.log('\n------------------2nd solution------------------\n');

arrDuplicates = [];

function getDuplicates2(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr.includes(arr[i], i + 1) && !arrDuplicates.includes(arr[i])) arrDuplicates.push(arr[i]);  
    }
    return arrDuplicates;
}

/*
Requirement:
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
*/

console.log('\n------------------TASK17------------------\n');

function reverseStringWords(str) {
    
    const wordsArray = str.split(' '); // [i, like, Javascript]
    let lettersArray;

    for (let i = 0; i <= wordsArray.length - 1; i++) {
        lettersArray = wordsArray[i].split(''); 
        wordsArray[i] = lettersArray.reverse().join('');
    }
    return wordsArray.join(' ');
} 

/*
Requirement:
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
*/

console.log('\n------------------TASK18------------------\n');

function getEvens(n1, n2) {
    
    let min = Math.min(n1, n2);
    let max = Math.max(n1, n2);

    const array = [];

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) array.push(i);
    }
    return array;
}

/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/

console.log('\n------------------TASK19------------------\n');

function getMultipleOf5(n1, n2) {

    const array = [];

    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            if (i % 5 === 0) array.push(i);
        }
    }
    else {
        for (let i = n1; i >= n2; i--) {
            if (i % 5 === 0) array.push(i);
        }
    }
    return array;
}

/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/

console.log('\n------------------TASK20------------------\n');

function fizzBuzz(n1, n2) {
    
    let min = Math.min(n1, n2);
    let max = Math.max(n1, n2);

    let array = [];

    for (let i = min; i <= max; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) array.push('FizzBuzz');
            else array.push('Fizz');
        }
        else if (i % 5 === 0) array.push('Buzz');
        else array.push(i);
    }
    return array.join(' | ');
}