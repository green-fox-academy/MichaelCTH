const Student = require('./Student');
const Mentor = require('./Mentor');
const Person = require('./Person');
const Sponsor = require('./Sponsor');

class Cohort {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(Student) {
        this.students.push(Student);
    }

    addMentor(Mentor) {
        this.mentors.push(Mentor);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.students.size} students and ${this.mentors.size} mentors.`);
    }
}

// examples
const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

people.forEach((person) => {
    person.introduce();
    person.getGoal();
})

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();