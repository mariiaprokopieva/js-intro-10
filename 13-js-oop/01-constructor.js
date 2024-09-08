/*
STUDENT PROTOTYPE - Properties - HAS
fname
lname
age
program
address
phone
SSN

STUDENT PROTOTYPE - functions - DOES
study()
attendClass()
takeExam()



CAR PROTOTYPE - properties
make
model
year
price
color
engineSize


CAR PROTOTYPE - functions
drive()
turn()
brake()
accelarate()
stop()



BANK CUSTOMER - properties
fname
lname
age
program
address
phone
SSN
account number
credentials

BANK CUSTOMER - functions
transfer()
deposit()
openAccount()
closeAccount()
apply()
updateInfo()



const student1 = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    info: function () {
        console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`);
    }
}

const student2 = {
    fname: 'Alina',
    lname: 'Hegyi',
    age: 36,
    info: function() {
        console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`)
    }
  }
  
  const student3 = {
    fname: 'Adela',
    lname: 'Mucea',
    age: 37,
    info: function() {
        console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`)
    }
  }
*/


// // BEFORE ES6 - Prototypes 
// // 1. Create a Student Constructor
// function Student(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
// }  

// // 2. You add prototype functions
// Student.prototype.info = function() {
//     console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`)
// };

// const student1 = new Student('John', 'Doe', 25);
// const student2 = new Student('Alina', 'Hegyi', 36);
// const student3 = new Student('Adela', 'Mucea', 37);

// student1.info();

// AFTER ES6 - Classes

// 1. Create a class called Student
class Student {
    // 2. Create a constructor
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    // 3. add functions
    info() {
        console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`);
    }
}

const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Alina', 'Hegyi', 36);
const student3 = new Student('Adela', 'Mucea', 37);

student1.info();
student2.info();
student3.info();



const numbers = [ 1, 2, 3];

const names = [ 'John', 'Alex', 'Mariia' ];

Array.prototype.print = function () {
    console.log(this);
}

numbers.print()