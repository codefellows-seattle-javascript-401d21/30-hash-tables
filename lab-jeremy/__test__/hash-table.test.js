'use strict';

const HashTable = require('../lib/hash-table');
const SLL = require('../lib/sll');
require('jest');

describe('Hashtable Constructor tests', function() {
  describe('#Standard Case ', function() {
    it('Should return: A hash table', function() {
      expect(new HashTable()).toBeInstanceOf(HashTable);
    });
  });

  describe('#Standard Case ', function() {
    it('Should return: A hash table of size 1024', function() {
      expect(new HashTable().size).toEqual(1024);
    });
  });

  describe('#Standard Case ', function() {
    it('Should return: an empty array of length 10', function() {
      expect(new HashTable(10).memory.length).toEqual(10);
    });
  });

});

describe('Hashtable.haskKey tests', function() {
  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(new HashTable().hashKey()).toBeInstanceOf(Error);
    });
  });

  describe('#standard Case ', function() {
    it('Should return: index number ', function() {
      expect(new HashTable(10).hashKey('mything')).toEqual(8);
    });
  });

});

describe('Hashtable.set tests', function() {
  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(new HashTable().set()).toBeInstanceOf(Error);
    });
  });

  let myTestHashTable = new HashTable(10);
  myTestHashTable.set('mything', 'myval');

  describe('#Standard Case ', function() {
    it('Should return: SLL', function() {
      expect(myTestHashTable.memory[8]).toBeInstanceOf(SLL);
    });
  });

  describe('#Standard Case ', function() {
    it('Should have property of val', function() {
      expect(myTestHashTable.memory[8].head).toHaveProperty('val');
    });
  });

  describe('#Standard Case ', function() {
    it('Should have key and value', function() {
      expect(myTestHashTable.memory[8].head.val).toEqual(['mything', 'myval']);
    });
  });

});

describe('Hashtable.get tests', function() {
  let myTestHashTable2 = new HashTable(10);
  myTestHashTable2.set('mything', 'myval');

  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(new HashTable().get()).toBeInstanceOf(Error);
    });
  });
  
  describe('#Standard Case ', function() {
    it('Should return: error', function() {
      expect(myTestHashTable2.get('badkey')).toBeInstanceOf(Error);
    });
  });

  describe('#Standard Case ', function() {
    it('Should return: get myval', function() {
      expect(myTestHashTable2.get('mything')).toEqual('myval');
    });
  });

});

describe('Hashtable.remove tests', function() {
  let myTestHashTable3 = new HashTable(10);
  myTestHashTable3.set('mything', 'myval');

  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(new HashTable().remove()).toBeInstanceOf(Error);
    });
  });

  describe('#bad key Case ', function() {
    it('Should return: error', function() {
      expect(myTestHashTable3.remove('badkey')).toBeInstanceOf(Error);
    });
  });

  describe('#null Case ', function() {
    it('Should return: error', function() {
      expect(myTestHashTable3.remove('mything')).toEqual('myval');
    });
  });

});





