class Pirates {
    constructor(captain = false) {
        this.captain = captain;
        this.intoxicateNum = 0;
        this.status = 'alive';
    }

    drinkSomeRum() {
        this.intoxicateNum++;
    }

    howsItGoingMate() {
        if (this.status === 'die') {
            console.log('he\'s dead');
        } else if (this.intoxicateNum <= 4) {
            console.log('Pour me anudder!');
        } else {
            console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
            this.passOut()
        }
    }

    die() {
        this.status = 'die';
    }

    passOut() {
        this.status = 'pass';
    }

    brawl(x) {
        let ranNum = Math.random()
        if (ranNum <= 0.3) {
            this.die();
        } else if (ranNum <= 0.6) {
            x.die();
        } else {
            this.passOut();
            x.passOut();
        }
    }
}

module.exports = Pirates;

// example
// test = new Pirates();
// test1 = new Pirates();
// test.brawl(test1);