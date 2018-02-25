# 30 Hash Tables

This repository contains a hash table module that sets, gets, and removes nodes from an object. During collisions, a singly linked list is created to reference each node in the memory's index.

---

## Installing and Getting Started

To install, fork and git clone this repository to your local computer. From your terminal, navigate to the `lab-melanie` directory and enter `npm i` in the command line to install all necessary packages. Type `node` in the command line, require in `./lib/hash-table` and enjoy!

To add a node to the hash table:

```javascript
let hashTable = new Hash(3);

hashTable.set('my key', 'my value');

console.log(hashTable);

// returns
// HashTable {
//   size: 3,
//   memory: [ SLL { head: { key: 'my key, value: 'my value' } }, undefined, undefined ] }
```

To get a node from the hash table:

```javascript
hashTable.get('my key');

// returns
// { key: 'my key, value: 'my value' }
```

To remove a node from the hash table:
```javascript
hashTable.remove('my key');

console.log(hashTable);

// returns
// HashTable {
//   size: 3,
//   memory: [ SLL {}, undefined, undefined ] }
```
---

## Data Structures

`HashTable` - a constructor that creates the hash table object

`hashKey` - generates a numeric value for the key

`set(key, value)` - takes in a key and value, checks the table to see if the hashKey already exists, if it does not exist, the hashKey is added to the table and is assigned the node with that key and value

`get(key)` - looks for the hashKey matching the key argument, if it exists, it iterates through the linked list if more than one node exist in the hashKey index and returns the matching node

`remove(key)` - looks for the hashKey matching the key argument. Once the key is found, it will remove references to the node if it is in a list, otherwise it removes the node from memory

---

## Tests

* Checks the constructor creates an object with a size and memory array with indexes equal to the size
* Checks the `set` method places a node in memory based on the index
* Checks collision nodes form a linked list
* Checks the `get` method returns a node
* Checks the `remove` method properly removes a node and its reference
* Checks all invalid arguments return errors
* Checks if error is returned if key does not exist in table with `get` and `remove` method
