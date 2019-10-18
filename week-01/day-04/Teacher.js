class Teacher {
	teach(student) {
		student.learn();
	}

	answer() {
		console.log('teacher is answering a question');
	}
}

module.exports = Teacher;