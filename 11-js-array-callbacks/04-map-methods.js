const numbers = [ 5, 3, 2, 20];

// [ 'odd', 'odd', 'even', 'even'];

console.log(numbers.map((x) => x % 2 === 0 ? 'even' : 'odd'));




const sentences = ['Good morning', 'I like arrays', 'It is Saturday'];

// each sentence's first word -> ['Good', 'I', 'It'];

console.log(sentences.map((x) => x.slice(0, x.indexOf(' '))));


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

console.log(salaries.map((x) => x.toFixed(2)));

