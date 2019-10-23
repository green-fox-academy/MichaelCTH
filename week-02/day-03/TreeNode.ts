class Node {
  value: string;
  left: Node;
  right: Node;

  constructor(value: string, left?: Node, right?: Node) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export { Node };