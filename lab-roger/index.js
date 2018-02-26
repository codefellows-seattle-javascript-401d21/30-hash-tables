'use strict';
const hashTable = require('./lib/hash-table');

let hash_table = new hashTable(512);

console.log('the size of the hashTable is ', hash_table.memory.length);