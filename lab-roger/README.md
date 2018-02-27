#Hashtables

Assignment Requirements

* create a `HashTable` constructor
  * the buckets should be implemented as an array of Singly Linked Lists
* implement the following prototype methods
* `.hash(key)` converts a string into a number that will index your buckets
* `.set(key, value) stores a value in the hashed keys bucket
* `.get(key) looks in the hashed keys bucket and returns the value of the node containing the key, or null if not found
* `.remove(key) removes the sll node containing the key

## Hashtable constructor
This creates an empty array that is specified by the size parameter passed in, if no size is specified 
the default size is 1024.
to instantiate a new hash-table 
```
const hashTable = require('../lib/hash-table');
```
and then 
```
let testHashTable = new hashTable();
```
or
```
let testHashTable = new hashTable(512);
```

##hashKey BigO: O(1).

This will generate the hash value from the key that is passed. It will return errors if the key is missing or not a string value. 
```
testHashTable.hashKey('string');
```

##Set method BigO: O(1).

This will take a key and a value. It will set the value and the key in the correct hash sll.
```
testHashTable.set(key, value);
```

##Get method BigO: O(1+n).

This will return the value associated with the key passed to it. If the key is not in the hash table it will return null.
```
testHashTable.get(key);
```

##Remove method BigO: O(1+n)

This will remove the node that holds the key and value. It will return a message if the key is not found.
```
testHashTable.remove(key);
```

##Installing

All that is necessary is to type
```
npm install
```  
That will install the required dependencies.

##Testing
To start the test suite
```
npm test 
```








## Authors

* **Roger Davenport** - *RND* 



## License

This project is licensed under the MIT License - 

## Acknowledgments

* Scott Schmidt
* Google
* 
