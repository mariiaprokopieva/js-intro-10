const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];
// Put together all these elements from a1, a2 and a3 in a descending order
// in a new array -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

const a4 = [...a1, ...a2, ...a3];

console.log(a4.sort((a,b) => b - a));
/*
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->     [ 5, 8, 2, 1, 2 ]
Second array ->   [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/



const firstArr = [ 5, 8, 2, 1, 2 ];
const secondArr = [ 9, 3, 5, 1, 0 ];

console.log('1st array is = ', firstArr);
console.log('2nd array is = ', secondArr);

const thirdArr = [];
for (let i = 0; i <= firstArr.length - 1; i++) {
    thirdArr[i] = firstArr[i] * secondArr[i];
}

console.log('3rd array is = ', thirdArr);