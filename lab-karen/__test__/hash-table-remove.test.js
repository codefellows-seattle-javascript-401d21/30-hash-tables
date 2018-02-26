'use strict';

const HashTable = require('../lib/hash-table');

require ('jest');

describe ('hashTable remove function', () => {
  let hashTable = new HashTable(3);

  let a = {
    key: 'karen',
    value: '65',
  };

  let b = {
    key: 'pedro',
    value: '66',
  };

  hashTable.set(a.key, a.value);
  hashTable.set(b.key, b.value);

  describe('valid input', () => {
    it('should retrieve a node given a valid key', () => {
      expect(hashTable.get('karen')).toBeInstanceOf(Object);
      hashTable.remove('karen');
      expect(hashTable.get('karen')).toEqual('Invalid key');
    });

  });

  describe('invalid input', () => {
    it('should return an error message for invalid input', () => {
      expect(hashTable.remove('karne')).toEqual('Invalid key');
      expect(hashTable.remove()).toEqual('Error, key is required');
      expect(hashTable.remove(65)).toEqual('Error, key must be a string');
    });
  });
});
