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

describe('Remove Method', () => {
  let hash = new Hash(5);
  hash.set(one.key, one.value);
  hash.set(two.key, two.value);
  hash.set(three.key, three.value);

  describe('Valid Input', () => {
    it('should remove a node from memory', () => {
      expect(hash.get('bob').value).toBe('123-456-7890');
      hash.remove('bob');
      expect(hash.get('bob')).toMatch(/Error/);
    });
    it('should remove pointer reference in linked list', () => {
      expect(hash.memory[4].head.next.key).toBe('aa');
      hash.remove('aa');
      expect(hash.memory[4].head.next).toBeNull();
    });
  });
  describe('Invalid input', () => {
    it('should return an error if no key is provided', () => {
      expect(hash.remove()).toMatch(/Error/);
    });
    it('should return an error if key is not a string', () => {
      expect(hash.remove(1)).toMatch(/Error/);
    });
    it('should return error if key does not exist in table', () => {
      expect(hash.remove('hello')).toMatch(/Error/);
    });
  });
});
