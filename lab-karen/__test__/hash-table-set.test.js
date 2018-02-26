'use strict';

const HashTable = require('../lib/hash-table');

require ('jest');

describe ('hashTable set function', () => {
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
    it('should store a node in a hash table', () => {
      expect(hashTable.bucket[1]).toBeInstanceOf(Object);
      expect(hashTable.bucket[1].head.value).toEqual('65');
    });

    it('should store a sll in a hash table array if there is already a value in the node', () => {
      expect(hashTable.bucket[1].head.next).toBeDefined();
    });
  });

  describe('invalid input', () => {
    it('should return an error message for invalid input', () => {
      expect(hashTable.set('three')).toEqual('Error, key and value required');
      expect(hashTable.set()).toEqual('Error, key and value required');
    });
  });
});
