># lab 30 - Hash Table Data Structure

  This is hash table data structure based on an array using a size / value modulo for the indexing algorithm.
  String indexes are a sum of the character's ascii codes.  Non string / numbers can be stored by supplying an index value.

  The hash table has the following methods available:

  - Set - add a value.

  - Get - fetch a value

  - Remove - delete a value

>## Install

```BASH
    npm i
```

### Dependencies 

- This project has the following dependencies:

```JSON
   "devDependencies": {
    "eslint": "^4.18.1",
    "jest": "^22.4.2"
  }
```

### npm scripts

- The following npm scripts are available:

```JSON
  "scripts": {
    "lint": "eslint .",
    "test": "jest --verbose -i"
  }
```

#### Run the tests!

Normal mode

```BASH
    npm test
```


>## Usage

### Set

Set can take one or two arguments;

  set(value) - simple values i.e. strings and numbers

  set(index, value) - complex values i.e objects, arrays etc...

- Add a value to the hash table.

  - Strings and Numbers can be added to the has table by supplying one argument to set.

```JAVASCRIPT
    let hashTable = new HashTable();

    hashTable.set('Hello');
    hashTable.set(327);
    hashTable.set(467.937383);
```    
  - An object can be added to the hash table by supplying an index value

```JAVASCRIPT
    let hashTable = new HashTable();

    let user = {
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Mr. Winkie';
    }

     let friend = {
      name: 'Mr. Winkie',
      relationship: 'pet'
    }

    hashTable.set(user.id, user);
    hashTable.set(friend.name, friend);
```    

- Duplicate index values will be overwritten.  

  - This can be used to update an object without deleting and then setting

```JAVASCRIPT
    let hashTable = new HashTable();

    let user = {
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Mr. Winkie';
    }

    hashTable.set(user.id, user);

    console.log( hashTable.get(1438494384)

    `{
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Mr. Winkie';
    }`


    let userUdate = {
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Squirrel Head';
    }

    hashTable.set(userUdate.id, userUdate);

    console.log( hashTable.get(1438494384)

    ` {
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Squirrel Head';
    }`
```

- A Type Error is thrown for index values that are not strings or numbers.


### Get

- Fetch a value using the same index value that was used to set the value

- Null is returned for index values that don't exist


```JAVASCRIPT
    let hashTable = new HashTable();

    let user = {
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Mr. Winkie';
    }

    hashTable.set(user.id, user);

    console.log( hashTable.get(1438494384)

    `{
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Mr. Winkie';
    }`

    hashTable.set('Kevin');
    hasTable.get('Kevin');  // 'Kevin'

    hashTable.set(327);
    hasTable.get(327);  // 327

    hasTable.get('oops');  // null

```

### Remove

- Delete a value from the hash table.  

- The method returns the value of the removed item.

- A Type Error is thrown for index values that are not strings or numbers.

```JAVASCRIPT
    let hashTable = new HashTable();

    let user = {
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Mr. Winkie';
    }

    hashTable.set(user.id, user);

    console.log(hashTable.remove(1438494384)

    `{
      id: 1438494384,
      name: 'kevin',
      pet_name: 'Mr. Winkie';
    }`

    hashTable.set('Kevin');
    hasTable.remove('Kevin');  // 'Kevin'

    hashTable.set(327);
    hasTable.remove(327);  // 327

    hasTable.remove('oops');  // null

```

### Type Error

```JAVASCRIPT
  let hashTable = new HashTable();
  
  hashTable.set([1,2,3])s
  'Type Error: expecting string or number'
```


