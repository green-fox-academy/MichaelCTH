const Person = require('./Person');

class Mentor extends Person {
    constructor(name, age, gender, level = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }

    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.');
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} level mentor.`);
    }
}

module.exports = Mentor;