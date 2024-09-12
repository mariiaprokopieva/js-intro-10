const engineer = {
    solveProblem: function () {
        console.log('SOLVE PROBLEM');
    }
};

const tester = {
    test: function () {
        console.log('TEST');
    },
    __proto__: engineer
};

const sdet = {
    code: function () {
        console.log('CODE');
    },
    __proto__: tester
};

sdet.code();
sdet.test();
sdet.solveProblem();

console.log(sdet.__proto__);
console.log(tester.__proto__);
console.log(sdet.__proto__.__proto__);