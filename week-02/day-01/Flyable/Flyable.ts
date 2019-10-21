import Animal from "./Animal";

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  protected type: string;
  protected speed: number;
  protected numDoor: number;

  constructor(type: string, speed: number, numDoor: number) {
    this.type = type;
    this.speed = speed;
    this.numDoor = numDoor;
  }
}

class Helicopter extends Vehicle implements Flyable {
  constructor() {
    super("Helicopter", 80, 2);
  }

  land(): void {
    console.log("Helicopter land");
  }

  fly(): void {
    console.log("Helicopter fly");
  }

  takeOff(): void {
    console.log("Helicopter take off");
  }
}

class Bird extends Animal implements Flyable {
  constructor() {
    super();
  }

  land(): void {
    console.log("Bird land");
  }

  fly(): void {
    console.log("Bird fly");
  }

  takeOff(): void {
    console.log("Bird take off");
  }
}

export { Helicopter, Bird };
