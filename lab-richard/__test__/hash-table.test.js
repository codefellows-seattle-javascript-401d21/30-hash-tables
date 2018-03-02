'use strict';

const HashTable = require('../lib/hash-table');
const SLL = require('../lib/sll');
const nd = require('../lib/nd');
require('jest');

describe ('HashTable', () => {
    
    let hashTable = new HashTable(99);

    describe('valid input', () => {
        
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
    
    describe('hashKey', () => {
        it('return a valid Hashed version of the key', () => {
            expect(hashTable.hashKey('a')).toEqual(97);
            expect(hashTable.hashKey('b')).toEqual(98);
        });
    });
});