const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

Test data 1:
0, 1

Expected result 1:
false


Test data 2:
0, 0

Expected result 2:
true


Test data 3:
1, 0

Expected result 3:
false


Test data 4:
1, 1

Expected result 4:
true
*/

let t1num1 = getRandomNumber(0, 1);
let t1num2 = getRandomNumber(0, 1);

console.log(t1num1, t1num2);

console.log(t1num1 === t1num2);


switch(t1num1 === t1num2) {
    case true:
        console.log('true');
        break;
    default:
        console.log('false');
}

// ASCII REPRESANTATION OF characters

// 32      SPACE

// 48-57   (0-9)

// 65-90   (A-Z)

// 97-122  (a-z)

// the rest is special characters


/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"


Test data 1:
"v"

Expected result 1:
"v" is a letter

Test data 2:
"5"

Expected result 2:
"5" is a digit

Test data 3:
"@"

Expected result 3:
INVALID INPUT
*/

let t2character = '@';

let t2toUpper = t2character.toUpperCase();
let t2toLower = t2character.toLowerCase();

if(t2toUpper === t2character && t2toLower === t2character) {
    if (isNaN(t2character * 5)) console.log('INVALID INPUT');
    else console.log(`'${t2character}' is a digit`);
}
else {
    console.log(`'${t2character}' is a letter`);
}


let t2characterASCII = t2character.charCodeAt(0);

if(t2characterASCII >= 48 && t2characterASCII <= 57) {
    console.log(`'${t2character}' is a digit`);
}
else if((t2characterASCII >= 65 && t2characterASCII <= 90) || (t2characterASCII >= 97 && t2characterASCII <= 122)) {
    console.log(`'${t2character}' is a letter`);
}
else {
    console.log('INVALID INPUT');
}

/*
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter


Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter


Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t3character = 'D';

let t3characterASCII = t3character.charCodeAt(0);

// ladder if-else solution

if(t3characterASCII >= 65 && t3characterASCII <= 90) {
    console.log(`'${t3character}' is an uppercase letter`);
}
else if(t3characterASCII >= 97 && t3characterASCII <= 122) {
    console.log(`'${t3character}' is a lowercase letter`);
}
else {
    console.log('INVALID INPUT');
}

// nested if...else

if((t3characterASCII >= 65 && t3characterASCII <= 90) || (t3characterASCII >= 97 && t3characterASCII <= 122)) {
    if(t3characterASCII <= 90) console.log(`"${t3character}" is an uppercase letter`);
    else console.log(`"${t3character}" is a lowercase letter`);
}
else {
    console.log("INVALID INPUT");
}

/*
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/

let t4character = '<';

let t4ASCII = t4character.charCodeAt(0);

if ((t4ASCII >= 65 && t4ASCII <= 90) || (t4ASCII >= 122 && t4ASCII <= 122) || (t4ASCII >= 48 && t4ASCII <= 57) || t4ASCII === 32) {
    console.log(`'${t4character}' is not a special character`);
}
else {
    console.log(`'${t4character}' is a special character`);
}

/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a" is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N" is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t5character = 'U';

let t5ASCII = t5character.charCodeAt(0);  

if((t5ASCII >= 65 && t5ASCII <= 90) || (t5ASCII >= 97 && t5ASCII <= 122)) {
    let vowels = 'aeouiAEOUI';
    if (vowels.includes(t5character)) {
        console.log(`"${t5character}" is a vowel`);
    } 
    else {
        console.log(`"${t5character}" is not a vowel`);
    }
}  
else {
    console.log("INVALID INPUT");
}

function doubleOrTripleWord(str1) {
    if (str1.length % 2 === 0) {
    return str1.repeat(3);
    } else{
        return str1.repeat(2);
    }
 }
console.log(doubleOrTripleWord('Global'));
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord(1));
console.log(doubleOrTripleWord(2));

























