const Garden = require('./classES5');

function Playground(width, length, toys) {
  Garden.call(this, width, length);
  this.toys = toys;
}

Playground.prototype = Object.create(Garden.prototype);
Playground.prototype.constructor = Garden;
Playground.prototype.add = (toy) => this.toys.push(toy);

// examples
const p1 = new Playground(10, 20, ['a', 'b', 'c']);
console.log(p1.area());
console.log(p1.circumference());
console.log(p1.efficiency());
p1.add('d');
console.log(p1.toys);
console.log(p1 instanceof Garden);
console.log(p1 instanceof Playground);
