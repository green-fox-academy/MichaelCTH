const Plant = require('./Plant');

class Tree extends Plant {
	constructor(color) {
		super(color, 'Tree');
		this.absorb = 0.4;
		this.threshold = 10;
	}
}

module.exports = Tree;