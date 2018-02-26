'use strict'

const solution = module.exports = {}

class HashTable {
  constructor(size) {
    this.buckets = Array(size)
  }
}
var hashTable = new HashTable(31)

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

solution.hash = function(key) {
  // converts a string into a number that will index your buckets
  return (key.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % 31
}

solution.set = function(key, value) {
  // stores a value in the hashed keys bucket
  let index = solution.hash(key)
  if (!hashTable.buckets[index]) {
    hashTable.buckets[index] = new Node(key, value)
  } else {
    let node = hashTable.buckets[index]
    while (node.next) {
      console.log(node)
    }
    hashTable.buckets[index].next = new Node(key, value) 
  }
  return hashTable
}

solution.get = function(key) {
  // looks in the hashed keys bucket and returns the value of the node containing the key, or null if not found
  let index = solution.hash(key)
  if (!hashTable.buckets[index]) return null
  let node = hashTable.buckets[index]
  while (node) {
    if (node.key === key) return node.value
    node = node.next
  }
}

solution.remove = function(key) {
  // removes the sll node node containing the key
  let index = solution.hash(key)
  if (!hashTable.buckets[index]) return null
  
  let node = hashTable.buckets[index]
}