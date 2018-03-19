'use strict';

const HashTable = require('../lib/hashTable');
// const SLL = require('../lib/sll');
// const Node = require('../lib/node');
require('jest');
describe('Hash Table', () => {
  describe ('Constructor', () => {
    let hashTable = new HashTable(99);
    
    it('should create a hashTable', () => {
      expect(hashTable).toBeInstanceOf(Object);
      expect(new HashTable).toBeInstanceOf(HashTable);
    });
    
    it('should check for the properties of my hash table', () => {
      expect(hashTable).toHaveProperty('bucket');
      expect(hashTable).toHaveProperty('size');
    });
    
    it('should return the size of my hash table', () => {
      expect(hashTable.size).toEqual(99);
    });
  });
      
  describe('hash', () => {
    it('return a valid Hashed version of the key', () => {
      let hashTable = new HashTable(99);
      expect(hashTable.hash('a')).toEqual(97);
      expect(hashTable.hash('b')).toEqual(98);
    });
  });
  describe ('SET', () => {
    let hashTable = new HashTable();
      
    let one = {key: 'One', value: 'wahid'};
    hashTable.set(one.key, one.value);
      
    let two = {key: 'Two', value: 'Ithnane'};
    hashTable.set(two.key, two.value);
      
    let three = {key: 'Three', value: 'Thalatha'};
    hashTable.set(three.key, three.value);
      
    it('should return Error because we\'re not inputting a key and a value', () => {
      expect(hashTable.set()).toBeInstanceOf(Error);
      expect(hashTable.set(24)).toBeInstanceOf(Error);
      expect(hashTable.set('When the lights go down in the city...')).toBeInstanceOf(Error);
      expect(hashTable.set('And the sun shines on the bay...')).toBeInstanceOf(Error);
      expect(hashTable.set('Do I want to be there in my city?')).toBeInstanceOf(Error);
    });
    it('should be valid Objects', () => {
      expect(hashTable.set(one)).toBeInstanceOf(Object);
      expect(hashTable.set(two)).toBeInstanceOf(Object);
      expect(hashTable.set(three)).toBeInstanceOf(Object);
    });
  });
});