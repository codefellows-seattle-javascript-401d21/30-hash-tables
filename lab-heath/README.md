
# LAB 30: Hash Tables 

---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install` and after that, you will neex to install all the dependencies. do this by typing in `npm i`. 

next you need to have these scripts adjusted in your package.json file.

```javascript
 "scripts": {
    "test": "jest",
    "lint": "eslint ."
  },
  ```

from there, you can go to your terminal and type, 

```javascript
node index.js
```
this will launch the index.js file that has mock data that will build a hash table and then `Set` the 3 sets of data in the table. it will then `remove` 2 of the items.  then it will log 2 `GET` which will be one that was not removed and one that was so you will get a return of a data node and one of a Error. Last it will also log the Hash Table so you can see what is left. it sould look something like this.

```javascript
remove test1: Node { key: 'heath', value: '22', next: null }
remove test2: Node { key: 'sara', value: '333', next: null }
get test: Node { key: 'tim', value: '1', next: null }
get test2: Item is not found in HashTable
hash table with only test left: [ SLL { head: Node { key: 'tim', value: '1', next: null } },
  undefined,
  SLL {},
  SLL {},
  undefined ]
```
as shown above, we added 3 data sets, removed 2 of them and then got the last one and one that was removed to see the error. Lastly you can see the whole hash-table and see that there was 2 SLL in spots 3 and 4 in the index. 

you can also run the ESLINT

do this by typing in 
```javascript
npm run lint
```
this will let you know about the any linter error.

---
## Big O

when we are getting a item from the Hash Table, if the item is at the head of a SLL, the big-O is `O(1)`. if it it has more then 1 node at that hash key, then it goes to `O(n)`.

---
## How to use

if you wish to use this HashTable. just create a Hashtable by calling `HashTable(val)` with `val` being the hash table size.  after that you will then have access to the 4 methods on the hashtable. they are 

*  `hashkey(key)` - this lets you set the hash value of the item. 
*  `set(key, value)` - this sets the data(value of something to send back along with the hashkey) in the hashtable with the hashkey that you just made. 
*  `get(key)` - uses the hashkey to look up the data and give it back to you. 
*  `remove(key)` - this removes the item from the hashtable.

---
## tests
we have different test for each of the methods of the hashtable.


### test to see if the constructor works
```javascript
describe('HashTable Constructor', () => {
  let hash = new Hash(5);

  it('should create a table with memory index of 5', () => {
    expect(hash.memory.length).toEqual(5);
  });
  it('should create an object with size and memory properties', () => {
    expect(hash).toHaveProperty('size');
    expect(hash).toHaveProperty('memory');
  });
});
```

### test to see if the HASHKEY works
```javascript
describe('HashKey testing to see if it works', () => {
  let hashTable = new Hash(5);

  describe('Valid input', () => {
    it('should create a number representing the key', () => {
      expect(hashTable.hashKey(test.key)).toEqual(0);
      expect(hashTable.hashKey(test1.key)).toEqual(2);
      expect(hashTable.hashKey(test2.key)).toEqual(3);
    });
  });
  describe('Invalid input', () => {
    it('should return an error if no key is passed', () => {
      expect(hashTable.hashKey()).toMatch('No Key entered');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.hashKey(1)).toMatch('Key must be a string only!');
    });
  });
});
```

### test to see if the SET works
```javascript
describe('Set Method', () => {
  let hashTable = new Hash(5);
  hashTable.set(test.key, test.val);

  describe('Valid input', () => {
    it('see if an object was made.', () => {
      expect(hashTable.memory[0]).toBeInstanceOf(Object);
    });
    it('check to see if the item was stored in the hashtable', () => {
      expect(hashTable.memory[0].head.value).toBe('1');
    });
    it('and a node to a SLL if a collision occurs', () => {
      hashTable.set(test1.key, test1.val);
      expect(hashTable.memory[0].head.next.value).toBe('22');
    });
  });


  describe('Invalid input', () => {
    it('should return an error if no key or value is passed', () => {
      expect(hashTable.set('testing')).toMatch('No value Entered');
    });
    it('should return an error if no arguments are passed', () => {
      expect(hashTable.set()).toMatch('No Key entered');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.set(1)).toMatch('No value Entered');
    });
  });
});
```

### test to see if the GET works
```javascript
describe('GET on hashTable', () => {
  let hashTable = new Hash(5);
  hashTable.set(test.key, test.val);
  hashTable.set(test1.key, test1.val);
  hashTable.set(test2.key, test2.val);

  describe('Valid Input', () => {
    it('should return a node', () => {
      expect(hashTable.get('tim')).toBeInstanceOf(Object);
    });
    it('should return the right value of the node that was looked for', () => {
      expect(hashTable.get('heath').value).toBe('22');
    });
    it('should have placed the items in the right place in the hashtable', () => {
      expect(hashTable.memory[3].head.key).toBe('sara');
      expect(hashTable.memory[2].head.key).toBe('heath');
    });
  });
  describe('Invalid input', () => {
    it('should return an error if no key is passed', () => {
      expect(hashTable.get()).toMatch('No Key entered');
    });
    it('should return an error if key is not found in table', () => {
      expect(hashTable.get('testing')).toMatch('Item is not found in HashTable');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.get(23423423)).toMatch('Key must be a string only!');
    });
  });
});
```

### test to see if the REMOVE works
```javascript
describe('Remove Method', () => {
  let hashTable = new Hash(5);
  hashTable.set(test.key, test.val);
  hashTable.set(test1.key, test1.val);
  hashTable.set(test2.key, test2.val);

  describe('Valid Input', () => {
    it('should remove the item from the table', () => {
      hashTable.remove('tim');
      expect(hashTable.get('tim')).toMatch('Item is not found in HashTable');
    });
    it('should remove pointer reference in linked list', () => {
      hashTable.remove('sara');
      expect(hashTable.memory[2].head.next).toBeNull();
    });
  });


  describe('Invalid input', () => {
    it('should return an error if no key is provided', () => {
      expect(hashTable.remove()).toMatch('No Key entered');
    });
    it('should return an error if key is not a string', () => {
      expect(hashTable.remove(1)).toMatch('Key must be a string only!');
    });
    it('should return error if key does not exist in table', () => {
      expect(hashTable.remove('testings')).toMatch('Item is not found in HashTable');
    });
  });
});
```