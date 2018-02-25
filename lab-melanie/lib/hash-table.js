'use strict';

class HashTable {
  constructor(size) {
    this.size = size || 100;
    this.memory = [...Array(this.size)];
  }

  hashKey(key) {
    let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
    return hash;
  }

  set(key, value) {

  }

  get(key) {

  }

  remove(key) {

  }
}

module.exports = HashTable;
