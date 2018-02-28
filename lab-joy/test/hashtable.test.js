'use strict';

require('jest');
let HT = require('../hashtable');
let SLL = require('../lib/sll');

describe('#HashTable', () => {
  let hash = new HT(5);

  describe('#constructor', () => {
    it('should create a new instance of the HashTable', () => {
      expect(hash).not.toBe(undefined);
    });

    it('should create the correct number of buckets defined', () => {
      expect(hash.buckets.length).toBe(5);
    });
  });

  describe('#set', () => {
    it('should take in both a key and a value', () => {
      expect(hash.set('joy')).toBe('error');
      expect(hash.set()).toBe('error');
    });

    it('should ensure the key is a string', () => {
      expect(hash.set(2, 3)).toBe('error');
      expect(hash.set({ a: 1 }, 'str')).toBe('error');
    });

    it('should store a node in the hashed key\'s bucket', () => {
      hash.set('joy', 1);
      expect(hash.buckets[3] instanceof SLL).toBe(true);
      expect(hash.buckets[3].head.key).toBe('joy');
      expect(hash.buckets[3].head.value).toBe(1);
      expect(hash.buckets[3].head.next).toBe(null);
    });
  });

  describe('#get', () => {
    it('should take in a key', () => {
      expect(hash.get()).toBe('error');
    });

    it('should ensure the key is a string', () => {
      expect(hash.set(2)).toBe('error');
      expect(hash.set({ a: 1 })).toBe('error');
    });

    it('should store get the value of the node with the input key', () => {
      expect(hash.get('joy')).toBe(1);
    });

    it('should return null if no such key is stored', () => {
      expect(hash.get('adam')).toBe(null);
    });
  });

  describe('#remove', () => {
    it('should take in a key', () => {
      expect(hash.remove()).toBe('error');
    });

    it('should ensure the key is a string', () => {
      expect(hash.remove(2)).toBe('error');
      expect(hash.remove({ a: 1 })).toBe('error');
    });

    it('should remove the node from the hash table with the input key', () => {
      expect(hash.get('joy')).toBe(1);
      hash.remove('joy');
      expect(hash.get('joy')).toBe(null);
    });
  });
});