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
  key: 'bob',
  value: '345-678-9012',
};

describe('Set Method', () => {
  let hash = new Hash(5);
  hash.set(one.key, one.value);
  describe('Valid input', () => {
    it('should create a node and set in memory', () => {
      expect(hash.memory[2]).toBeInstanceOf(Object);
    });
    it('should store the key and value in the indexed memory', () => {
      expect(hash.memory[2].head.value).toBe('123-456-7890');
    });
    it('should create a singly linked list if collision occurs', () => {
      hash.set(three.key, three.value);
      expect(hash.memory[2].head.next.value).toBe('345-678-9012');
    });
    it('if key does not exist in table, it should add it', () => {
      expect(hash.memory[4]).toBeFalsy();
      hash.set(two.key, two.value);
      expect(hash.memory[4]).toBeTruthy();
    });
  });
  describe('Invalid input', () => {
    it('should return an error if no key or value is passed', () => {
      expect(hash.set('hello')).toMatch(/Error/);
    });
    it('should return an error if no arguments are passed', () => {
      expect(hash.set()).toMatch(/Error/);
    });
    it('should return an error if key is not a string', () => {
      expect(hash.set(1)).toMatch(/Error/);
    });
  });
});
