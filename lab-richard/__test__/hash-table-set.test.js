'use strict';

const HashTable = require('../lib/hash-table');
require ('jest');

describe ('HashTable', () => {
    let hashTable = new HashTable();

    let one = {key: 'Sejuani', value: 'Tank'};
    hashTable.set(one.key, one.value);

    let two = {key: 'Miss Fortune', value: 'Fighter'};
    hashTable.set(two.key, two.value);
    
    let three = {key: 'Teemo', value: 'Bastard'};
    hashTable.set(three.key, three.value);

    describe('Invalid Input', () => {
        it('should return Error because we\'re not inputting a key and a value', () => {
            expect(hashTable.set()).toBeInstanceOf(Error);
            expect(hashTable.set(24)).toBeInstanceOf(Error);
            expect(hashTable.set('When the lights go down in the city...')).toBeInstanceOf(Error);
            expect(hashTable.set('And the sun shines on the bay...')).toBeInstanceOf(Error);
            expect(hashTable.set('Do I want to be there in my city?')).toBeInstanceOf(Error);
        });
    });

    describe('valid input', () => {
        it('should be valid Objects', () => {
            expect(hashTable.set(one)).toBeInstanceOf(Object);
            expect(hashTable.set(two)).toBeInstanceOf(Object);
            expect(hashTable.set(three)).toBeInstanceOf(Object);
        });
    });

});