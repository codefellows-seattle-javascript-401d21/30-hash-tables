'use strict';
const hashTable = require('../lib/hash-table');
require('jest');

describe('The test solution of hash-table', () => {
  let testHashTable = new hashTable();

  describe('Constructor', () => {
    
    it('should return an array', () => {
      expect(testHashTable.memory).toBeInstanceOf(Array);
    });
    it('should build the correct size table', () => {
      let sizeOf10 = new hashTable(10);
      expect(sizeOf10.memory.length).toEqual(10);
    });
  });

  describe('hashKey', () => {
    it('should return an error if the hash key is not a string', () => {
      expect(testHashTable.hashKey(45)).toBeInstanceOf(Error);

    });
    it('should return an error if no key is passed', () => {
      expect(testHashTable.hashKey()).toBeInstanceOf(Error);

    });
    it('should return the correct hash value', () => {
      expect(testHashTable.hashKey('hello')).toEqual(532);

    });

  });

  describe('Set method', () => {
    it('should return error if no key or value passed to set method', () => {
      expect(testHashTable.set('hello')).toBeInstanceOf(Error);
    });
    it('should return string when called with correct values', () => {
      expect(testHashTable.set('hello', 45)).toEqual('Item Added');
    });
    it('should return error when trying to set an item the exists', () => {
      testHashTable.set('hello', 45);
      expect(testHashTable.set('hello', 45)).toBeInstanceOf(Error);
    });



  });
  describe('Get method', () => {
    it('should return error if no key passed to get method', () => {
      expect(testHashTable.get()).toBeInstanceOf(Error);
    });
    it('should return the value of the item called', () => {
      testHashTable.set('hello', 45);
      expect(testHashTable.get('hello')).toEqual(45);
    });
    it('should return null if item does not exist', () => {
      testHashTable.set('hello', 45);
      expect(testHashTable.get('peter')).toEqual(null);
    });


  });

  describe('Remove method', () => {
    it('should return error if no key passed to get method', () => {
      expect(testHashTable.remove()).toBeInstanceOf(Error);
    });
    it('should return an error if the item is not found', () => {
      expect(testHashTable.remove('peter')).toBeInstanceOf(Error);
    });

    it('should remove the item with the correct key', () => {
      testHashTable.set('hello', 45);
      testHashTable.set('olleh', 50);
      testHashTable.set('holle', 60);
      testHashTable.set('lleho', 70);
  
      expect(testHashTable.remove('hello')).toEqual('item removed');
      expect(testHashTable.get('hello')).toEqual(null);
      expect(testHashTable.get('lleho')).toEqual(70);
    });

  });
  





});