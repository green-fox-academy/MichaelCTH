const Plant = require('./Plant');

class Flower extends Plant {
    constructor(color) {
        super(color, 'Flower', 0.75, 5);
    }
}

module.exports = Flower;