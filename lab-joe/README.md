Hash Tables - lab 30

Assignment Requirements

create a HashTable constructor
the buckets should be implemented as an array of Singly Linked Lists
implement the following prototype methods
.hash(key) converts a string into a number that will index your buckets
`.set(key, value) stores a value in the hashed keys bucket
`.get(key) looks in the hashed keys bucket and returns the value of the node containing the key, or null if not found
`.remove(key) removes the sll node containing the key
Hashtable constructor
This creates an empty array that is specified by the size parameter passed in, if no size is specified the default size is 1024. to instantiate a new hash-table


We basically create an empty array that is identified by the size of the param passed in, so if there isnt a specific size the default size is 1024.

To create a new hash table - you have to require it like this:

const hashTable = require('../lib/hashTable');

and then make an instance of this object:

let testHashTable = new hashTable(); (with a default of 1024)
or with a value passed in: let testHashTable = new hashTable(256);

I wrote a lot of tests for all of the constructors, mainly testing for validity of inputs, and to make sure there is proper insertion and removal throughout all aspects (ie: set, get, remove)

