class Node {
  value: string;
  next: Node;

  constructor(value: string, next: Node = null) {
    this.value = value;
    this.next = next;
  }
}

export { Node };
