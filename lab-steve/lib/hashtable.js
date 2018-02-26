'use strict';

const SLL = require('./sll');

class HashNode {
  constructor(key, value) {
    if (!key || typeof key !== 'string') throw new Error(`invalid key ${key}`);

    this.key = key;
    this.value = value;
  }
}

// Hash table implementation
module.exports = class {
  constructor(size = 1024) {
    if (typeof size !== 'number')
      throw new Error(`invalid size ${size}`);
    if (size <= 0) throw new Error(`invalid size value ${size}`);

    // Allocate storage
    this.bucket = Array(size).fill(null);
    this.size = size;
  }

  _hash(key) {
    if (typeof key !== 'string' || !key) throw new Error(`invalid key ${key}`);

    let hash = key.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);

    // return a bucket index
    return hash % this.size;
  }

  get(key) {
    let hash = this._hash(key);

    // The bucket doesn't even exist
    if (!this.bucket[hash])
      return null;

    // A bucket exists, see if the HashNode can be found
    let node = this.bucket[hash].find(item => item.key === key);

    // If the node was found, return the value, otherwise null
    return node ? node.value : null;
  }

  set(key, value) {
    let hash = this._hash(key);

    // conditionally create a new sll
    if (!this.bucket[hash])
      this.bucket[hash] = new SLL();

    this.bucket[hash].insert(new HashNode(key, value));
  }

  remove(key) {}
};
