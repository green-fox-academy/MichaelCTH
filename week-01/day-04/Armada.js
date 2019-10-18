const Ship = require('./Ship.js');

class Armada {
	constructor() {
		this.shipList = []
	}

	add(num) {
		for (let i = 0; i < num; i++) {
			let ship = new Ship();
			ship.fillShip();
			this.shipList.push(ship);
		}
	}

	war(otherArmada) {
		let idx1 = 0,
			idx2 = 0;
		while (idx1 < this.shipList.length && idx2 < otherArmada.shipList.length) {
			let rst = this.shipList[idx1].battle(otherArmada.shipList[idx2]);
			if (rst) {
				idx2++;
			} else {
				idx1++;
			}
		}

		return idx1 < this.shipList.length;
	}
}

module.exports = Armada;