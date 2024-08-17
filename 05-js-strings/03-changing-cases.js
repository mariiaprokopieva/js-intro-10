// toLowerCase() vs toUpperCase()


let company = 'TechGlobal';

console.log(company.toLowerCase()); // 'techglobal'
console.log(company.toLocaleLowerCase()); // Locale - specific to geographic location (alphabet...)

console.log(company.toUpperCase()); // 'TECHGLOBAL'

let address = '123 St. #2, Des Plaines IL 12345';

let addressLower = address.toLowerCase();
let addressUpper = address.toUpperCase(); 

console.log(addressLower); // '123 st. #2, des plaines il 12345'
console.log(addressUpper); // '123 ST. #2, DES PLAINES IL 12345'

console.log(address); // ''123 St. #2, Des Plaines IL 12345'

/*
toUpperCase()
TASK: converts all the letters to upper cases
RETURN: a new string
ARGUMENT: no args - no parameters
CHANGE ORIGINAL VALUE: does not change original value
STATIC OR NON-STATIC: non-static
*/

