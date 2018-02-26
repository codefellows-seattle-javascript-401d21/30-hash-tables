'use strict';

const HashTable = require('../lib/hash.js');
const SLL = require('../lib/sll');
require('jest');

describe('HashTable', () => {
  it('should return with a new instance of the hashtable', () => {
    expect(new HashTable()).toBeInstanceOf(HashTable);
  });

  it('should have a default size of 1024', () => {
    let hashTest = new HashTable();
    expect(hashTest.size).toEqual(1024);
  });

  it('should return a numerical value', () => {
    let hashTest = new HashTable(99);
    let hash = hashTest.hashKey('foo');
    expect(typeof hash === 'number').toBe(true);
  });

  it('should return a hash between 0-99', () => {
    let hashTest = new HashTable(99);
    let hash = hashTest.hashKey('foo');
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(99);
  });

  it('should return the value of the same hashkey', () => {
    let hashTest = new HashTable(99);
    let hash = hashTest.hashKey('foo');
    let hash2 = hashTest.hashKey('foo');
    expect(hash).toEqual(hash2);
  });

  it('should return null when no ele exists', () => {
    let hashTest = new HashTable();
    expect(hashTest.get('test')).toBe(null);
  });
});
