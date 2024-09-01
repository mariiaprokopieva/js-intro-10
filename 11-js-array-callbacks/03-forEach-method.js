const names = [ 'James', 'John', 'Alex', 'Mariia' ];

console.log('\n---------------iteration of arrays with for...of loop-----------------\n');
for(const name of names) {
    console.log(name);
}

console.log('\n---------------iteration of arrays with for loop-----------------\n');

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('\n---------------iteration of arrays with forEach method-----------------\n');

const printName = (name) => console.log(name);


names.forEach(printName);

names.forEach((x) => console.log(x));

// Print each name uppercased

names.forEach((x) => console.log(x.toUpperCase()));

// Print each names first and last letter together
// Js
// Jn
// Ax
// Ma
console.log('\n---------------iteration of arrays with forEach method - first and last letters-----------------\n');

const firstLastLetters = (str) => console.log(str[0] + str[str.length - 1]);


names.forEach(firstLastLetters);

// Print the names that has length equals 4
// John
// Alex

console.log('\n---------------iteration of arrays with forEach method - names with 4 letters-----------------\n');

names.forEach((str) => {
    if(str.length === 4) console.log(str);
});



// for each name create a new array
// store the length of each name in a different array
// [ 'James', 'John', 'Alex', 'Mariia' ] -> [5, 4, 4, 6];

console.log('\n---------------iteration of arrays with forEach method - array with the lengths of names-----------------\n');

const arrLength = [];

names.forEach((name) => {
    arrLength.push(name.length);
});

console.log(arrLength);


console.log('\n---------------iteration of arrays with map method - array with the lengths of names-----------------\n');

console.log(names.map((x) => x.length));

