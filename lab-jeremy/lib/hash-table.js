'use strict';
const SLL = require('./sll');

const HashTable = module.exports = function(size=1024) {
  this.size = size;
  this.memory = [...Array(this.size)]; // => [SLL, SLL, SLL]
};

HashTable.prototype.hashKey = function(key) { // returns a value for the index of correlating SLL
  if (!key) return new Error('Type Error: key required.');
  let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  return hash;
};

HashTable.prototype.set = function(key, value) {
  if (!key || !value) return new Error('Set Error: key and value required.');

  //if current location does not have a SLL, place once with the value
  if(!this.memory[this.hashKey(key)] || !this.memory[this.hashKey(key)].head) {
    this.memory[this.hashKey(key)] = new SLL();
    this.memory[this.hashKey(key)].insertHead([key, value]);
    return true;
  }

  // loop through SLL and check if key exists
  let currNode = this.memory[this.hashKey(key)].head;
  while (currNode)
  {
    // if yes return error
    if (currNode.val && currNode.val[0] === key) return new Error('Set Error: Key already exists.');
    currNode = currNode.next || null;
  }
  
  // if no insert value in the head in the form of [key, value]
  this.memory[this.hashKey(key)].insertHead([key, value]);
  return true;
};

HashTable.prototype.get = function(key) {
  if (!key) return new Error('Type Error: key required.');

  if(!this.memory[this.hashKey(key)]) return new Error('Get Error: Bucket does not exist');

  //loop through SLL at  this.memory[this.hashKey(key)] to check if key exists
  let currNode = this.memory[this.hashKey(key)].head;
  while (currNode)
  {
    // if yes return value
    if (currNode.val && currNode.val[0] === key) return currNode.val[1];
    currNode = currNode.next || null;
  }
  // if no return error

  return new Error('Get Error: Key does not exist.');
};

HashTable.prototype.remove = function(key) {
  if (!key) return new Error('Type Error: key required.');

  if(!this.memory[this.hashKey(key)]) return new Error('Remove Error: Bucket does not exist');

  // loop through SLL at this.memory[this.hashKey(key)]
  let currNode = this.memory[this.hashKey(key)].head;
  let nodeTracker = 0;
  while (currNode)
  {
    // if key is found remove node at index
    if (currNode.val && currNode.val[0] === key) this.memory[this.hashKey(key)].remove(nodeTracker);
    currNode = currNode.next || null;
    nodeTracker++;
  }

  // if no key found return error
  return new Error('Remove Error: key does not exist');
};

