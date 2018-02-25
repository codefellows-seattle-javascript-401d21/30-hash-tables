'use strict';

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

class SLL {
  constructor() {
    this.head = null;
  }

  insertEnd(key, value) { // Big O: best case O(1) if no other node exists, worst case O(n), iterates to end of list before creating
    if(!value) return null;
    if(!key) return null;
    let node = new Node(key, value);
    if(!this.head) {
      this.head = node;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = node;
    // this.listLength ++;
    return this;
  }
}

module.exports = SLL;
