'use strict';

class Pair {
  constructor(key, value) {
    if (!key || typeof key !== 'string') throw new Error(`invalid key ${key}`);

    this.key = key;
    this.value = value;
  }
}

// Hashtable implementation
module.exports = class {
  constructor(size = 1024) {
    if (typeof size !== 'number')
      throw new Error(`invalid size ${size}`);
    if (size <= 0) throw new Error(`invalid size value ${size}`);

    // Allocate storage
    this.bucket = Array(size).fill(null);
    this.size = size;
  }

  _hash(key) {}

  get(key) {}

  set(key, value) {}

  remove(key) {}
};
