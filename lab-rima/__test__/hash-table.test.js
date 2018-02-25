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

    test('Invalid input: should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.hash(0)).toThrow('Invalid type of key');
    });
  });

  describe('set function', function(){
    test('Valid input: should store a value under key', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 'value');

      expect(hash_table.memory[hash_table.hash('key')].head.value).toEqual({'key': 'key', 'val': 'value'});
    });

    test('Invalid input: should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.set(0, 'value')).toThrow('Invalid type of key');
    });
  });

  describe('get function', function(){
    test('Valid input: should return a value', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 10);

      expect(hash_table.get('key')).toEqual(10);
    });

    test('Invalid input: should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.get(0)).toThrow('Invalid type of key');
    });

    test('Non existing key: should return null', () => {
      const hash_table = new HashTable();

      expect(hash_table.get('non existing')).toBeNull();
    });
  });

  describe('remove function', function(){
    test('Valid input: should remove a node from sll (no collision)', () => {
      const hash_table = new HashTable();
      hash_table.set('key', 100);
      hash_table.remove('key');

      expect(hash_table.get('key')).toBeNull();
      expect(hash_table.memory[hash_table.hash('key')]).toEqual(new Sll());
    });

    test('Valid input: should remove a node from sll (collision)', () => {
      const hash_table = new HashTable();
      hash_table.memory[0].insertHead({'key': 'one', 'val': 'ONE'});
      hash_table.memory[0].insertHead({'key': 'two', 'val': 'TWO'});
      hash_table.memory[0].insertHead({'key': 'three', 'val': 'THREE'});
      hash_table.remove('two');

      expect(hash_table.memory[0].head.value).toEqual({'key': 'three', 'val': 'THREE'});
      expect(hash_table.memory[0].head.next.value).toEqual({'key': 'one', 'val': 'ONE'});
    });

    test('Invalid input: should throw an error with an invalid type of key', () => {
      const hash_table = new HashTable();

      expect(() => hash_table.remove(0)).toThrow('Invalid type of key');
    });

    test('Non existing key: should return null', () => {
      const hash_table = new HashTable();

      expect(hash_table.remove('non existing')).toBeNull();
    });
  });

});
