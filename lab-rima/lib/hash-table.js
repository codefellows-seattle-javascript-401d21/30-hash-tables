'use strict';

const Sll = require('./sll');


const HashTable = module.exports = function(size=1024) {
  this.size = size;
  this.memory = [...Array(this.size)].fill(new Sll());
}

HashTable.prototype.hash = function(key) {
  let hashedKey = key.split('').reduce((a, b) => a + b.charCodeAt(0)) % this.size;
  return hashedKey;
}

HashTable.prototype.set = function(key, value) {
  this.memory[this.hash(key)] = value;
}

HashTable.prototype.get = function(key) {
  return this.memory[this.hash(key)];
}

HashTable.prototype.remove = function(key) {
  let pos = this.hash(key);

  return this.memory[pos] ? delete this.memory[pos] : new Error('Invalid Key');
}


