'use strict';

const SLL = require('./sll.js');

const HashTable = module.exports = function(size=1024) {
  this.size = size;
  this.memory = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  return hash;
};

HashTable.prototype.set = function(key, val) {
  let hash = this.hashKey(key);

  if(!this.memory[hash]) this.memory[hash] = new SLL();

  let node = null;
  if (this.memory[hash].length) {
    node = this.memory[hash].find(ele => ele.key === key);
  }

  if (node) node.val = val;
  else this.memory[hash].insert(new HashTable(key, val));
};

HashTable.prototype.get = function(key) {
  let hash = this.hashKey(key);

  if (!this.memory[hash]) return null;

  let node = this.memory[hash].find(ele => ele.key === key);

  return node ? node.val : null;
};

HashTable.prototype.remove = function(key) {
  let hash = this.hashKey(key);

  if (!this.memory[hash]) return;

  return this.memory[hash] ? delete this.memory[hash] : new Error('Invalid Key.');
};