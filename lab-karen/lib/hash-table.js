'use strict';
const SLL = require ('./sll');

class HashTable {
  constructor(size=1024) {
    this.size = size;
    this.bucket = [...Array(this.size)];
  }

  hashKey (key) {
    //validate input
    if(!key) return 'Error, key is required';
    if(typeof key !== 'string') return 'Error, key must be a string';
    //calculate hash
    let hash = key.split('').reduce((a,b) => a + b.charCodeAt(0), 0) % this.size;
    console.log('key', key, 'hash', hash);
    return hash;
  }

  set (key, value) {
    // Implement the collision detection and handle that through a SLL
    //Invalidate input
    if(!key || !value) return 'Error, key and value required';

    let address = this.hashKey(key);
    let sll = new SLL();

    if(!this.bucket[address]) {
      this.bucket[address] = sll.insertEnd(key, value);
    }else{
      this.bucket[address].insertEnd(key, value);
    }
  }

  get (key) {
    // Implement the lookup for your buckets and their respective data structures
    //validate input
    if(!key) return 'Error, key is required';
    if(typeof key !== 'string') return 'Error, key must be a string';

    let address = this.hashKey(key);
    let chain = this.bucket[address];

    //create reference to the head of the data at current position
    let curr = chain.head;
    //iterate through list until key is found
    while(curr) {
      if(curr.key === key) return curr; //return if founc
      curr = curr.next; //go to next in list
    }
    return 'Invalid key';
  }

  remove (key) {
    //validate input
    if(!key) return 'Error, key is required';
    if(typeof key !== 'string') return 'Error, key must be a string';

    let address = this.hashKey(key);
    let chain = this.bucket[address];
    // console.log('chain', chain);
    //check if there is  at the a list HashTable address
    if (!chain.head) return 'Invalid key';

    if (chain.head.key === key) {
      delete chain.head;
      return;
    }

    let curr = chain.head;
    let prev;

    //iterate through list to find key
    while (curr.next) {
      prev = curr;
      curr = curr.next;
      if (curr.key === key) {
        prev.next = curr.next; //if matches key then deference
      }
    }
  }
}

module.exports = HashTable;
