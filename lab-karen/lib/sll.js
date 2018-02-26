'use strict';

class Nd {
  constructor (key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  insertEnd(key, value) {
    //if val is undefined then return null
    if(!value) return null;
    if(!key) return null;
    let nd = new Nd(key, value);
    //if this.head is undefined, set the new node to the head
    if(!this.head) {
      this.head = nd;
      return this;
    }
    //iterate the link list until you find the end and add the node
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }
}

module.exports = SLL;
