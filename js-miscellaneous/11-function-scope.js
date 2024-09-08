function print() {
    var num1 = 10;
    let num2 = 15;
    const num3 = 20;

    console.log(num1, num2, num3);
}

// Function scope do not allow us to access variables declared in a function body

console.log(num1); // num1 is not defined
console.log(num2); // num1 is not defined
console.log(num3); // num1 is not defined

// Write a function that takes 2 numbers and returns their sum

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(result); // ReferenceError: result is not defined

// Write a function that takes an array and return the product of the numbers in the array
function productArr (arr) {
    let product = 1;

    for(const number of arr) {
        product *= number;
    }
    return product;
}

console.log(productArr([4, 5, 3])); // 60
console.log(product); // ReferenceError: product is not defined