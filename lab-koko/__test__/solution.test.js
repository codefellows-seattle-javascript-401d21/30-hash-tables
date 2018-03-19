'use strict';

const HashTable = require('../lib/hashTable');
require('jest');


describe('Hash Table', () => {

  let hashTable = new HashTable();
  let one = {key: 'One', value: 'Wahid'};
  hashTable.set(one.key, one.value);
  let two = {key: 'Two', value: 'Ithnane'};
  hashTable.set(two.key, two.value);
  let three = {key: 'Three', value: 'Thalatha'};
  hashTable.set(three.key, three.value);

  describe ('Constructor', () => {
    let hashTable = new HashTable(117);
    
    it('should construct a hashTable', () => {
      expect(hashTable).toBeInstanceOf(Object);
      expect(new HashTable).toBeInstanceOf(HashTable);
    });
    
    it('should check for the properties of the hash table', () => {
      expect(hashTable).toHaveProperty('bucket');
      expect(hashTable).toHaveProperty('size');
    });
    
    it('should return the size of my hash table', () => {
      expect(hashTable.size).toEqual(117);
    });
  });
      
  describe('HashKey', () => {
    it('return a valid Hashed version of the key', () => {
      let hashTable = new HashTable(117);
      expect(hashTable.hashKey('a')).toEqual(97);
      expect(hashTable.hashKey('b')).toEqual(98);
    });
  });

  describe ('SET', () => {
    it('should return Error because we\'re not inputting a key and a value', () => {
      expect(hashTable.set()).toBeInstanceOf(Error);
      expect(hashTable.set(24)).toBeInstanceOf(Error);
      expect(hashTable.set('one, two, three')).toBeInstanceOf(Error);
    });
    it('should be valid Objects', () => {
      expect(hashTable.set(one)).toBeInstanceOf(Object);
      expect(hashTable.set(two)).toBeInstanceOf(Object);
      expect(hashTable.set(three)).toBeInstanceOf(Object);
    });
  });

  describe ('GET', () => {
    it('should return an error', () => {
      expect(hashTable.get('four')).toEqual('Key Does Not Exist');
      expect(hashTable.get()).toBeInstanceOf(Error);
      expect(hashTable.get(65)).toBeInstanceOf(Error);
    });
  });
  describe('REMOVE', () => {
    it('should return an error', () => {
      expect(hashTable.remove('four')).toEqual('Key Does Not Exist');
      expect(hashTable.remove()).toBeInstanceOf(Error);
      expect(hashTable.remove(65)).toBeInstanceOf(Error);
    });
  });
});