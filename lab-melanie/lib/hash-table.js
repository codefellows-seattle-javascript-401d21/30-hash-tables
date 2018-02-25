'use strict';

const SLL = require('./sll');

class HashTable {
  constructor(size) {
    this.size = size || 5; //
    this.memory = [...Array(this.size)];
  }

  hashKey(key) {
    // -- convert string to number -- //
    let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;

    // -- return number representing string value -- //
    return hash;
  }

  set(key, value) {
    // -- validate -- //
    if(!key) return 'Error, key missing';
    if(!value) return 'Error, value missing';

    let index = this.hashKey(key);
    let sll = new SLL();

    // -- set key/value to index or add to linked list if collision -- //
    !this.memory[index] ?
      this.memory[index] = sll.insertEnd(key, value) :
      this.memory[index].insertEnd(key, value);
  }

  get(key) {
    // -- validate -- //
    if(!key) return 'Error, key missing';

    let index = this.memory[this.hashKey(key)];
    if(!index) return 'Error, this key does not exist in table';

    // -- reference to current node -- //
    let curr = index.head;
    // -- iterate through list until key is located -- //
    while(curr) {
      if(curr.key === key) return curr; // return node with key-value pair
      curr = curr.next;
    }
  }

  remove(key) {
    // -- validate -- //
    if(!key) return 'Error, key missing';

    let index = this.memory[this.hashKey(key)];
    if(!index) return 'Error, this key does not exist in table';

    let prev;
    let curr = index.head;

    // -- if node is only one in memory's index -- //
    if(!curr.next) delete index.head;

    // iterate through list and remove reference to node
    while(curr.next) {
      prev = curr;
      curr = curr.next;
      if(curr.key === key) {
        prev.next = curr.next;
      }
    }
  }
}

module.exports = HashTable;
