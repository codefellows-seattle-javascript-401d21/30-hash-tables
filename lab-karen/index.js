'use strict';

const HashTable = require('./lib/hash-table');

let hashTable = new HashTable(3);

hashTable.set('address', 'content');
hashTable.set('yek', 'value');

console.log('hashTable', hashTable.bucket);

console.log('get key from table: ', hashTable.get('address'));

hashTable.remove('address');

console.log('key removed from table: ', hashTable.bucket);

hashTable.set('address', 'content');

console.log('added back', hashTable.bucket);
