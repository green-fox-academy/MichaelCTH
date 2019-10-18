const Aircrafts = require('./Aircrafts');

class F16 extends Aircrafts {
	constructor() {
		super('F16', 8, 30)
	}
}

module.exports = F16;