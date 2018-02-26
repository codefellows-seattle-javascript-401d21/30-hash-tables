
'use strict';

const Hash = require('../lib/hashTable');

require('jest');

let test = {key: 'tim', val: '1'};
let test1 = {key: 'heath', val: '22'};
let test2 = {key: 'sara', val: '333'};


describe('HashKey testing to see if it works', () => {
  let hashTable = new Hash(5);

  describe('Valid input', () => {
    it('should create a number representing the key', () => {
      expect(hashTable.hashKey(test.key)).toEqual(0);
      expect(hashTable.hashKey(test1.key)).toEqual(2);
      expect(hashTable.hashKey(test2.key)).toEqual(3);
    });
  });
  describe('Invalid input', () => {
    it('should return an error if no key is passed', () => {
      expect(hashTable.hashKey()).toMatch('No Key entered');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.hashKey(1)).toMatch('Key must be a string only!');
    });
  });
});