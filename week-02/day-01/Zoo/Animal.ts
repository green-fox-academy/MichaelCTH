abstract class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract getName(): string;
  abstract getAge(): number;
  abstract setName(name: string): void;
  abstract setAge(age: number): void;
  abstract breed(): string;
}

class Reptile extends Animal {
  constructor(name: string) {
    super(name, 0);
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setName(name: string): void {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  breed(): string {
    return "laying eggs";
  }
}

class Mammal extends Animal {
  constructor(name: string) {
    super(name, 0);
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setName(name: string): void {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  breed(): string {
    return "pushing miniature versions out";
  }
}

class Bird extends Animal {
  constructor(name: string) {
    super(name, 0);
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setName(name: string): void {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  breed(): string {
    return "laying eggs";
  }
}

export { Reptile, Mammal, Bird };
