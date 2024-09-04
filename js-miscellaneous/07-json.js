const object = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: true
}

// To send this JS object to server, we need to convert to JSON string
// Serialization
// Reason for serialization to send data to server: we are converting it to s string because it's super light compared to an object

let jsonObject = JSON.stringify(object);

console.log(jsonObject);


// JSON string
let student = `{
"DOB": "2000-10-10",
"EMAIL": "john@abc.com",
"FIRST_NAME": "John",
"LAST_NAME": "Doe",
"INSTRUCTOR_ID": 1
}`

// To be able to read the JSON string values, we need to convert it to JS Object
// Deserealization
// Reason for deserialization: to read data easier

const JSObject = JSON.parse(student);

console.log(student);
console.log(JSObject);

console.log(JSObject.FIRST_NAME);

// REAL EXAMPLE:
/*
Go to https://www.techglobal-training.com/backend 
validate that the first student's full name is Tech Global
*/

fetch('https://www.techglobal-training.com/backend').then((res) => {
    console.log(res);
});

let existing_student = `{"first_name":"Adam","last_name":"Smith","date_of_birth":1790,"isAlive":true}
{
"DOB": "2000-10-10",
"EMAIL": "john@abc.com",
"FIRST_NAME": "John",
"LAST_NAME": "Doe",
"INSTRUCTOR_ID": 1
}
{
  DOB: '2000-10-10',
  EMAIL: 'john@abc.com',
  FIRST_NAME: 'John',
  LAST_NAME: 'Doe',
  INSTRUCTOR_ID: 1
}`