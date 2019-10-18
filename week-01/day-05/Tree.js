const Plant = require('./Plant');

class Tree extends Plant {
    constructor(color) {
        super(color, 'Tree', 0.4, 10);
    }
}

module.exports = Tree;