## HashTable
This is a Hash Table data structure constructor.
It takes an number input(more than 0) as its size.
Data is implemented by a method called separate chaining with an array of singly linked lists to deal with collision.

#### Installation
1. Clone this repo in your desired location
```
git clone <this repo's clone address>
```
2. Run to install all dependencies
```
npm install
```

#### Test
1. Run
```
npm test
```

#### Example
- Constructor method - This is a constructor of an instance of hash table.
    * ```new HashTable(size);```
        * Default size value: 1024
        * Valid input: size > 0
        * Invalid input: size <= 0 throws an error
- Hash method - This hashes an input.
    * ```hash_table_instance.hash(key);```
        * Valid input: Anything that is typeof 'string'
        * Invalid input: Anything that is not typeof 'string' throws an error
- Set method - This add a value under key position
    * ```hash_table_instance.set(key, value);```
        * Conditions for key input is same with hash method
            * If a key exists in a singly linked list, it replaces a value with a new one. If not, it inserts it in head of the singly linked list.
        * No condition for value
- Get method - This get a value for a given key
    * ```hash_table_instance.get(key);```
        * Conditions for key input is same with hash method
        * If it doesn't exist, it returns null.
- Remove method - This removes key-value data from a singly linked list
    * ```hash_table_instance.remove(key);```
        * Conditions for key input is same with hash method
        * If it doesn't exist, it returns null.
