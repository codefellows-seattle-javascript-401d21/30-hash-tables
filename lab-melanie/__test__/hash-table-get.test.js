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

let three = {
  key: 'aa',
  value: '345-678-9012',
};

describe('Get Method', () => {
  let hash = new Hash(5);
  hash.set(one.key, one.value);
  hash.set(two.key, two.value);
  hash.set(three.key, three.value);

  describe('Valid Input', () => {
    it('should return a node', () => {
      expect(hash.get('aa')).toBeInstanceOf(Object);
    });
    it('should return the node representing the key', () => {
      expect(hash.get('aa').value).toBe('345-678-9012');
    });
    it('should iterate through a linked list to find the key', () => {
      expect(hash.memory[4].head.key).toBe('jane');
      expect(hash.memory[4].head.next.key).toBe('aa');
    });
  });
  describe('Invalid input', () => {
    it('should return an error if no key is passed', () => {
      expect(hash.get()).toMatch(/Error/);
    });
    it('should return an error if key is not found in table', () => {
      expect(hash.get('hello')).toMatch(/Error/);
    });
    it('should return an error if key is not a string', () => {
      expect(hash.get(1)).toMatch(/Error/);
    });
  });
});
