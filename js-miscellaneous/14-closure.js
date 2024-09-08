/*
let initialScore = 0;

function score() {
    return initialScore += 1;
}

score();
score();
score();

initialScore = 100;

console.log(initialScore); // 103
*/

function score() {
    let initialScore = 0;
    return initialScore += 1;
}

console.log(score());