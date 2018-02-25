'use strict';

class Node {
  constructor(val) {
    if (!val) throw new Error('Not a valid value');

    this.val = val;
    this.next = null;
  }
}

module.exports = Node;

