'use strict';

const HashTable = require('../lib/hash-table');
require('jest');

describe('hashtable', () => 
{
  let table = new HashTable;
  describe('hash key', () => {
    it('should return the hash key', () => {
      expect(table.hashKey('a')).toEqual(1);
      expect(table.hashKey('b')).toEqual(2);
    });
    it('should throw if not a string', () => {
      expect(() => table.hashKey(123)).toThrow();
    });
    it('should throw if null', () => {
      expect(() => table.hashKey()).toThrow();
    });
  });
  describe('SET', () => {
    it('should return null', () => {
      expect(table.set('a','a')).toBe(null);
    });
    it('should add a node to the correct bucket', () => {
      table.set('b','kappa');
      expect(table.memory[2].head.value.value).toEqual('kappa');
    });
    it('should throw if null', () => {
      expect(() => table.set()).toThrow();
    });
  });
  describe('GET', () => {
    it('should return null if the node is empty', () => {
      expect(table.get('c')).toBe(null);
    });
    it('should return the value of the given key', () => {
      expect(table.get('b')).toEqual('kappa');
    });
    it('should throw if null', () => {
      expect(() => table.get()).toThrow();
    });
  });
  describe('REMOVE', () => {
    it('should return null if given proper input', () => {
      expect(table.remove('c')).toBe(null);
    });
    it('should remove the node at the given key', () => {
      table.remove('b');
      expect(table.memory[2].head).toBe(null);
    });
    it('should throw if null', () => {
      expect(() => table.remove()).toThrow();
    });
  });
});