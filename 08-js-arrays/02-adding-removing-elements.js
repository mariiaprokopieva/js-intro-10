const names = [ 'Alex', 'John' ];

console.log(names); // [ 'Alex', 'John' ]

// Adding elements to the end of array
console.log(names.push('Mariia')); // 3

console.log(names); // [ 'Alex', 'John', 'Mariia' ]

names.push('Jane', 'Max', 'Data'); // [ 'Alex', 'John', 'Mariia', 'Jane', 'Max', 'Data' ]

console.log(names);

// Removing elements from the end of the array
names.pop(); // 'Data'
names.pop(); // 'Max'
names.pop(); // 'Jane'

console.log(names); // [ 'Alex', 'John', 'Mariia' ]


const numbers = [ 10, 20, 30 ];

// Adding elements to the beginning of the array
console.log(numbers);
numbers.unshift(99); // 4
console.log(numbers);

numbers.unshift(15, 23); // 6
console.log(numbers);

// Removing elements from the beginning

numbers.shift(); // 15
numbers.shift(); // 23
numbers.shift(); // 99

console.log(numbers); // [ 10, 20, 30 ]

numbers.shift();
numbers.shift();
numbers.shift();
console.log(numbers.shift()); // undefined