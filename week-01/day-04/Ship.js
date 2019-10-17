const Pirates = require('./Pirates.js');

class Ship {
    constructor() {
        this.listCrew = [];
        this.captain = null;
    }

    fillShip() {
        this.captain = new Pirates(true);
        let num = Math.round(Math.random() * 100);
        for (let i = 0; i < num; i++) {
            this.listCrew.push(new Pirates());
        }
    }

    getAliveCrew() {
        let count = 0;
        this.listCrew.forEach((crew) => {
            if (crew.status !== 'die') {
                count++;
            }
        })

        return count;
    }

    info() {
        console.log(`Captain consumed ${this.captain.intoxicateNum} rum, state: ${this.captain.status}.`)
        console.log(`There are ${this.getAliveCrew()} alive pirates in the crew.`);

    }

    battle(otherShip) {
        let own = this.getAliveCrew() - this.captain.intoxicateNum;
        let other = otherShip.getAliveCrew() - otherShip.captain.intoxicateNum;
        if (own > other) {
            //console.log('Win Party');
            otherShip.listCrew = otherShip.listCrew.splice(0, Math.round(Math.random() * otherShip.listCrew.length));
            this.captain.intoxicateNum += Math.round(Math.random() * 20);
            return true;
        } else {
            //console.log('Loser');
            this.listCrew = this.listCrew.splice(0, Math.round(Math.random() * this.listCrew.length));
            otherShip.captain.intoxicateNum += Math.round(Math.random() * 20);
            return false;
        }

    }
}

module.exports = Ship;