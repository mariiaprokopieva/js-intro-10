const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];

// Adam, Jane, John, alex, alexander

const sortedNames = names.sort();

console.log(names); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]
console.log(sortedNames); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]

const numbers = [ 1, 40, 2, 3, 20, 200 ];

// 1, 2, 3, 10, 40, 100 -> our expectation, but sort method without arguments considers elements as strings. ISSUE

const numbersSorted = numbers.sort();

console.log(numbers); // [ 1, 2, 20, 200, 3, 40 ]
console.log(numbersSorted); // [ 1, 2, 20, 200, 3, 40 ]


const nums = [ 1, 40, 2, 3, 20, 200 ];

nums.sort((a,b) => a - b);

console.log(nums);