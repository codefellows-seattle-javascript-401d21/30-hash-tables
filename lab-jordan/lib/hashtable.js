'use strict'

const SLL = require('./sll.js');

const HashTable = module.exports = class {
  constructor (size=100) {
    this.size = size;
    this.memory = [...Array(this.size)];
  }
  hashKey (key) {
    let hash = key.split('').reduce((a, b) => a + (b.charCodeAt(0) - 96), 0) % this.size;
    return hash;
  }
  set (key, value) {
    let address = this.hashKey(key)
    this.memory[address]
      ? this.memory[address].insert(value)
      : this.memory[address] = new SLL (value);
  }
  get (key) {
    let address = this.hashKey(key)
    return this.memory[address] || null;
  }
  remove (key) {
    let address = this.hashKey(key)
    return this.memory[address]
      ? delete this.memory[address]
      : null
  }
}
