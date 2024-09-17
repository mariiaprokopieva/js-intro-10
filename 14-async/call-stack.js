function funcA() {
    console.log('A');
}

function funcB() {
    console.log('B');
    funcA();
}

function funcC() {
    console.log('C');
    funcB();
}

funcC();

// C
// B
// A