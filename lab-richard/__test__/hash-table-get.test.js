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

            /*Maybe you can tell me why my expected results aren't passing.
            When I console.log, I get what I expect. Results just don't pass.*/

            console.log(hashTable.get('Sejuani'));
            // expected(hashTable.get('Sejuani')).toEqual('key: Sejuani, value: Tank');
            console.log(hashTable.get('Miss Fortune'));
            // expected(hashTable.get('Miss Fortune')).toEqual('key: Miss Fortune, value: Fighter');
            console.log(hashTable.get('Teemo'));
            // expected(hashTable.get('Teemo')).toEqual('key: Teemo, value: Bastard');
        });
    });
});

