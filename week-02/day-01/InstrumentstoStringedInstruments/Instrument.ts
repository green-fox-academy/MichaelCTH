abstract class Instrument {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(num, name) {
    super(name);
    this.numberOfStrings = num;
  }

  abstract sound(): void;

  play() {
    this.sound();
  }
}

class ElectricGuitar extends StringedInstrument {
  constructor(numString = 6) {
    super(numString, "Twang");
  }

  sound() {
    console.log(
      `Electric Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.name}`
    );
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numString = 4) {
    super(numString, "Duum-duum-duum");
  }

  sound() {
    console.log(
      `Bass Guitar, a ${this.numberOfStrings}-stringed instrument that goes ${this.name}`
    );
  }
}

class Violin extends StringedInstrument {
  constructor(numString = 4) {
    super(numString, "Screech");
  }

  sound() {
    console.log(
      `Violin, a ${this.numberOfStrings}-stringed instrument that goes ${this.name}`
    );
  }
}

export { ElectricGuitar, BassGuitar, Violin };
