const Item = require('./Item');

class Tool extends Item {
  constructor(name, price) {
    super(name, price);
    this.condition = 'good';
  }

  print() {
    console.log(`${this.condition} ${this.name} - ${this.price}`);
  }
}

module.exports = Tool;
