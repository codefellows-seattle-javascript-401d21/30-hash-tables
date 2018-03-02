'use strict';

class Node { 
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        return this; // O(1)
    }
}

module.exports = Node;