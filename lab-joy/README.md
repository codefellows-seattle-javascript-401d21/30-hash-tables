# Lab 30 - Hash Tables
Joy Hou, Feb 24, 2018

## Problem Domain
Implement a hash table data structure with the buckets as an array of singly linked lists.

## Modules
### SLL
The SLL module is a singly linked list data structure, including a **constructor**, an **insertHead** method, and an **insertTail** method. Each node of the SLL takes in a key and a value.

### HashTable
The Hash Table module has a **constructor**, which takes in user set size or a default size of 1024. Each hash table has a bucket property, which is an array of the aforementioned size.

The **hash** prototype method takes in a string key and converts it into a number that will index the buckets.

The **set** prototype method takes in a key and a value, and stores a value in the hashed key's bucket.

The **get** prototype method takes in a key, looks in the hashed key's bucket, and returns the value of the node containing the key, or null if not found.

The **remove** prototype method removes the SLL node containing the key.

## Installation and Testing
To install this data structure, you can [git clone](https://git-scm.com/docs/git-clone) this repository to your computer. In your terminal, navigate to the lab-joy folder within the cloned directory and use the command __npm install__. To run my tests for this data structure, use the command __npm run test__. To use the Hash Table data structure in your terminal, enter the command __node__ to initiate Node.js. Then enter:

```const HT = require('./hashtable');```

You can now use all of the commands from the data structure section above in your terminal. 

## Example Code
After following the installation instructions above:

```
const HT = require('./hashtable'); // allows you to use the data structure
let hash = new HT(5); // creates new instance of our HashTable with 5 buckets
hash.set('joy', 1); // stores a node with a key of "joy" and a value of 1 in the hash table
hash.set('adam', 2); // stores a node with a key of "adam" and a value of 2 in the hash table
hash.set('asdf', 3); // stores a node with the key of "asdf" and a value of 3 in the hash table
console.log(hash); // both the node with key of joy and the node with key of adam are stored in hash.buckets[3] (hash collision) as a singly linked list, with the joy node being the head of the list. The asdf node is stored in hash.buckets[4] as the head of its SLL.
hash.get('joy'); // returns 1
hash.get('adam'); // returns 2
hash.get('asdf'); // returns 3
hash.get('cats'); // returns null
hash.remove('joy'); // removes the node with key joy from the hash table, so that in hash.buckets[3], the SLL only contains the node with key adam.
hash.remove('asdf'); // removes the node with a key of asdf, so that hash.buckets[4] is undefined.
```