'use strict';

function Nd(value) {
  this.value = value;
  this.next = null;
}

class SLL {
  constructor() {
    this.head = null;
  }

  insertEnd(value) { // Big O: best case O(1) if no other node exists, worst case O(n), iterates to end of list before creating
    if(!value) return null;
    let nd = new Nd(value);
    if(!this.head) {
      this.head = nd;
      this.listLength ++;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    // this.listLength ++;
    return this;
  }
}

module.exports = SLL;
