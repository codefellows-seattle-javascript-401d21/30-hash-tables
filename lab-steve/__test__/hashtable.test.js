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
