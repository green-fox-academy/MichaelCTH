const Ship = require('./Ship.js');

class BattleApp {
	main() {
		let test1 = new Ship();
		let test2 = new Ship();
		test1.fillShip();
		test1.info();
		test2.fillShip();
		test2.info();
		console.log('=========================');
		test1.battle(test2);
		test1.info();
		test2.info();
	}
}

test = new BattleApp();
test.main();