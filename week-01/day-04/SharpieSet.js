const Sharpie = require('./Sharpie.js');

class SharpieSet {
	constructor() {
		this.list = [];
		//init
		this.list.push(new Sharpie('black', 10, 0));
		this.list.push(new Sharpie('pink', 8));
		this.list.push(new Sharpie('red', 4));
		this.list.push(new Sharpie('orange', 2, 0));
		this.list.push(new Sharpie('blue', 15));
		this.list.push(new Sharpie('green', 20));
	}

	countUsable() {
		let amount = 0;
		for (let i = 0; i < this.list.length; i++) {
			if (this.list[i].inkAmount > 0) {
				amount++;
			}
		}
		return amount;
	}

	removeTrash() {
		this.list = this.list.filter((item) => {
			return item.inkAmount > 0;
		})
	}
}

//examples
test = new SharpieSet();
console.log(`count usable sharpie: ${test.countUsable()}`);
test.removeTrash();
console.log(test.list);