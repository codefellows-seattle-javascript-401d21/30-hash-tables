'use strict';

const SLL = require('./link');

const HashTable = module.exports = function(size=16) {
  this.size = size;
  this.memory = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  if (typeof key !== 'string' || key === null) throw new Error;
  let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  console.log(hash);
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
  console.log(curr);
  if (curr.value.key === key) this.memory[this.hashKey(key)].head = curr.next;
  while (curr) {
    if(curr.key === key) prev.next = curr.next;
    prev = curr;
    curr = curr.next;
  }

  return null;
};

// let test = new HashTable;
// console.log(test);
// test.set('a', 'a');
// test.set('b', 'b');
// test.set('c', 'c');
// test.set('d', 'd');
// console.log(test);
// console.log(test.memory[2]);
// // test.get('a');
// // console.log(test.memory[0]);
// // console.log(test.memory[1]);
// // console.log(test.memory[2]);
// // console.log(test.memory[3]);
// // console.log(test.memory[4]);
// // console.log(test.memory[5]);
// // console.log(test.memory[6]);
// // console.log(test.memory[7]);
// // console.log(test.memory[6]);  
// let link = new SLL;
// link.insertHead(1);
// link.insertHead(2);
// link.insertHead(3);
// link.insertHead(4);
// console.dir(link, {depth: null});