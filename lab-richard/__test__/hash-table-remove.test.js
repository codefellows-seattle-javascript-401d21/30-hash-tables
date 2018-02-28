'use strict';

const HashTable = require('../lib/hash-table');
require ('jest');

describe ('HashTable', () => {
    let hashTable = new HashTable(3);

    let one = {key: 'Sejuani', value: 'Tank'};
    hashTable.set(one.key, one.value);

    let two = {key: 'Miss Fortune', value: 'Fighter'};
    hashTable.set(two.key, two.value);
    
    let three = {key: 'Teemo', value: 'Bastard'};
    hashTable.set(three.key, three.value);

    describe('invalid input', () => {
        it('should return an error', () => {
            expect(hashTable.remove('plumage')).toEqual('Key Does Not Exist');
            expect(hashTable.remove()).toBeInstanceOf(Error);
            expect(hashTable.remove(65)).toBeInstanceOf(Error);
        });
    });

    describe('valid input', () => {
        it('should return expected results', () => {
            expect(hashTable.remove('Sejuani')).toEqual('Removed Key');
            expect(hashTable.get('Sejuani')).toEqual('Key Does Not Exist');
            expect(hashTable.remove('Miss Fortune')).toEqual('Removed Key');
            expect(hashTable.get('Miss Fortune')).toEqual('Key Does Not Exist');
            expect(hashTable.remove('Teemo')).toEqual('Removed Key');
            expect(hashTable.get('Teemo')).toEqual('Key Does Not Exist');
        });
    });
});