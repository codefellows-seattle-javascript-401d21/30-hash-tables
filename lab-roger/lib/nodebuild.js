'use strict';

class Node {
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;