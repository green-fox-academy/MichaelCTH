const Animal = require('./Animal.js');

class Farm {
    constructor(slot) {
        this.animalList = [];
        this.slot = slot;
    }

    breed() {
        if (this.slot == 0) {
            console.log('There is no space for a new animal.');
            return false;
        }
        this.slot--;
        this.animalList.push(new Animal());
        return true;
    }

    slaughter() {
        let targetIdx = 0;
        let minHungry = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < this.animalList.length; i++) {
            if (this.animalList[i].hunger < minHungry) {
                minHungry = this.animalList[i].hungerl
                targetIdx = i;
            }
        }

        this.animalList = this.animalList.splice(targetIdx, 1);
    }
}