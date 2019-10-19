const Aircrafts = require('./Aircrafts');

class F35 extends Aircrafts {
	constructor() {
		super('F35')
		this.maxAmmo = 12;
		this.baseDamage = 50;
	}
}

module.exports = F35;