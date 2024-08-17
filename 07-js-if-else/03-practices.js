/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL

Testing program with EDGE SCENARIOS
1. 60
2. 59
3. 61
4. 0
5. 100
6. 'abc'
7. '#$'
8. Negative numbers
9. Numbers more than 100
*/

let exam_score = 36;

if(exam_score >= 60) {
    console.log('PASS');
}
else {
    console.log('FAIL');
}
// if(typeof exam_score === 'number') {
// if(exam_score < 0 || exam_score > 100) {
//     throw Error ('This is not a valid exam score!!!');
// }
// if(exam_score >= 60) {
//     console.log('PASS');
// }
// else {
//     console.log('FAIL');
// }
// }
// else {
//     throw Error('The input provided is not a number!!!');
// }


// if you execute a single line of code within if or else block
// then you can omit the curly braces

if(exam_score >= 60) console.log('PASS');
else console.log('FAIL');


if(true) console.log('Hello');

else {
    console.log('A');
    console.log('B');
}

/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 45;

if(age >= 65) console.log('YOU CAN GET RETIRED');
else console.log('YOU CANNOT GET RETIRED!!!');


// Ternary operator: used for short if-else statements
age >= 65 ? console.log('YOU CAN GET RETIRED') : console.log('YOU CANNOT GET RETIRED!!!');

// condition ? expression_true: expression_false;

let fname = 'John';
let first = false;
if(first) {
    console.log(fname[0]);
}
else {
    console.log(fname[fname.length - 1]);
}

first ? console.log(fname[0]) : console.log(fname[fname.length - 1]);

