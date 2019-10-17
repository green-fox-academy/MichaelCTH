const Armada = require('./Armada.js');

class WarApp {
    main() {
        let a1 = new Armada();
        let a2 = new Armada();
        a1.add(Math.round(Math.random() * 100));
        a2.add(Math.round(Math.random() * 100));
        let rst = a1.war(a2);
        if (rst) {
            console.log('a1 won');
        } else {
            console.log('a2 won');
        }
    }
}

let test = new WarApp();
test.main();