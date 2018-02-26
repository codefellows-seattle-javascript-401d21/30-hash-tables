'use strict';

const HashTable = require('../lib/hash-table');

require ('jest');

describe ('HashTable hashKey function', () => {
  let hashTable = new HashTable(3);

  let a = {
    key: 'karen',
    value: '65',
  };

  let c = {
    key: 'max',
    value: '2',
  };

  let num = {
    key: 1,
    value: 1,
  };

  describe('valid input', () => {
    it('should create a repeatable hash key for a given input', () => {
      expect(hashTable.hashKey(a.key)).toEqual(1);
      expect(hashTable.hashKey(c.key)).toEqual(2);
    });
  });

  describe('invalid input', () => {
    it('should return an error message for invalid input', () => {
      expect(hashTable.hashKey(num.key)).toEqual('Error, key must be a string');
      expect(hashTable.hashKey()).toEqual('Error, key is required');
    });
  });
});
