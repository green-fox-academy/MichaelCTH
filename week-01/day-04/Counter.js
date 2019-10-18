class Counter {
	constructor(count = 0) {
		this.count = count;
		this.initial = count;
	}

	add(num = 1) {
		this.count += num;
	}

	get() {
		return this.count + '';
	}

	reset() {
		this.count = this.initial;
	}
}

// examples
c = new Counter(50);
console.log(c.get());
c.add()
console.log(c.get());
c.add(50)
console.log(c.get());
c.reset()
console.log(c.get());