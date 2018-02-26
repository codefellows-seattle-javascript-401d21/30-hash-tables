'use strict';

const SLL = require('./assets/sll');


class HashTable {
  constructor(size) {
    this.size = size || 10; //
    this.memory = [...Array(this.size)];
  }

  hashKey(key) {
    if(!key) return 'No Key entered';
    if(typeof key !== 'string') return 'Key must be a string only!';

    let hash = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;

    //this is our hash number
    return hash;
  }

  set(key, value) {
    if(!key) return 'No Key entered';
    if(!value) return 'No value Entered';

    let index = this.hashKey(key);//sets the index off the hashKey
    let sll = new SLL();//builds our new SLL

    // -- set key/value to index or add to linked list if collision -- //
    !this.memory[index] ?
      this.memory[index] = sll.insertEnd(key, value) : //
      this.memory[index].insertEnd(key, value);
  }

  get(key) {
    if(!key) return 'No Key entered';
    if(typeof key !== 'string') return 'Key must be a string only!';

    let hash = this.hashKey(key);
    let index = this.memory[hash];

    
    if (index === undefined || !index.head) {
      return 'Item is not found in HashTable';
    }
    
    let current = index.head; //set the current
 
    while(current) { //loops over and till it finds item 
      if(current.key === key) return current; // return node with key-value pair that match
      current = current.next;
    }
  }

  remove(key) {
    if(!key) return 'No Key entered';
    if(typeof key !== 'string') return 'Key must be a string only!';

    let index = this.memory[this.hashKey(key)];

    if(index === undefined || !index.head) return 'Item is not found in HashTable';

    let prev;
    let current = index.head;


    //removes the node if no NEXT is found
    if(index.head.key === key) {
      if(!index.head.next) {
        delete index.head;
      }
    }

    // iterate through list and remove reference to node
    while(current.next) {
      prev = current;
      current = current.next;
      if(current.key === key) {
        prev.next = current.next;
      }
    }
    return current || index.head; //item that was removed
  }
}

module.exports = HashTable;