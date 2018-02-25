'use strict';

const Hash = require('../lib/hash-table');

require('jest');

describe('HashTable Constructor', () => {
  let hash = new Hash(20);

  it('should create a table with memory of 20 indexes', () => {
    expect(hash.memory.length).toEqual(20);
  });
  it('should create an object with size and memory properties', () => {
    expect(hash).toHaveProperty('size');
    expect(hash).toHaveProperty('memory');
  });
});

