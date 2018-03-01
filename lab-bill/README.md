This is a hash table data structure, where each key in the object represents a hash index to a singly linked list. 

To interact with this app first clone down the repository to your local device and  install the necessary dependencies. 
```
npm install
```

After that you can create your own hash table in the node interface. Here are a list of commands you can run on your new hashtable.

```
//create your hashtable
let myHashTable = new HashTable

// set the hash key of abc a value of 123. The value will be stored in that hash value in a singly linked list
myHashTable.set('abc', '123')

// get the hash key of 'abc'
myHashTable.get('abc')

//delete the value at hash key of 'abc'
myHashTable.remove('abc')
```

To run the jest test suite of this application run the following in your terminal.
```
npm run test
```