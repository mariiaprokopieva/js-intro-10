console.log(Math.PI); // 3.141592653589793

console.log(isFinite(Math.PI)); // true because PI is hardcoded this way

console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5

let result = Math.abs(3 - 10);
console.log(result); // 7

// ceil() vs floor() vs round() vs trunc()

console.log(Math.ceil(10.01)); // 11 - moves to the closest higher absolute number
console.log(Math.floor(10.01)); // 10 - moves to the closest smaller absolute number

console.log(Math.round(10.01)); // 10 - rounds up
console.log(Math.round(10.65)); // 11

console.log(Math.trunc(10.01)); // 10 - cuts the decimal part
console.log(Math.trunc(10.65)); // 10

// max() & min()

let num1 = 10, num2 = 5, num3 = -3;

let maxNum = Math.max(num1, num2, num3);

console.log(maxNum);

let minNum = Math.min(num1, num2, num3);

console.log(minNum);

// pow() vs sqrt()

console.log(5 ** 2); // 25
console.log(Math.pow(5, 2)); // 25

let result2 = Math.pow(3, 3);
console.log(result2); // 27

// random()
console.log(1 / Number.MIN_VALUE); // infinity



console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());