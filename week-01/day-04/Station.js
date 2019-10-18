class Station {
	constructor(gasAmount) {
		this.gasAmount = gasAmount;
	}

	refill(car) {
		this.gasAmount -= car.capacity;
		car.gasAmount += car.capacity;
	}
}

module.exports = Station;