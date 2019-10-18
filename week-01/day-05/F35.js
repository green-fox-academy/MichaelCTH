const Aircrafts = require('./Aircrafts');

class F35 extends Aircrafts {
	constructor() {
		super('F35', 12, 50)
	}
}

module.exports = F35;