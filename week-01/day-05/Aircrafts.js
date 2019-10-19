class Aircrafts {
	constructor(type) {
		this.type = type;
		this.ammunition = 0;
	}

	fight() {
		let ammo = this.ammunition;
		this.ammunition = 0
		return this.baseDamage * ammo;
	}

	refill(ammo) {
		let tmp = this.ammunition;
		this.ammunition = Math.min(this.ammunition + ammo, this.maxAmmo);
		return ammo - this.ammunition + tmp;
	}

	getType() {
		return this.type;
	}

	getStatus() {
		return `Type ${this.type}, Ammo: ${this.ammunition}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammunition*this.baseDamage}`;
	}

	isPriority() {
		return this.type === 'F35';
	}
}

module.exports = Aircrafts;