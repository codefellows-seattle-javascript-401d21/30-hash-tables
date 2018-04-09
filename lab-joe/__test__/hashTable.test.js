
'use strict';

require('jest');
const hashTable = require('../lib/hashTable');
const SLL = require('../lib/SLL');

describe('the hash table', () => {
  describe('testing the constructor', () => {
    describe('testing for a valid object input', () => {
      it('return back a valid hashTable object', () => {
        expect(new hashTable()).toBeInstanceOf(hashTable);
      });
    });

    describe('testing for invalid inputs', () => {

      it('throw an error if the size argument is not a number', () => {
        expect(() => new hashTable({ empty: 'object' })).toThrow();
      });
    });
  });

  describe('hash', () => {
    describe('Valid', () => {
      it('will return an index from 0 to the hashTable size', () => {
        let hash_table = new hashTable(10);
        let hash = hash_table._hash('test string');
        expect(hash).toBeGreaterThanOrEqual(0);
      });



    });

    describe('invalid', () => {
      it('should throw an error if the key is not a string', () => {
        let hash_table = new hashTable();
        expect(() => hash_table._hash(1000)).toThrow('invalid key');
      });

    });
  });

  describe('get', () => {
    describe('Valid', () => {
      let hash_table = new hashTable(1);
      hash_table.set('name', 'joe waine');

      it('should return the requested value when it is found', () => {
        expect(hash_table.get('name')).toEqual('joe waine');
      });

    });

    describe('Invalid', () => {
      it('should return null when no item exists', () => {
        let hash_table = new hashTable();
        expect(hash_table.get('name')).toBeNull();
      });

    });
  });

  describe('set', () => {
    describe('Valid', () => {
      it('should properly add an item to the hash table', () => {
        let hash_table = new hashTable(1);
        hash_table.set('animal', 'dog');
        expect(hash_table.bucket[0].head.value.key).toEqual('animal');
        expect(hash_table.bucket[0].head.value.value).toEqual('dog');
      });

    });

    describe('invalid', () => {
      it('should throw an error if the key is a non-string', () => {
        let hash_table = new hashTable(1);
        expect(() => hash_table.set(0, 'Jim')).toThrow('invalid key');
      });

    });
  });

  describe('remove', () => {
    describe('Valid', () => {
      it('should properly remove the item from the hash table', () => {
        let hash_table = new hashTable();
        hash_table.set('animal', 'dog');
        hash_table.remove('animal');
        expect(hash_table.get('animal')).toBeNull();
      });
    });

    describe('invalid', () => {

      it('error if the key is a non-string', () => {
        let hash_table = new hashTable();
        expect(() => hash_table.remove(0)).toThrow('invalid key');
      });

    });
  });
});