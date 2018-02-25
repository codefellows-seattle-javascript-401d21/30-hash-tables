let MyTable = new HashTable(10); // Creates a size 10 hashtable
let MyTable2 = new HashTable(); // Creates a size 1024 hashtable

MyTable.set('mykey1', 'myval'); // sets a value of 'myval' to given key 'mykey1' (both params required)

MyTable.get('mykey1'); // gets the value assosiated with mykey1 (myval)

MyTable.remove('mykey1'); // removes the value that is linked to the key 'mykey1' (myval)