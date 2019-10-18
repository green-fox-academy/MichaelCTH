class Plant {
    constructor(color, type, absorb, threshold) {
        this.color = color;
        this.type = type;
        this.waterAmount = -1;
        this.absorb = absorb;
        this.threshold = threshold;
    }

    needsWater(log = false) {
        if (this.waterAmount < this.threshold) {
            if (log) {
                console.log(`The ${this.color} ${this.type} needs water`);
            }
            return true;
        } else {
            if (log) {
                console.log(`The ${this.color} ${this.type} doesnt need water`);
            }
            return false;
        }

    }

    watering(amount) {
        this.waterAmount += (this.absorb * amount);
    }
}

module.exports = Plant;