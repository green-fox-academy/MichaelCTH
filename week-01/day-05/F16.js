const Aircrafts = require('./Aircrafts');

class F16 extends Aircrafts {
	constructor() {
		super('F16')
		this.maxAmmo = 8;
		this.baseDamage = 30;
	}
}

module.exports = F16;