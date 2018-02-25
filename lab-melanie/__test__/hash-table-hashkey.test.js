'use strict';

const Hash = require('../lib/hash-table');

require('jest');

let one = {
  key: 'bob',
  value: '123-456-7890',
};

let two = {
  key: 'jane',
  value: '234-567-8901',
};

describe('HashKey Method', () => {
  let hash = new Hash(5);

  describe('Valid input', () => {
    it('should create a number representing the key', () => {
      expect(hash.hashKey(one.key)).toEqual(2);
      expect(hash.hashKey(two.key)).toEqual(4);
    });
  });
  describe('Invalid input', () => {
    it('should return an error if no key is passed', () => {
      expect(hash.hashKey()).toMatch(/Error/);
    });
    it('should return an error if key is not a string', () => {
      expect(hash.hashKey(1)).toMatch(/Error/);
    });
  });
});
