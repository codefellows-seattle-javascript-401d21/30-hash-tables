'use strict';


const HashTable = require('./lib/hashTable');

let hashTable = new HashTable(5);

let test = {key: 'tim', val: '1'};
let test1 = {key: 'heath', val: '22'};
let test2 = {key: 'sara', val: '333'};


hashTable.set(test.key, test.val);
hashTable.set(test1.key, test1.val);
hashTable.set(test2.key, test2.val);


console.log('remove test1:', hashTable.remove(test1.key));
console.log('remove test2:', hashTable.remove(test2.key));
console.log('get test:', hashTable.get(test.key));
console.log('get test2:', hashTable.get(test2.key));
console.log('hash table with only test left:', hashTable.memory);
