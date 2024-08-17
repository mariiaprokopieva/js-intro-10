// string

let name = 'John';
console.log(name);
console.log(typeof name);


// number

let num1 = 10;
let num2 = 3.24;

console.log(num1, num2);
console.log(typeof num1, typeof num2);

// boolean: are used with if else conditions

let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5; //false

let isUserNameCorrect = 'admin' === 'johndoe' // false

console.log(isRainy);
console.log(isAuthenticated);
console.log(result);
console.log(isUserNameCorrect);

console.log(typeof isAuthenticated);
console.log(typeof result);

// undefined vs null

let className1;
let className2 = undefined;

let courseName = null;

console.log (typeof className1); // undefined
console.log (typeof className2); // undefined
console.log (typeof courseName); // object

// bigInt

let n1 = 352345250789547092450724357095n;
let n2 = BigInt('123324325245345355345')

console.log(n1);
console.log(n2);

console.log(typeof n1);
console.log(typeof n2);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 bigest integer we ccan store as number
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 smallest

// symbol

let s1 = Symbol('UA');

console.log(s1);
console.log(typeof s1);



