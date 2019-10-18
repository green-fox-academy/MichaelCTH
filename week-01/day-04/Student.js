class Student {
	learn() {
		console.log('Student is learning something new');
	}

	question(teacher) {
		teacher.answer();
	}
}

module.exports = Student;