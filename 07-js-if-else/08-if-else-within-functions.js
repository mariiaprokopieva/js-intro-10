function startE(name) {
    name = name.trim().toLowerCase();
    if(name[0] === 'e') return true;
    return false;
}

console.log(startE('Emily')); // true
console.log(startE('emily')); // true
console.log(startE('Alex')); // false
console.log(startE('')); // false
console.log(startE(' Emily'));

function divisible5(number) {
    if(number % 5 === 0) return true;
    return false;
}

console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));
console.log(divisible5(99));


function fooBar(number) {
    if(number % 5 === 0) {
        if(number % 7 === 0) return 'foobar';
        return 'foo';
    }
    else if(number % 7 === 0) return 'bar';
    return number;
}

console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));
console.log(fooBar(70));
/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

function getGrade(number) {
    if(number >= 90 && number <= 100) return 'A';
    else if(number >= 80 && number <= 89) return 'B';
    else if(number >= 70 && number <= 79) return 'C';
    else if(number >= 60 && number <= 69) return 'D';
    else if(number >= 0 && number <= 59) return 'F';
    else throw Error('The entered score is not valid!!!');

}

console.log(getGrade(120));