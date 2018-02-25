'use strict';

const HashTable = require('../lib/hash-table');


describe('Hash table module', () => {

  describe('constructor', function(){
    test('should create an instance of hash table', () => {
      const hash_table = new HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
    });
  });

  describe('hash function', function(){
    test('should create an instance of hash table', () => {
      const hash_table = HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
    });
  });

  describe('set function', function(){
    test('should create an instance of hash table', () => {
      const hash_table = HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
    });
  });

  describe('get function', function(){
    test('should create an instance of hash table', () => {
      const hash_table = HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
    });
  });

  describe('remove function', function(){
    test('should create an instance of hash table', () => {
      const hash_table = HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
    });
  });

});
