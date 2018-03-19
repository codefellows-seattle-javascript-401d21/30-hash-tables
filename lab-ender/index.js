'use strict';

const HashTable = require('./lib/hash-table');

const myTable = new HashTable(10);

myTable.set('key1', 'val1');
myTable.get('key1');
myTable.remove('key1');
