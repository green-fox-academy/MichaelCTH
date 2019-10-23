import { Node } from './Node';
import { ILinkedList } from './interface';

class LinkedList implements ILinkedList {
  head: Node;
  listSize: number;
  cur: Node;

  constructor() {
    this.head = new Node('Dummy');
    this.listSize = 0;
  }

  add(value: string, index?: number): void {
    let target = (index || index === 0) ? index - 1 : this.listSize - 1;

    let walker = this.head;
    let counter = -1;
    while (counter < target && walker.next) {
      walker = walker.next;
      counter += 1;
    }
    let temp = walker.next;
    walker.next = new Node(value, temp);
    this.listSize += 1;
  }

  get(index: number): string {
    if (index >= this.size() || index < 0) {
      return undefined;
    }

    let walker = this.head;
    let counter = -1;
    while (counter < index && walker.next) {
      walker = walker.next;
      counter += 1;
    }
    return walker.value;
  }

  removeItem(value: string): void {
    let walker = this.head;
    while (walker.next) {
      if (walker.next.value === value) {
        walker.next = walker.next.next;
        this.listSize -= 1;
      } else {
        walker = walker.next;
      }
    }
  }

  remove(index: number): string {
    let walker = this.head;
    let counter = -1;
    while (counter < (index - 1) && walker.next) {
      walker = walker.next;
      counter += 1;
    }
    let temp = walker.next;
    walker.next = walker.next.next;
    this.listSize -= 1;
    return temp.value;
  }

  size(): number {
    return this.listSize;
  }

  display(): string {
    let rst = '';
    let walker = this.head.next;
    while (walker) {
      rst += walker.value + ' -> ';
      walker = walker.next;
    }

    return rst + '[end]';
  }
}

export { LinkedList };
