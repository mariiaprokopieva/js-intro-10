let num1 = Infinity;
let num2 = -Infinity;

console.log(num1, num2);

console.log(2 / 0); // Infinity
console.log(-5 / 0); // -Infinity

console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); // NaN

console.log(Infinity * Infinity); // Infinity
console.log(Infinity / Infinity); // NaN

console.log(typeof Infinity); // 'number'