const Station = require('./Station.js');
const Car = require('./Car.js');

station = new Station(100);
car = new Car();

station.refill(car);
console.log(`After refill, the car's gasAmount is ${car.gasAmount}, and station's gasAmount is ${station.gasAmount}`);