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
            expect(hashTable.get('plumage')).toEqual('Key Does Not Exist');
            expect(hashTable.get()).toBeInstanceOf(Error);
            expect(hashTable.get(65)).toBeInstanceOf(Error);
        });
    });
    
    describe('Valid Input', () => {
        it('should return expected', () => {

            expect(hashTable.get('Sejuani')).toEqual('Value: Tank');
            expect(hashTable.get('Miss Fortune')).toEqual('Value: Fighter');
            expect(hashTable.get('Teemo')).toEqual('Value: Bastard');
        });
    });
});

