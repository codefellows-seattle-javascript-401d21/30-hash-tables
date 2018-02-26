'use strict';

const HashTable = require('../lib/hash-table');

require ('jest');

describe ('hashTable get function', () => {
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
      expect(hashTable.get('pedro')).toMatchObject({ key: 'pedro', value: '66', next: null });
    });

  });

  describe('invalid input', () => {
    it('should return an error message for invalid input', () => {
      expect(hashTable.get('karne')).toEqual('Invalid key');
      expect(hashTable.get()).toEqual('Error, key is required');
      expect(hashTable.get(65)).toEqual('Error, key must be a string');
    });
  });
});
