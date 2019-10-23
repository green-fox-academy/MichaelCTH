import { IStack } from "./interface";

class Stack implements IStack {
  items: string[];

  constructor() {
    this.items = [];
  }

  empty(): boolean {
    return (this.items.length === 0);
  }

  peek(): string {
    if (this.empty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  push(value: string): void {
    this.items.push(value);
  }

  pop(): string {
    if (this.empty()) {
      return undefined;
    }

    return this.items.pop();
  }
}

export { Stack };
