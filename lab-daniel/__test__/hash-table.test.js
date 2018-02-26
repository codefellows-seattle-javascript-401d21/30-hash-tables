'use strict';

const ND = require('../lib/nd');
const SLL = require('../lib/sll');
const Hash = require('../lib/hash-table');
require('jest');

let testOne = new Hash(265);
let testTwo = new Hash();
let dataOne, dataTwo;

describe('Hash Tables Lab', () => {
  describe('Constructor', () => {
    it('Should build a valid hash table', () => {
      expect(testOne).toBeInstanceOf(Hash);
      expect(testTwo).toBeInstanceOf(Hash);
    });
    it('The hash table should contain a max size', () => {
      expect(testOne.size).toEqual(265);
      expect(testTwo.size).toEqual(1024);
    });
    it('The hash table should contain a memory array with a length of the max size', () => {
      expect(testOne.buckets.length).toEqual(265);
      expect(testTwo.buckets.length).toEqual(1024);
    });
  });
  describe('HashKey', () => {
    it('return a valid Hashed version of the key provided', () => {
      expect(testOne.hashKey('a')).toEqual(97);
    });
    it('the Hashed value should never exceed the max size', () => {
      expect(testOne.hashKey('aaa')).toEqual(26);
    });
    it('should provide a numeric value as the hash', () => {
      expect(Number.isInteger(testOne.hashKey('z'))).toBeTruthy();
    });
  });
  describe('Set', () => {
    it('Set data into the array of buckets', () => {
      testOne.set('a','test set one');
      testTwo.set('b', 'test set two');
      expect(testOne.buckets[97]).toBeTruthy();
      expect(testTwo.buckets[98]).toBeTruthy();
    });
    it('the data should contain the value to be set', () => {
      expect(testOne.buckets[97].head.val).toEqual('test set one');
      expect(testTwo.buckets[98].head.val).toEqual('test set two');
    });
    it('the data should be contained inside a valid linked list', () => {
      expect(testOne.buckets[97]).toBeInstanceOf(SLL);
      expect(testTwo.buckets[98]).toBeInstanceOf(SLL);
    });
  });
  describe('Get', () => {
    it('Should get the data from the selected key', () => {
      dataOne = testOne.get('a');
      dataTwo = testTwo.get('b');
      expect(dataOne).toBeTruthy();
      expect(dataTwo).toBeTruthy();
    });
    it('the data should contain the value that was set', () => {
      expect(dataOne.val).toEqual('test set one');
      expect(dataTwo.val).toEqual('test set two');
    });
    it('the data should be contained inside a valid node', () => {
      expect(dataOne).toBeInstanceOf(ND);
      expect(dataTwo).toBeInstanceOf(ND);
    });
  });
  describe('Remove', () => {
    it('Should remove a node from the correct bucket', () => {
      testOne.set('/2', 'test remove one');
      testTwo.set('/3', 'test remove two');
      testOne.remove('a');
      testTwo.remove('b');
      expect(testOne.buckets[97].head.next).toBeNull();
      expect(testTwo.buckets[98].head.next).toBeNull();
    });
    it('Should remove the correct node from the bucket', () => {
      expect(testOne.buckets[97].head.val).toEqual('test remove one');
      expect(testTwo.buckets[98].head.val).toEqual('test remove two');
    });
  });
});