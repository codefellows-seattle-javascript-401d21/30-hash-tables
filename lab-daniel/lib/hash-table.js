'use strict';

const SLL = require('./sll');


const HashTable = module.exports = function(size=1024) {
  this.size = size;
  this.buckets = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  return hash;
};
HashTable.prototype.set = function(key, val) {
  let hash = this.hashKey(key);
  this.buckets[hash]? this.buckets[hash].insertHead(key, val) : this.buckets[hash] = new SLL().insertHead(key, val);
};
HashTable.prototype.get = function(key) {
  let hash = this.hashKey(key);
  let loc = this.buckets[hash].findNodeByVal(key);
  return this.buckets[hash].findNthNode(loc);
};
HashTable.prototype.remove = function(key) {
  let hash = this.hashKey(key);
  let loc = this.buckets[hash].findNodeByVal(key);
  return this.buckets[hash].remove(loc);
};