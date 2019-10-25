import { ITree } from './interface';
import { Node } from './TreeNode';

// TODO: Deletion is implemented, but is not fully tested yet.

// BinarySearchTree
class BinaryTree implements ITree {
  root: Node;

  constructor() {
    this.root = null;
  }

  empty(): boolean {
    return this.root === null;
  }

  getDepth(node: Node) {
    if (!node) {
      return 0;
    }
    return 1 + Math.max(this.getDepth(node.left), this.getDepth(node.right));
  }

  add(value: string): void {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    this.addRecursion(value, this.root);
  }

  addRecursion(value: string, node: Node): void {
    if (!node.left || !node.right) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        node.right = new Node(value);
      }
      return;
    }

    let left = this.getDepth(node.left);
    let right = this.getDepth(node.right);
    if (left > right) {
      return this.addRecursion(value, node.right);
    } else {
      return this.addRecursion(value, node.left);
    }
  }

  searchParentCandidate(value: string): Node {
    let pre = null, temp = this.root;
    while (temp) {
      pre = temp;
      temp = (value > temp.value) ? temp.right : temp.left;
    }
    return pre;
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

  delete(value: string): void {
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

  remove(value: string): void {
    if (!this.search(value)) {
      return;
    }

    this.delete(value);
  }

  search(value: string): boolean {
    return this.searchRecursion(value, this.root);
  }

  searchRecursion(value: string, node: Node): boolean {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    return this.searchRecursion(value, node.left) || this.searchRecursion(value, node.right);
  }
}
