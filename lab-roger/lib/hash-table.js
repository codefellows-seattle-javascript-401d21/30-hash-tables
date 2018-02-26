

'use strict';
const Sll = require('./sll');

const hashTable = module.exports = function(size=1024) {
  this.size = size;
  this.memory = [...Array(this.size)]; 


};
// creates a hashed value for the address in the hash table
hashTable.prototype.hashKey = function(key) {
  if(typeof key !== 'string' || !key) return new Error('There needs to be a string key');
  let hashKey = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
  
  console.log('hashKey in proto', hashKey);
  return hashKey;
};
//this finds the bucket in the hashtable and if there is no SLL in that position creates one, 
//else insert the new key and value at the head of the SLL
hashTable.prototype.set = function (key, value) {
  if(typeof key !== 'string' || !key || !value) return new Error('There needs to be a string key');
  let hashKey = this.hashKey(key);
  if(!this.memory[hashKey]) {
    this.memory[hashKey] = new Sll();
    this.memory[hashKey].createHeadNode(key, value);
    return 'Item Added';
  } else {
    if(this.memory[hashKey].findNode(key)) return new Error('this key already exists');
    this.memory[hashKey].createHeadNode(key, value);
    return 'item added.1.';
  }
  
};
//Get the value of the key if it exists.
hashTable.prototype.get = function (key) {
  if(typeof key !== 'string' || !key) return new Error('There needs to be a string key');
  let hashKey = this.hashKey(key);
  if(!this.memory[hashKey] || !this.memory[hashKey].findNode(key)) return new Error('This item does not exist');
  return this.memory[hashKey].findNode(key);

};
// this removes the key, value from the hash table if it exists.
hashTable.prototype.remove = function (key) {
  if(typeof key !== 'string' || !key) return new Error('There needs to be a string key');
  let hashKey = this.hashKey(key);
  if(!this.memory[hashKey] || !this.memory[hashKey].findNode(key)) {
    return new Error('Cannot remove this item does not exist');
  }
  let result = this.memory[hashKey].removeNode(key);
  return 'item removed';

};





