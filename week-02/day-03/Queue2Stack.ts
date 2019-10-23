import { Stack } from './StackNode';
import { IQueue } from "./interface";

class Queue implements IQueue {
  inStack: Stack;
  outStack: Stack;

  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  in2out() {
    while (!this.inStack.empty()) {
      this.outStack.push(this.inStack.pop());
    }
  }

  empty(): boolean {
    return this.inStack.empty() && this.outStack.empty();
  }

  peek(): string {
    if (this.outStack.empty()) {
      this.in2out();
    }

    return this.outStack.peek();
  }

  add(value: string): void {
    this.inStack.push(value);
  }

  remove(): string {
    if (this.outStack.empty()) {
      this.in2out();
    }

    return this.outStack.pop();
  }
}
