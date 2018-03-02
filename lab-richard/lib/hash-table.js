'use strict';

const SLL = require('./sll');

class HashTable {
    constructor(size = 999){
        this.bucket = [...Array(this.size)];
        this.size = size;
    }

    hashKey(key){
        if(!key) return new Error('Error: Requires a Key');
        if(typeof key !== 'string') return new Error ('Type Error: Key must be a \'string\'');
        let hash = key.split('').reduce((a,b) => a + b.charCodeAt(0), 0) % this.size;
        return hash;
    }

    set(key, value){
        if(!key || !value) return new Error('Set Error: Requires a Key and a Value');
        let hash = this.hashKey(key);

        if(!this.bucket[hash] || !this.bucket[hash].head){
            this.bucket[hash] = new SLL().insertHead(key, value);
        } else {
            this.bucket[hash].insertEnd(key, value);
        }
    }

    get(key){
        if(!key) return new Error('Error: Requires a Key');
        if(typeof key !== 'string') return new Error ('Type Error: Key must be a \'string\'');
        
        let hash = this.hashKey(key);
        
        if(this.bucket[hash]) {
            let current = this.bucket[hash].head;

            while(current) {
                if(current.key === key) return `Value: ${current.value}`;
                current = current.next;
            }
        }
        return 'Key Does Not Exist';
    }
    
    remove(key){
        if(!key) return new Error('Error: Requires a Key');
        if(typeof key !== 'string') return new Error ('Type Error: Key must be a \'string\'');
        let hash = this.hashKey(key);

        if(this.bucket[hash]) {
            let current = this.bucket[hash].head;

            for(let i = 1 ; current ; i++) {
                if(current.key === key){
                    this.bucket[hash].remove(i);
                    return 'Removed Key';
                }
                current = current.next;
            }
        } else {
            return 'Key Does Not Exist';
        }
    }
}

module.exports = HashTable;