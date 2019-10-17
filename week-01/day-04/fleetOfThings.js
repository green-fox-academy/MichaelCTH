'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

const fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
class FleetOfThings {

    print(fleet) {
        fleet.forEach((item, idx) => {
            let status = '[ ]';
            if (item.getCompleted()) {
                status = '[x]';
            }
            console.log(`${idx+1}. ${status} ${item.getName()}`);
        });
    }

    main() {
        let myFleet = new Fleet();
        myFleet.add(new Thing('Get milk'));
        myFleet.add(new Thing('Remove the obstacles'));
        let thing1 = new Thing('Stand up');
        thing1.complete();
        myFleet.add(thing1);
        let thing2 = new Thing('Eat lunch');
        thing2.complete();
        myFleet.add(thing2);

        this.print(myFleet.getThings());
    }
}

// exmaples
let test = new FleetOfThings();
test.main();