import { Node } from './Node';
import { IStack } from './interface';

class Stack implements IStack {
  head: Node;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  empty(): boolean {
    return (this.size == 0);
  }

  peek(): string {
    return this.head.value;
  }

  push(value: string): void {
    let temp = new Node(value, this.head);
    this.head = temp;
  }

  pop(): string {
    let temp = this.head;
    if (!temp) {
      return null;
    }

    this.head = this.head.next;
    return temp.value;
  }
}

export { Stack };