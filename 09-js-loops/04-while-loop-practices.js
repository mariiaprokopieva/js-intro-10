// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50

let i = 0;

while (i <= 50) {
    console.log(i);
    i += 2;
}

// Count all the even numbers between 1 and 10 (both inclusive) -> 2, 4, 6, 8, 10 -> 5



console.log('\n------------------for-loop solution------------------\n');

let countE1 = 0;

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) countE1++;
}
console.log(countE1); // 5

console.log('\n------------------while-loop solution------------------\n');

let j = 1;
let countE2 = 0;

while (j <= 10) {
    if(j % 2 === 0) countE2++;
    j++;
}

console.log(countE2); // 5

// Find sum of the numbers starting from 3 to 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7 -> 25

console.log('\n------------------while-loop solution------------------\n');

let k = 3;
let sum = 0;

while (k <= 7) {
    sum += k;
    k++;
}

console.log(sum); // 25

console.log('\n------------------for-loop solution------------------\n');

sum = 0;

for(let i = 3; i <= 7; i++) {
    sum += i;
}

console.log(sum);  //25



