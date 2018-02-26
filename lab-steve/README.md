# 30 - Hash Tables

- **Author**: Steve Carpenter
- **Version**: 1.0.0

## Overview
This is a simple Hash Table implementation that utilizes separate chaining.

## Getting Started
- Clone the repository to your local directory from [here](https://github.com/stevegcarpenter/30-hash-tables)
- Install all the necessary modules using the `npm install` command
- To use the library, simply copy over the files located in `./lib/` into your own source code and including them using standard NodeJS `require` syntax.
- To run the test suite after installing the npm packages, execute `npm run test` or `npm run testall` to first run the linter and then execute all tests.

## Details and Examples
This hashtable will not allow duplicate keys. If a duplicate key value is attempted to eb added to the hashtable, it will update the pre-existing value associated with that key.

Here is a list of all the functions provided by the HashTable with examples:
```js
constructor([size]) // Creates the HashTable
_hash(key) // Internal use only. Creates a hash value to be used internally.
set(key, value) // Sets/updates a key value pair
get(key) // Returns a value associated with a key or null if none is present
remove(key) // Removes a value from the HashTable
```

Require in the hashtable
```js
const HashTable = require('/path/to/hashtable.js');
```
Create a new HashTable
```js
// size value will default to 1024 if no size is provided
// since the table is implemented using separate chaining, it will never be rebuilt
let ht = new HashTable([size]);
```

Add items to the HashTable
```js
ht.set('car', 'Ferrari');
ht.set('year', 1966);
ht.set('value', '$1.2M');
ht.set('owner', 'Jim');
```

Update a value
```js
ht.set('owner', 'Steve');
```

Get a value
```js
ht.get('owner');
'Steve'
```

Remove a value
```js
ht.remove('year');
```

## Architecture
- [JavaScript](https://www.javascript.com/)
- [npm](https://npmjs.org/)
- [NodeJS](https://nodejs.org/)

## Change Log
```
2018-02-25 Added necessary external library code and scaffolded repo [Steven Carpenter]
2018-02-25 Updated the jest section with test coverage, etc [Steven Carpenter]
2018-02-25 Cleaned up the SLL to match what is needed for the hashtable [Steven Carpenter]
2018-02-25 Scaffolded hashtable test setup [Steven Carpenter]
2018-02-25 Implemented constructor and skel structure for hashtable [Steven Carpenter]
2018-02-25 Tests for the constructor written [Steven Carpenter]
2018-02-25 Updated size of 0 to trigger second Error throw [Steven Carpenter]
2018-02-25 Hash function for key values working [Steven Carpenter]
2018-02-25 Tests working for hash function [Steven Carpenter]
2018-02-25 Hash Table set method working properly using SLL [Steven Carpenter]
2018-02-25 Hash Table set method tested [Steven Carpenter]
2018-02-25 Added tests for the new find SLL method [Steven Carpenter]
2018-02-25 Added a new find SLL method [Steven Carpenter]
2018-02-25 Hash Table get is finished and working [Steven Carpenter]
2018-02-25 Tests done for HashTable get method [Steven Carpenter]
2018-02-25 HashTable remove is now working. [Steven Carpenter]
2018-02-25 Tests all passing for HashTable remove [Steven Carpenter]
```
