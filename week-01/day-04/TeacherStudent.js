const Teacher = require('./Teacher.js');
const Student = require('./Student.js');

student = new Student();
teacher = new Teacher();

student.question(teacher);
teacher.teach(student);