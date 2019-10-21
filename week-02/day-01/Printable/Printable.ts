interface Printable {
  printAllFields(): void;
}

class Domino implements Printable {
  protected values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  toString(): string {
    return `[${this.values[0]}|${this.values[1]}]`;
  }

  printAllFields(): void {
    console.log(this.toString());
  }
}

class Todo implements Printable {
  protected thing: string;

  constructor(thing: string) {
    this.thing = thing;
  }

  printAllFields(): void {
    console.log(this.thing);
  }
}

export { Domino, Todo };
