'use strict';

let SLL = require('./lib/sll');

const HashTable = module.exports = function(size) {
  this.size = size || 1024;
  this.buckets = [...Array(this.size)]; 
};

HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i in key) total += key.charCodeAt(i);
  return total % this.buckets.length;
};

HashTable.prototype.set = function(key, value) {
  if (!key || !value || typeof key !== 'string') return 'error';
  let index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = (new SLL).insertTail(key, value);
  else this.buckets[index].insertTail(key, value);
};

HashTable.prototype.get = function(key) {
  if (!key || typeof key !== 'string') return 'error';
  let bucket = this.buckets[this.hash(key)];
  if (!bucket) return null;
  let current = bucket.head;
  while (current) {
    if (current.key === key) return current.value;
    current = current.next;
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  if (!key || typeof key !== 'string') return 'error';
  let bucket = this.buckets[this.hash(key)];
  if (!bucket) return null;
  let current = bucket.head;
  if (!current.next) delete bucket.head;
  while (current.next) {
    let prev = current;
    current = current.next;
    if (current.key === key) prev.next = current.next;
  }
};

module.exports = HashTable;