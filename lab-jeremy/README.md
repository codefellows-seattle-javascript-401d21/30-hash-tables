# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_: 
    "jest": "^22.4.2"

_Last modified_: 2/24/2018

# App use

This lab generates a hash table library using an array of singly linked lists. Required libraries include the node and singly linked list custom libraries in the lib folder.

## Installation

```
const HashTable = require('[PATH TO HASHTABLE LIBRARY]');
```

## Methods
```
HashTable(size) - Constructor

HashTable.haskKey(key) - Generates an index value to store hash with SLL

HashTable.set(key, value) - Sets a value in a node in a SLL in the form of [key, value] if possible.

HashTable.get(key) - Gets the value of a node given a key if possible.

HashTable.remove(key) - Removes a node given a key if possible.
```

## Examples

```
let MyTable = new HashTable(10); // Creates a size 10 hashtable
let MyTable2 = new HashTable(); // Creates a size 1024 hashtable

MyTable.hashKey('mykey1') // returns the index of the bucket that the key will be assigned to

MyTable.set('mykey1', 'myval'); // sets a value of 'myval' to given key 'mykey1' (both params required)

MyTable.get('mykey1'); // gets the value assosiated with mykey1 (myval)

MyTable.remove('mykey1'); // removes the value that is linked to the key 'mykey1' (myval)
```

## Tests

Simply type npm run test in the terminal and watch the magic.

# Lab Readme (SPECS)

lab 30 - Hash Table Data Structure
To Submit this Assignment
fork this repository
write all of your code in a directory named lab- + <your name> e.g. lab-duncan
push to your repository
submit a pull request to this repository
submit a link to your PR in canvas
write a question and observation on canvas
Requirements
Configuration
your lab directory must include

README.md -- with a documentation about your lab
.gitignore -- with a robust .gitignore
.eslintrc -- with the class .eslintrc file
.eslintignore -- with the class .eslintignore
.package.json -- with all dependencies and dev-dependencies
lib/ -- directory for holding your programs helper modules
test/ -- directory for holding your programs unit and integration tests
Testing
write at least three test assertions for each constructor method
organize your tests into appropriate describe/it blocks for test output readability
Documentation
in your README, write documentation for you data structures
your documentation should includes code block usage examples
provide instructions for:
installing and using your data structure
accessing each method
running your tests
Feature Tasks
create a HashTable constructor
the buckets should be implemented as an array of Singly Linked Lists
implement the following prototype methods
.hash(key) converts a string into a number that will index your buckets
`.set(key, value) stores a value in the hashed keys bucket
`.get(key) looks in the hashed keys bucket and returns the value of the node containing the key, or null if not found
`.remove(key) removes the dll node node containing the key
Stretch Goal
* Refactor you hash table to used BSTNodes for you buckets instead of Linked List
Rubric:
Tests: 2pts
Passes linter: 1pts
Completed Data Structure: 3pts
Completed FP methods: 2pts
Big-O notation: 2pts