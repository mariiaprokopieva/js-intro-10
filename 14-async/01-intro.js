// Synchronous code
console.log('1');
console.log('2');
console.log('3');

setTimeout(() => {
    console.log('A');
}, 2000);

setTimeout(() => {
    console.log('B');
}, 1000);

setTimeout(() => {
    console.log('C');
}, 1500);

// OUTPUT:
/*
EXPECTATION
A
B
C
and takes 4.5 seconds

REALITY
B
C
A
and takes 2 seconds
*/

setTimeout(() => {
    console.log('VISIT URL');
}, 1000);

setTimeout(() => {
    console.log('ENTER USERNAME');
    console.log('ENTER PASSWORD');
    console.log('CLICK LOGIN');
}, 500);

setTimeout(() => {
    console.log('VALIDATE');
})


console.log('VISIT URL');
console.log('ENTER USERNAME');
console.log('ENTER PASSWORD');
console.log('CLICK LOGIN');
console.log('VALIDATE');