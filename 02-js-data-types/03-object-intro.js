const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'johndoe@gmail.com',
    phone: '000-000-0000'
};

// object with five properties (key+value)

console.log(user.firstName); 
console.log(typeof user); // object

// Getting a specific information of the object using dot notation or bracket notation

console.log(user.email); // 'johndoe@gmail.com'
console.log(user['phone']);

// Updating the property values using dot notation or bracket notation

user.firstName = 'Alex';
user['phone'] = '111-111-1111';

// Adding a new property to an object
user.password = 'test1234';
user['password'] = 'test1234';

// Removing an existing property from the object
delete user.age;
delete user['lastName'];



const student = {}; // empty object
const devices = []; // empty array