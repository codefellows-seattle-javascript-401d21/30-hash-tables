'use strict';

const Sll = require('../lib/sll');
const HashTable = require('../lib/hash-table');


describe('Hash table module', () => {

  describe('constructor', function(){
    test('should create an instance of hash table', () => {
      const hash_table = new HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
      expect(hash_table.memory[0] instanceof Sll).toEqual(true);
    });
  });

  describe('hash function', function(){
    test('Valid input: should return a number within its size', () => {
      const hash_table = new HashTable();
      const hashedKey = hash_table.hash('key');

      expect(0 <= hashedKey < hash_table.size).toBe(true);
    });

    test('Invalid input: should throw an error', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.hash(0)).toThrow('Invalid type of key');
    });
  });

  describe('set function', function(){
    test('Valid input: should store a value under key', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 'value');

      expect(hash_table.memory[hash_table.hash('key')].head.value).toEqual('value');
    });

    test('Invalid input: should throw an error with an invalid key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.set(0, 'value')).toThrow('Invalid type of key');
    });
  });

  describe('get function', function(){
    test('should create an instance of hash table', () => {
      const hash_table = new HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
    });
  });

  describe('remove function', function(){
    test('should create an instance of hash table', () => {
      const hash_table = new HashTable();

      expect(hash_table.size).toEqual(1024);
      expect(hash_table.memory.length).toEqual(1024);
    });
  });

});
