'use strict';

const Node = class {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class SLL {
  constructor (value) {
    this.head = new Node (value) || null;
  }

  insert (value) {
    if (value === null) return null;

    let newNode = new Node (value);

    if (this.head === null) {
      this.head = newNode;
      return this;
    }

    for (var currentNode = this.head; currentNode.next; currentNode = currentNode.next);

    currentNode.next = newNode;
    return this;
  }

  remove (offset) {
    let currentNode = this.head;
    let previousNode = null;
    while (offset > 0) {
      if (currentNode === null) {
        return null;
      }
      offset--;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (this.head === currentNode) {
      this.head = currentNode.next;
      currentNode.next = null;
      return this;
    }
    previousNode.next = currentNode.next;
    currentNode.next = null;
    return this;
  }

}
