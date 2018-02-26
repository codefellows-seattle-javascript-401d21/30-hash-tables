'use strict';

const HashTable = require('../lib/hash-table');

require ('jest');

describe ('HashTable constuctor', () => {
  let hashTable = new HashTable(3);

  describe('valid input', () => {
    it('should create a hashTable', () => {
      expect(hashTable).toBeInstanceOf(Object);
      expect(hashTable.size).toEqual(3);
      expect(hashTable).toHaveProperty('size');
      expect(hashTable).toHaveProperty('bucket');
    });
  });
});
