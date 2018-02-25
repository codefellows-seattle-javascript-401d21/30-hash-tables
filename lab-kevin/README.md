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

### Set - add a value


```JAVASCRIPT
{subject: 'talking computers', comment: 'I don\'t like them'}

```

### Get - fetch one value

  - Get a json object of a note by sending its unique id as a path to /api/v1/note/&lt;unique_id&gt;


### Remove

- Delete a value from the hash table.  

- The method returns the value of the removed item.

- A Type Error is thrown for index values that are not strings or numbers.


