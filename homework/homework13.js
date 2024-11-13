/*
Requirement:
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
countVC("Hello")               -> {vowels: 2, consonants: 3}
countVC("Programming")   -> {vowels: 3, consonants: 8}
countVC("123AbC")               -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")             -> {vowels: 0, consonants: 3}
countVC("")                           -> {vowels: 0, consonants: 0}
*/

console.log('\n------------------TASK01------------------\n');

const countVC = str => {
    return {
        vowels: str.split('').reduce((acc,curr) => 'aeiou'.includes(curr.toLowerCase()) ? acc + 1 : acc, 0),
        consonants: str.split('').reduce((acc,curr) => (curr.toLowerCase() >= 'a' && curr.toLowerCase() <= 'z') && !'aeiou'.includes(curr.toLowerCase()) ? acc + 1 : acc, 0)
    }
}

console.log(countVC("Hello"));
console.log(countVC("Programming"));
console.log(countVC("123AbC"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""));

/*
Requirement:
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
Examples:
countChars("Hello")                           -> {letters: 5}
countChars("Programming 123")   -> {letters: 11, numbers: 3}
countChars("123AbC!@#")               -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")               -> {numbers: 10}
countChars("     ")                                  -> {}
countChars("")                                       -> {}
*/

console.log('\n------------------TASK02------------------\n');

const countChars = str => {
    
    const result = {};

    let letters = 0;
    let numbers = 0;
    let specials = 0;

    for(const char of str) {
        if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') letters++;
        else if(char >= '0' && char <= '9') numbers++;
        else if(char !== ' ') specials++;
    }

    if(letters !== 0) result.letters = letters;
    if(numbers !== 0) result.numbers = numbers;
    if(specials !== 0) result.specials = specials;

    return result;
}

console.log(countChars("Hello"));
console.log(countChars("Programming 123"));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("     "));
console.log(countChars(""));

/*
Requirement:
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""
*/

console.log('\n------------------TASK03------------------\n');

const maxOccurrences = str => {
    str = str.replace(/\s+/g, '');

    if(str === '') return '';

    const frequency = {};
    for(let i = 0; i < str.length; i++) {
    const char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let maxChar = '';
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxOccurrences("Hello"));
console.log(maxOccurrences("Occurrences"));
console.log(maxOccurrences("    ab    "));
console.log(maxOccurrences("12   3   21"));
console.log(maxOccurrences("      "));
console.log(maxOccurrences(""));

/*
Requirement:
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""
*/

console.log('\n------------------TASK04------------------\n');

const starOut = str => {
    let chars = str.split('');
    while(chars.indexOf('*') !== -1) {
        if(chars[chars.indexOf('*') + 1] === '*') chars.splice(chars.indexOf('*') - 1, 4);
        else chars.splice(chars.indexOf('*') - 1, 3);
    }
    return chars.join('');
}

console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("xm*sm*sy"));
console.log(starOut("abc"));
console.log(starOut("   "));
console.log(starOut(""));

/*
Requirement:
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I")  -> 1
romanToInt("IV")  -> 4
romanToInt("CXII")  -> 112
romanToInt("MMM")  -> 3000
romanToInt("MMMDCCCLXXXVIII")   -> 3888
romanToInt("MDCLXVI")    -> 1666
*/

console.log('\n------------------TASK05------------------\n');

const romanToInt = str => {
    const nums = [ 1, 5, 10, 50, 100, 500, 1000 ];

    const romanNumsArr = [ 'I', 'V', 'X', 'L', 'C', 'D', 'M' ];

    let result = 0;

    for(let i = 0; i < str.length; i++) {
        if(romanNumsArr.indexOf(str[i]) < romanNumsArr.indexOf(str[i + 1])) {
            result += nums[romanNumsArr.indexOf(str[i + 1])] - nums[romanNumsArr.indexOf(str[i])];
            i += 2;
        }
        else result += nums[romanNumsArr.indexOf(str[i])];
    }

        return result;
    
}

    console.log(romanToInt("I"));
    console.log(romanToInt("IV"));
    console.log(romanToInt("CXII"));
    console.log(romanToInt("MMM"));
    console.log(romanToInt("MMMDCCCLXXXVIII"));
    console.log(romanToInt("MDCLXVI"));
