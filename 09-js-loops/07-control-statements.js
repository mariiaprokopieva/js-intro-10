// break vs continue

// Print all the numbers from 0 to 10 inclusive except even numbers

for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) continue;
    console.log(i);
}


// Print all the numbers from 1 to 20 (both included) except 6, 13
// we don't want to see any number more than 15

for(let i = 0; i <= 20; i++) {
    if(i === 6 || i === 13) continue;
    console.log(i);
}

let j = 0;

while (j <= 20) {
    if (j !== 6 && j !== 13) console.log(j);
    j++;
    if (j === 16) break;
}