const Plant = require('./Plant');

class Flower extends Plant {
	constructor(color) {
		super(color, 'Flower');
		this.absorb = 0.75;
		this.threshold = 5;
	}
}

module.exports = Flower;