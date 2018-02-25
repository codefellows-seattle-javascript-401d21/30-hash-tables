'use strict';

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(key, value) {
    let nd = new Node(key, value, this.head);
    this.head = nd;
    return this;
  }

  insertTail(key, value) {
    let nd = new Node(key, value);
    if (!this.head) {
      this.head = nd;
      return this;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = nd;
    return this;
  }
}

module.exports = SLL;