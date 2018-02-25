'use strict';

const SLL = require('./link');

const HashTable = module.exports = function(size=1024) {
  this.size = size;
  this.memory = [...Array(this.size)].fill(new SLL());
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  return hash;
};

HashTable.prototype.set = function(key, value) {

  let bucket = this.hashKey(key);
  this.memory[bucket].insertHead({'key': key, 'value': value});
};

HashTable.prototype.get = function(key) {
  let curr = this.memory[this.hashKey(key)].head;
  while (curr) {
    if(curr.key === key) return curr;
    curr = curr.next;
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  let curr = this.memory[this.hashKey(key)].head;
  let prev = null;
  while (curr) {
    if(curr.key === key) prev.next = curr.next;
    prev = curr;
    curr = curr.next;
  }

  return null;
};

console.log(HashTable.memory);  