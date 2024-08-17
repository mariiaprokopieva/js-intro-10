console.log('\n---------------TASK01---------------\n');
let ranNum0_51 = Math.floor((Math.random() * 51) * 5);
console.log(`The random number * 5 = {${ranNum0_51}}`);
/*Requirement:
Write a program that generates two random numbers
between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference
*/
console.log('\n---------------TASK02---------------\n');
let ranNum1_10 = Math.ceil(Math.random() * 10), ranNum21_10 = Math.ceil(Math.random() * 10);
console.log(`Minimum number = {${Math.min(ranNum1_10, ranNum21_10)}}`);
console.log(`Maximum number = {${Math.max(ranNum1_10, ranNum21_10)}}`);
console.log(`Difference = {${Math.abs(ranNum1_10 - ranNum21_10)}}`);
/*Requirement:
Write a program that generates a random number
between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result
    */
console.log('\n---------------TASK03---------------\n');
let ranNum50_100 = Math.floor(Math.random() * 51) + 50;
let remainder = ranNum50_100 % 10;
console.log(`The random number % 10 = {${remainder}}`);
/*Requirement:
Write a program that generates 5 random numbers between
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:
59
*/
console.log('\n---------------TASK04---------------\n');
let ran1 = Math.ceil(Math.random() * 10);
let ran2 = Math.ceil(Math.random() * 10);
let ran3 = Math.ceil(Math.random() * 10);
let ran4 = Math.ceil(Math.random() * 10);
let ran5 = Math.ceil(Math.random() * 10);
console.log(ran1, ran2, ran3, ran4, ran5);
console.log(5 * ran1 + 4 * ran2 + 3 * ran3 + 2 * ran4 + 1 * ran5);
/*
Requirement:
Write a program that generates 4 random numbers as
below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min
number
Find the absolute difference between the second and
third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average
*/
console.log('\n---------------TASK05---------------\n');
let ran01 = Math.ceil(Math.random() * 25);
let ran02 = Math.ceil(Math.random() * 25) + 25;
let ran03 = Math.ceil(Math.random() * 25) + 50;
let ran04 = Math.ceil(Math.random() * 25) + 75;
console.log(`Difference of max and min = {${Math.abs(Math.max(ran01, ran02, ran03, ran04) - Math.min(ran01, ran02, ran03, ran04))}}`);
console.log(`Difference of second and third = {${Math.abs(ran02 - ran03)}}`);
console.log(`Average of all = {${(ran01 + ran02 + ran03 + ran04) / 4}}`);









