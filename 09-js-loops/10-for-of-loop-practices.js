
const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];

// Log each name

console.log('\n------------------TASK-1 for loop------------------\n');

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('\n------------------TASK-1 for...of loop------------------\n');

for(const name of names) {
    console.log(name);
}

// Check how many names start with letter J (ignoring cases)

console.log('\n------------------TASK-2 for...of loop------------------\n');

let count = 0;

for(const name of names) {
    if (name[0] === 'J' || name[0] === 'j') count++;
}

console.log(count);

console.log('\n------------------TASK-2 for loop------------------\n');

count = 0;

for(let i = 0; i < names.length; i++) {
    if (names[i][0] === 'J' || names[i][0] === 'j') count++;
}

console.log(count);

// how many names have 4 characters

console.log('\n------------------TASK-3 for...of loop------------------\n');

count = 0;

for(const name of names) {
    if (name.length === 4) count++;
}

console.log(count);

console.log('\n------------------TASK-3 for loop------------------\n');

count = 0;

for(let i = 0; i < names.length; i++) {
    if (names[i].length === 4) count++;
}

console.log(count);



