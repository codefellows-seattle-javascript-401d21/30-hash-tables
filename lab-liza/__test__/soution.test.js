'use strict';

const HashTable = require('../lib/hash.js');
const SLL = require('../lib/sll');
require('jest');

describe('HashTable', () => {
  describe('#hashtable', () => {
    it('should return with a new instance of the hashtable', () => {
      expect(new HashTable()).toBeInstanceOf(HashTable);
    });
    it('should have a default size of 1024', () => {
      let hashTable = new HashTable();
      expect(hashTable.size).toEqual(1024);
    });
  });
});