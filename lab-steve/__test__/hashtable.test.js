'use strict';

require('jest');
const HashTable = require('../lib/hashtable');

describe('HashTable', () => {
  describe('#constructor', () => {
    describe('Valid', () => {
      it('should return back a valid HashTable object', () => {
        expect(new HashTable()).toBeInstanceOf(HashTable);
      });

      it('should have a default size of 1024 if no size was provided', () => {
        let ht = new HashTable();
        expect(ht.size).toEqual(1024);
      });

      it('should allocate "size" buckets to store data in', () => {
        let ht = new HashTable();
        expect(ht.bucket.length).toEqual(1024);
        expect(ht.bucket).toBeInstanceOf(Array);
      });
    });

    describe('Invalid', () => {
      it('should throw an Error if the requested size is < 0', () => {
        expect(() => new HashTable(-10)).toThrow('invalid size value -10');
      });

      it('should throw an Error if the size arg is a non-number', () => {
        expect(() => new HashTable({})).toThrow('invalid size [object Object]');
        expect(() => new HashTable('foo')).toThrow('invalid size foo');
      });
    });
  });

  describe('#_hash', () => {
    describe('Valid', () => {
      it('will return an index from 0 to the HashTable size', () => {
        let ht = new HashTable(10);
        let hash = ht._hash('test string');
        expect(hash).toBeGreaterThanOrEqual(0);
        expect(hash).toBeLessThan(10);
      });

      it('will return an integer value', () => {
        let ht = new HashTable(10);
        let hash = ht._hash('test string');
        expect(typeof hash === 'number').toBeTruthy();
      });

      it('should return the same hash value if called using the same key', () => {
        let ht = new HashTable(10);
        let hash = ht._hash('test string');
        let hash2 = ht._hash('test string');
        expect(hash).toEqual(hash2);
      });
    });

    describe('Invalid', () => {
      it('should throw an error if the key is not a string', () => {
        let ht = new HashTable();
        expect(() => ht._hash(1000)).toThrow('invalid key 1000');
      });

      it('should throw an error if the key is falsey', () => {
        let ht = new HashTable();
        expect(() => ht._hash('')).toThrow('invalid key');
      });
    });
  });

  describe('#get', () => {
    describe('Valid', () => {
      it('should be truthy', () => {
        expect(true).toBeTruthy();
      });
    });

    describe('Invalid', () => {
      it('should be truthy', () => {
        expect(true).toBeTruthy();
      });
    });
  });

  describe('#set', () => {
    describe('Valid', () => {
      it('should be truthy', () => {
        expect(true).toBeTruthy();
      });
    });

    describe('Invalid', () => {
      it('should be truthy', () => {
        expect(true).toBeTruthy();
      });
    });
  });

  describe('#remove', () => {
    describe('Valid', () => {
      it('should be truthy', () => {
        expect(true).toBeTruthy();
      });
    });

    describe('Invalid', () => {
      it('should be truthy', () => {
        expect(true).toBeTruthy();
      });
    });
  });
});
