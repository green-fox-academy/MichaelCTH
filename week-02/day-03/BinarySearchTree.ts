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

  add(value: string): void {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let pre = null;
    let temp = this.root;
    while (temp) {
      pre = temp;
      if (value > temp.value) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }

    if (value > temp.value) {
      temp.right = new Node(value);
    } else {
      temp.left = new Node(value);
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
    let pre = null;
    let temp = this.root;
    while (temp) {
      if (temp.value === value) {
        let newVal;
        if (temp.left) {
          newVal = this.findMax(temp.left);
        } else if (temp.right) {
          newVal = this.findMin(temp.right);
        } else {
          if (value > pre.value) {
            pre.right = null;
          } else {
            pre.left = null;
          }
        }
        this.remove(newVal);
        temp.value = newVal;
      }

      pre = temp;
      if (value > temp.value) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }
  }

  search(value: string): boolean {
    let temp = this.root;
    while (temp) {
      if (temp.value === value) {
        return true;
      }

      if (value > temp.value) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }

    return false;
  }
}
