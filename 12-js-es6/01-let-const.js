let fname = 'John';

fname = 'James'; // reassignment allowed

console.log(fname); // James

let lnamel // let allows declaration without initialization - undefined

// const MUST be initialized and cannot be reassigned
const gravity; // ERROR - SyntaxError: Missing initializer in const declaration

const pi = 3.14; // works fine

pi = 10; 

console.log(pi); // TypeError: Assignment to constant variable.