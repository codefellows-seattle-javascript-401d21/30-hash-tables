'use strict';

const SLL = require('./link');

const HashTable = module.exports = function(size=16) {
  this.size = size;
  this.memory = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  if (typeof key !== 'string' || key === null) throw new Error;
  let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  return hash;
};

HashTable.prototype.set = function(key, value) {
  if (typeof key !== 'string' || key === null) throw new Error;
  if (this.memory[this.hashKey(key)] === undefined) this.memory[this.hashKey(key)] = new SLL;
  this.memory[this.hashKey(key)].insertHead({'key': key, 'value': value});
  return null;
};

HashTable.prototype.get = function(key) {
  if (typeof key !== 'string' || key === null) throw new Error;
  if (this.memory[this.hashKey(key)] === undefined) return null;
  let curr = this.memory[this.hashKey(key)].head;
  while (curr) {
    if(curr.value.key === key) return curr.value.value;
    curr = curr.next;
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  if (typeof key !== 'string' || key === null) throw new Error;
  if (this.memory[this.hashKey(key)] === undefined) return null;
  let curr = this.memory[this.hashKey(key)].head;
  let prev = null;
  if (curr.value.key === key) return this.memory[this.hashKey(key)].head = curr.next;
  while (curr) {
    if(curr.value.key === key) prev.next = curr.next;
    prev = curr;
    curr = curr.next;
  }

  return null;
};
