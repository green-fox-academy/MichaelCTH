import { ITree } from './interface';
import { Node } from './TreeNode';

class BinaryTree implements ITree {
  root: Node;

  constructor() {
    this.root = null;
  }

  empty(): boolean {
    return this.root === null;
  }

  add(value: string): void {
    throw new Error("Method not implemented.");
  }

  remove(value: string): void {
    throw new Error("Method not implemented.");
  }

  search(value: string): boolean {
    throw new Error("Method not implemented.");
  }
}
