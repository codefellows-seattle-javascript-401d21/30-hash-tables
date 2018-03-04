'use strict';

const HashTable = require('../lib/ht');
const SLL = require('../lib/sll');
require('jest');

describe('Hashtable Constructor tests', function() {
  describe('#Standard Case ', function() {
    it('Should return hash table', function() {
      expect(new HashTable()).toBeInstanceOf(HashTable);
    });
  });

  describe('#Standard Case ', function() {
    it('Should return hash table of size 1024', function() {
      expect(new HashTable().size).toEqual(1024);
    });
  });
});

describe('Hashtable.hashKey tests', function() {
  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(new HashTable().hashKey()).toBeInstanceOf(Error);
    });
  });
});

describe('HT.set tests', function() {
  describe('#null Case ', function() {
    it('Should return an error', function() {
      expect(new HashTable().set()).toBeInstanceOf(Error);
    });
  });

  let myTestHashTable = new HashTable(2);
  myTestHashTable.set('myTable', 'val');

  describe('#Standard Case ', function() {
    it('Should return a single linked list', function() {
      expect(myTestHashTable.memory[0]).toBeInstanceOf(SLL);
    });
  });

  describe('#Standard Case ', function() {
    it('Should have property of value', function() {
      expect(myTestHashTable.memory[0].head).toHaveProperty('val');
    });
  });
});

describe('HT .get tests', function() {
  let myTestHashTable2 = new HashTable(2);
  myTestHashTable2.set('myTable', 'val');

  describe('#null Case ', function() {
    it('Should return an error', function() {
      expect(new HashTable().get()).toBeInstanceOf(Error);
    });
  });

  describe('#Standard Case ', function() {
    it('Should return an error', function() {
      expect(myTestHashTable2.get('badkey')).toBeInstanceOf(Error);
    });
  });
});

describe('Hashtable.remove tests', function() {
  let myTestHashTable3 = new HashTable(2);
  myTestHashTable3.set('myTable', 'val');

  describe('#null Case ', function() {
    it('Should return an error', function() {
      expect(new HashTable().remove()).toBeInstanceOf(Error);
    });
  });

  describe('#bad key Case ', function() {
    it('Should return another error', function() {
      expect(myTestHashTable3.remove('badkey')).toBeInstanceOf(Error);
    });
  });

  describe('#null Case ', function() {
    it('Should return more errors', function() {
      expect(myTestHashTable3.remove('myTable')).toEqual('val');
    });
  });
});
