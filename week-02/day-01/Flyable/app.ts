import { Helicopter, Bird } from "./Flyable";

const helicop = new Helicopter();
const bird = new Bird();

helicop.takeOff();
helicop.fly();
helicop.land();

bird.takeOff();
bird.fly();
bird.land();
console.log(`${bird.hunger}, ${bird.thirst}`);
