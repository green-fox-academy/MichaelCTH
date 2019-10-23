import { IQueue } from "./interface";

class Queue implements IQueue {
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

    return this.items[0]
  }

  add(value: string): void {
    this.items.push(value);
  }

  remove(): string {
    if (this.empty()) {
      return undefined;
    }

    return this.items.shift();
  }
}
