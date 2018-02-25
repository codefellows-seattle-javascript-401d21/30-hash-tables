'use strict';

const HashTable = require('./lib/hash-table');

let hashTable = new HashTable(3);

let one = {
  key: 'bob',
  value: '123-456-7890',
};

let two = {
  key: 'jane',
  value: '234-567-8901',
};

let three = {
  key: 'bob',
  value: '345-678-9012',
};

hashTable.set(one.key, one.value);
hashTable.set(two.key, two.value);
hashTable.set(three.key, three.value);

console.log(hashTable.memory);
