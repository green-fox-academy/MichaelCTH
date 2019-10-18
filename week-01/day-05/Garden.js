const Flower = require('./Flower');
const Tree = require('./Tree');

class Garden {
	constructor() {
		this.plants = [];
	}

	add(plant) {
		this.plants.push(plant);
	}

	waterCheck(log = false) {
		let needsNum = 0;
		this.plants.forEach((item) => {
			if (item.needsWater(log)) {
				needsNum++;
			}
		});

		return needsNum;
	}

	watering(waterAmount) {
		let needsNum = this.waterCheck();
		let eachNum = waterAmount / needsNum;
		this.plants.forEach((item) => {
			if (item.needsWater()) {
				item.watering(eachNum);
			}
		});

		this.waterCheck(true);
	}
}


// examples
garden = new Garden();
garden.add(new Flower('yellow'));
garden.add(new Flower('blue'));
garden.add(new Tree('purple'));
garden.add(new Tree('orange'));

garden.waterCheck(true);

console.log('\nWatering with 40');
garden.watering(40);

console.log('\nWatering with 70');
garden.watering(70);