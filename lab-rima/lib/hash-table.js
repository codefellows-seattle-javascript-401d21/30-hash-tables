'use strict';

const Sll = require('./sll');


const HashTable = module.exports = function(size=1024) {
  if(size <= 0){
    throw new Error('Invalid size input');
  }

  this.size = size;
  this.memory = [...Array(this.size)].fill(new Sll());
}

HashTable.prototype.hash = function(key) {
  if(typeof key !== 'string'){
    throw new Error('Invalid type of key');
  }

  let hashedKey = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  return hashedKey;
}

HashTable.prototype.set = function(key, value) {
  this.memory[this.hash(key)].insertHead({'key': key, 'val': value});
}

HashTable.prototype.get = function(key) {
  let currentNode = this.memory[this.hash(key)].head;
  while(currentNode){
    if(currentNode.value['key'] === key){
      return currentNode.value['val'];
    }
    currentNode = currentNode.next;
  }
  return null;
}

HashTable.prototype.remove = function(key) {
  let currentNode = this.memory[this.hash(key)].head;
  if(currentNode === null){
    return null;
  }
  if(currentNode.value['key'] === key){
    this.memory[this.hash(key)].head = this.memory[this.hash(key)].head.next;
    this.memory[this.hash(key)].length -= 1;
    return;
  }

  let preNode = currentNode;
  currentNode = currentNode.next;
  while(currentNode){
    if(currentNode.value['key'] === key){
      preNode.next = currentNode.next;
      this.memory[this.hash(key)].length -= 1;
      return;
    }
    preNode = currentNode;
    currentNode = currentNode.next;
  }
  return null;
}

