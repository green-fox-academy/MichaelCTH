interface ILinkedList {
  add(value: string, index?: number): void;
  get(index: number): string;
  removeItem(value: string): void;
  remove(index: number): string;
  size(): number;
}

interface IStack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

interface IQueue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

interface ITree {
  empty(): boolean;
  add(value: string): void;
  remove(value: string): void;
  search(value: string): boolean
}

export { ILinkedList, IStack, IQueue, ITree };
