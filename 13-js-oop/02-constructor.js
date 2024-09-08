// TASK: create a Teacher prototype with fname, lname, age, field properties

// Create 2 Teacher Prototype methods as teach and giveHomework with empty bodies

// Create 3 Teacher Objects

// Replicate this work with ES6 classes as well



// Store all the ages in an array
// Store all the first names in an array
// Find and print the information of the oldest teacher

/*
function Teacher(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
}

Teacher.prototype.teach = function() {};
Teacher.prototype.giveHomework = function() {};

const teacher1 = new Teacher('Akin', 'Kaya', 35, 'JavaScript');
const teacher2 = new Teacher('Bilal', 'Alsilwadi', 25, 'JavaScript');
const teacher3 = new Teacher('Alan', '', 35, 'JavaScript');
*/

class Teacher {
    constructor(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
    }

    teach() {}
    giveHomework() {}
}

const teacher1 = new Teacher('Akin', 'Kaya', 35, 'JavaScript');
const teacher2 = new Teacher('Bilal', 'Alsilwadi', 25, 'JavaScript');
const teacher3 = new Teacher('Alan', '', 36, 'JavaScript');

const ages = [teacher1.age, teacher2.age, teacher3.age];
const firstNames = [teacher1.fname, teacher2.fname, teacher3.fname];

const teachers = [teacher1, teacher2, teacher3];

console.log(teachers.reduce((acc, curr) => curr.age > acc.age ? curr : acc));