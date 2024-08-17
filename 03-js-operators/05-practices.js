let num1 = 6;
let num2 = 4;

console.log('The sum = ' + (num1 + num2));
console.log('The substruction = ' + (num1 - num2));
console.log('The product = ' + num1 * num2);
console.log('The division = ' + num1 / num2);
console.log('The exponent =', num1 ** num2);
console.log('The remainder =', num1 % num2);

// ES6 bacticks
console.log(`The sum = ${num1 + num2}`);

console.log(`The result of ${num1} multiplied by ${num2} = ${num1 * num2}`);


let fullname = 'John Doe';
let age = 25;

let num = 5;

// The person is 'John Doe' and the age is '25'. S/he will turn '30' in 5 years.

console.log(`The person is '${fullname}' and the age is '${age}'. S/he will turn '${age+num}' in 5 years. `);



/*
Assume that you are given a rectangle with width = 5  and heigth = 8 

Calculate the area and perimeter of the rectangle

area = width * heigth
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/

let width = 5, height = 8;

console.log(`The area of the rectangle with width ${width} and height ${height} = ${width * height}`);
console.log(`The perimeter of the rectangle with width ${width} and height ${height} = ${2 * (width + height)}`);

/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week  26 payments
*/

let salary = 120000;

console.log(`SDET monthly salary is ${salary / 12}$`);
console.log(`SDET bi-weekly salary is ${(salary / 26).toFixed(2)}$`);
console.log(`SDET weekly salary is ${(salary / 52).toFixed(2)}$`);
