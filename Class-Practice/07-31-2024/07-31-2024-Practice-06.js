/*Requirement:
Write a function named as tripleWord() which takes a string word as an 
argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
tripleWord("Tech")  -> "TechTechTech"
tripleWord("Global")  -> "GlobalGlobalGlobal"
*/

console.log('\n------------------TASK01------------------\n');

function tripleWord(str) {
    return str.repeat(3);
}

console.log(tripleWord('JavaScript'));

/*
Write a function named as has4() which takes a string word as an 
argument and returns true if given string has at least 4 characters, and 
false otherwise when invoked.
Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/

console.log('\n------------------TASK02------------------\n');

function has4(str) {
    return str.length >= 4;
}

console.log(has4('123'));

/*
Write a function named as celciusToFahrenheit() which takes a number 
to be considered as Celcius value and returns the Fahrenheit value when 
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
celciusToFahrenheit(25)  -> 77
celciusToFahrenheit(0)  -> 32
celciusToFahrenheit(-10)  -> 14
*/

console.log('\n------------------TASK03------------------\n');

function celciusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(celciusToFahrenheit(20));

/*
Write a function named as kgToPounds() which takes a number to be 
considered as Kilograms value and returns the Pounds value when 
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to 
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/

console.log('\n------------------TASK04------------------\n');

function kgToPounds(kilogram) {
    return kilogram * 2.2;
}

console.log(kgToPounds(75));

/*


NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/

console.log('\n------------------TASK05------------------\n');

function rectangleArea(x, y) {
    return x * y;
}