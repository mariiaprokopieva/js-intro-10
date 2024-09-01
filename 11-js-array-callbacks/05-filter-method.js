const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

console.log(numbers.filter(x => x >= 50));

const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

console.log(fruits.filter(x => x.toLowerCase().includes('apple')));
console.log((fruits.filter(x => x.toLowerCase().includes('a'))).length);
console.log((fruits.filter(x => x.toLowerCase().includes('i'))).length);