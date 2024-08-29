
// array destructuring

const arr = [ 'abc', 'xyz', 'hi', 'hello' ];

let [ first, second, third, fourth ] = arr;

// object desctructuring

const account = {
    username: 'TechGlobalSchool',
    email: 'tgschool@gmail.com',
    password: 'Test1234'
};


const { username, email, password } = account;

console.log(username); // 'TechGlobalSchool'
console.log(email); // 'tgschool@gmail.com'
console.log(password); // 'Test1234'