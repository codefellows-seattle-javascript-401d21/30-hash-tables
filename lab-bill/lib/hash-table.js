'use strict';

const SLL = require('./link');

const HashTable = module.exports = function(size=16) {
  this.size = size;
  this.memory = [...Array(this.size)].fill(new SLL());
};

HashTable.prototype.hashKey = function(key) {
  if (typeof key !== 'string' || key === null) throw new Error;
  let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  console.log(hash);
  return hash;
};

HashTable.prototype.set = function(key, value) {
  if (typeof key !== 'string' || key === null) throw new Error;
  let bucket = this.hashKey(key);
  console.log(bucket);
  console.log(this.memory[bucket]);
  this.memory[bucket].insertHead({'key': key, 'value': value});
  return null;
};

HashTable.prototype.get = function(key) {
  if (typeof key !== 'string' || key === null) throw new Error;
  let curr = this.memory[this.hashKey(key)].head;
  while (curr) {
    if(curr.value.key === key) return curr.value.value;
    curr = curr.next;
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  if (typeof key !== 'string' || key === null) throw new Error;
  let curr = this.memory[this.hashKey(key)].head;
  let prev = null;
  console.log(curr);
  if (curr.key === key) curr = curr.next;
  while (curr) {
    if(curr.key === key) prev.next = curr.next;
    prev = curr;
    curr = curr.next;
  }

  return null;
};

let test = new HashTable;
test.set('a', 'a');
test.set('b', 'b');
test.set('c', 'c');
test.set('d', 'd');
test.get('a');
console.log(test.memory[0]);
console.log(test.memory[1]);
console.log(test.memory[2]);
console.log(test.memory[3]);
console.log(test.memory[4]);
console.log(test.memory[5]);
console.log(test.memory[6]);
console.log(test.memory[7]);
// console.log(test.memory[6]);  