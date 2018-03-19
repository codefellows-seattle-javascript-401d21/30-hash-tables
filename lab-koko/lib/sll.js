'use strict';

const Node = require('./node.js');

class SLL {
  constructor() {
    this.head = null;
  }
  insertHead(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    return this;
  }
  insertEnd(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = node;
    return this;
  }
  remove(offset) {
    let curr = this.head;
    let prev = null;
    while(offset !== 0){
      offset--;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    curr.next = null;
    return this;
  }
  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;
    while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
  }
}

module.exports = SLL;