import { ITree } from './interface';
import { Node } from './TreeNode';

class BinarySearchTree implements ITree {
  root: Node;

  constructor() {
    this.root = null;
  }

  empty(): boolean {
    return this.root === null;
  }

  searchParentCandidate(value: string): Node {
    let pre = null, temp = this.root;
    while (temp) {
      pre = temp;
      temp = (value > temp.value) ? temp.right : temp.left;
    }
    return pre;
  }

  add(value: string): void {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let pre = this.searchParentCandidate(value);
    if (value > pre.value) {
      pre.right = new Node(value);
    } else {
      pre.left = new Node(value);
    }
  }

  findMax(node: Node): string {
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }

  findMin(node: Node): string {
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  remove(value: string): void {
    if (!this.search(value)) {
      return;
    }

    let pre = this.searchParentCandidate(value);
    let target = (value > pre.value) ? pre.right : pre.left;
    let newVal;
    if (target.left) {
      newVal = this.findMax(target.left);
    } else if (target.right) {
      newVal = this.findMin(target.right);
    } else {
      if (value > pre.value) {
        pre.right = null;
      } else {
        pre.left = null;
      }
      return;
    }
    this.remove(newVal);
    target.value = newVal;
  }

  search(value: string): boolean {
    let temp = this.root;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      temp = (value > temp.value) ? temp.right : temp.left;
    }

    return false;
  }
}
