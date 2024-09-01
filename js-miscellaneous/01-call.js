/*
this keyword
*/

const person = {
    fname: 'John',
    lname: 'Doe',
    fullname: function () {
        console.log(`The fullname is ${this.fname} ${this.lname}`);
    }
}

person.fullname(); // The fullname is John Doe

const student = {
    fname: 'Alex',
    lname: 'Smith'
}

// Function borrowing from one object to another
person.fullname.call(student); // The fullname is Alex Smith



function hi(str) {
    console.log(`Hi, ${str}!`);
}

const instructor = {
    name: 'John Doe'
}

hi('Data'); // Hi, Data

// Borrowing a function for an object
hi.call(instructor, instructor.name);