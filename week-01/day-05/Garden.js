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
		return this.plants.filter(item=>{return item.needsWater(log);}).length;
	}

	watering(waterAmount) {
		let needsNum = this.waterCheck();
		let eachNum = waterAmount / needsNum;
		this.plants.filter(item=>{
			return item.needsWater();
		}).forEach(item=>{
			item.watering(eachNum)
		});
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
garden.waterCheck(true);

console.log('\nWatering with 70');
garden.watering(70);
garden.waterCheck(true);