class Plant {
	constructor(color, type) {
		this.color = color;
		this.type = type;
		this.waterAmount = 0;
	}

	needsWater(log = false) {
		let outString = '';
		outString = (this.waterAmount < this.threshold) ? `The ${this.color} ${this.type} needs water` : `The ${this.color} ${this.type} doesnt need water`;
		
		if(log){
			console.log(outString);
		}

		return this.waterAmount < this.threshold;
	}

	watering(amount) {
		this.waterAmount += (this.absorb * amount);
	}
}

module.exports = Plant;