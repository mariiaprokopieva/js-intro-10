const student = {
    study: function() {
        console.log('STUDY');
    }
};

const mathStudent = Object.create(student);

mathStudent.fname = 'John';
mathStudent.calculate = function () {
    console.log('CALCULATE');
}

mathStudent.study();
mathStudent.calculate();

function Teacher() {}

Teacher.prototype.teach = function () {
    console.log('TEACH');
}

Teacher.prototype.giveHomework = function () {
    console.log('GIVE HOMEWORK');
}

function MathTeacher() {}

MathTeacher.prototype = Object.create(Teacher.prototype);

const mathTeacher1 = new MathTeacher();

mathTeacher1.teach();
mathTeacher1.giveHomework();