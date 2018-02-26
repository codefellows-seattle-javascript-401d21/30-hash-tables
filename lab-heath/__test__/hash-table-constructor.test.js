'use strict';

const Hash = require('../lib/hashTable');
require('jest');

describe('HashTable Constructor', () => {
  let hash = new Hash(5);

  it('should create a table with memory index of 5', () => {
    expect(hash.memory.length).toEqual(5);
  });
  it('should create an object with size and memory properties', () => {
    expect(hash).toHaveProperty('size');
    expect(hash).toHaveProperty('memory');
  });
});
