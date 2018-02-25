# 30 Hash Tables

This repository contains a hash table module that sets, gets, and removes nodes from a hash table. During collisions, a singly linked list is created to reference each node in memory for a key.

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

`HashTable` - a contructor that creates the hash table object

`hashKey` - creates an ascii numeric value based off the key string

`set(key, value)` - takes in a key and value, checks the table to see if the hashKey already exists, if it does not, it adds the hashKey to the table and assigns a node with the key and value

`get(key)` - looks for the hashKey matching the key argument, if it exists, ith then begins to iterate through the linked list if more than one node exist in the hashKey index

`remove(key)` - looks for the hashKey matching the key argument. Once the key is found, it will remove references to the node if it is in a list, otherwise it removes the node from memory

---

## Tests
