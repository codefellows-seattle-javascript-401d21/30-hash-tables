'use strict';

let HashTable = new HashTable(2); // Creates a size 2 hashtable
let HashTable2 = new HashTable(); // Creates a size 1024 hashtable

HashTable.set("key1", "val"); // sets a value of 'val' to given key 'key1' (both params required)

HashTable.get("key1"); // gets the value associated with key1 (val)

HashTable.remove("key1"); // removes the value that is linked to the key 'key1' (val)
