'use strict';

const Hash = require('../lib/hashTable');

require('jest');

let test = {key: 'tim', val: '1'};
let test1 = {key: 'heath', val: '22'};
let test2 = {key: 'sara', val: '333'};

describe('GET on hashTable', () => {
  let hashTable = new Hash(5);
  hashTable.set(test.key, test.val);
  hashTable.set(test1.key, test1.val);
  hashTable.set(test2.key, test2.val);

  describe('Valid Input', () => {
    it('should return a node', () => {
      expect(hashTable.get('tim')).toBeInstanceOf(Object);
    });
    it('should return the right value of the node that was looked for', () => {
      expect(hashTable.get('heath').value).toBe('22');
    });
    it('should have placed the items in the right place in the hashtable', () => {
      expect(hashTable.memory[3].head.key).toBe('sara');
      expect(hashTable.memory[2].head.key).toBe('heath');
    });
  });


  describe('Invalid input', () => {
    it('should return an error if no key is passed', () => {
      expect(hashTable.get()).toMatch('No Key entered');
    });
    it('should return an error if key is not found in table', () => {
      expect(hashTable.get('testing')).toMatch('Item is not found in HashTable');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.get(23423423)).toMatch('Key must be a string only!');
    });
  });
});