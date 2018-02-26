'use strict';

const Hash = require('../lib/hashTable');
require('jest');

let test = {key: 'tim', val: '1'};
let test1 = {key: 'heath', val: '22'};
let test2 = {key: 'sara', val: '333'};

describe('Remove Method', () => {
  let hashTable = new Hash(5);
  hashTable.set(test.key, test.val);
  hashTable.set(test1.key, test1.val);
  hashTable.set(test2.key, test2.val);

  describe('Valid Input', () => {
    it('should remove the item from the table', () => {
      hashTable.remove('tim');
      expect(hashTable.get('tim')).toMatch('Item is not found in HashTable');
    });
    it('should remove pointer reference in linked list', () => {
      hashTable.remove('sara');
      expect(hashTable.memory[2].head.next).toBeNull();
    });
  });


  describe('Invalid input', () => {
    it('should return an error if no key is provided', () => {
      expect(hashTable.remove()).toMatch('No Key entered');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.remove(1)).toMatch('Key must be a string only!');
    });
    it('should return error if key does not exist in table', () => {
      expect(hashTable.remove('testings')).toMatch('Item is not found in HashTable');
    });
  });
});