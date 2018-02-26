'use strict';

const Hash = require('../lib/hashTable');
require('jest');

let test = {key: 'tim', val: '1'};
let test1 = {key: 'tim', val: '22'};


describe('Set Method', () => {
  let hashTable = new Hash(5);
  hashTable.set(test.key, test.val);


  describe('Valid input', () => {
    it('see if an object was made.', () => {
      expect(hashTable.memory[0]).toBeInstanceOf(Object);
    });
    it('check to see if the item was stored in the hashtable', () => {
      expect(hashTable.memory[0].head.value).toBe('1');
    });
    it('and a node to a SLL if a collision occurs', () => {
      hashTable.set(test1.key, test1.val);
      expect(hashTable.memory[0].head.next.value).toBe('22');
    });
  });


  describe('Invalid input', () => {
    it('should return an error if no key or value is passed', () => {
      expect(hashTable.set('testing')).toMatch('No value Entered');
    });
    it('should return an error if no arguments are passed', () => {
      expect(hashTable.set()).toMatch('No Key entered');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.set(1)).toMatch('No value Entered');
    });
  });
});