const F16 = require('./F16');
const F35 = require('./F35');

class Carrier {
	constructor(ammo, health) {
		this.crafts = [];
		this.ammo = ammo;
		this.health = health;
	}

	add(craft) {
		this.crafts.push(craft);
	}

	priorityFill(flag = false) {
		this.crafts.forEach((craft) => {
			if (flag === craft.isPriority()) {
				let fill = Math.min(this.ammo, craft.maxAmmo);
				this.ammo -= fill;
				this.ammo += craft.refill(fill);
			}
		});
	}

	fill() {
		if (this.ammo === 0) {
			throw "Empty Ammo Storage";
		}
		this.priorityFill(true);
		this.priorityFill();
	}

	fight(otherCarrier) {
		this.crafts.forEach((craft) => {
			if (otherCarrier.health !== 0) {
				let damage = craft.fight();
				otherCarrier.health = Math.max(0, otherCarrier.health - damage);
			}
		});
	}

	getStatus() {
		let totalDamage = 0;
		let tmp = '';
		this.crafts.forEach((craft) => {
			tmp += craft.getStatus() + '\n';
			totalDamage += (craft.ammunition * craft.baseDamage);
		});
		let rts = `HP: ${this.health}, Aircraft count: ${this.crafts.length}, Ammo Storage: ${this.ammo}, Total damage: ${totalDamage}\n`;
		rts += 'Aircrafts\n';

		let dead = '';
		if (this.health === 0) {
			dead = 'It\'s dead Jim :(';
		}
		return rts + tmp + dead;
	}
}

// examples
c1 = new Carrier(2352, 5000);
c2 = new Carrier(2000, 2000);
c1.add(new F35());
c1.add(new F35());
c1.add(new F35());
c1.add(new F16());
c1.add(new F16());
c1.fill();
console.log(c1.getStatus());


c1.fight(c2);
console.log(c1.getStatus());
console.log(c2.getStatus());