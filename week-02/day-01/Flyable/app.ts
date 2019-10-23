import { Helicopter, Bird } from "./Flyable";

const helicopter = new Helicopter();
const bird = new Bird();

helicopter.takeOff();
helicopter.fly();
helicopter.land();

bird.takeOff();
bird.fly();
bird.land();

