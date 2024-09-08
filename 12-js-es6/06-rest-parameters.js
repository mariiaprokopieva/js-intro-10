console.log(Math.max(1));

function sum(...args) { // rest parameters
    let result = 0;

    for(const number of args) {
        result += number;
    }
    return result;
}

/*
Write a function that takes any number of arguments and return their product

product()               -> 0
product(5)              -> 5
product(2, 5)           -> 10
product(2, 5, 3)        -> 30
product(2, 5, 3, 4)     -> 120
*/

function product(...args) {
    if(args.length === 0) return 0;
    
    let result = 1;

    for(const number of args) {
        result *= number;
    }
    return result;
}

console.log(product());
console.log(product(5));
console.log(product(2, 5));
console.log(product(2, 5, 3));
console.log(product(2, 5, 3, 4));

const product1 = (...values) => values.length === 0 ? 0 : values.reduce((acc, curr) => acc * curr, 1);