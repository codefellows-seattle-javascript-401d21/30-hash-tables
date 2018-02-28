'use strict';

const nd = require('./nd');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        return this; // O(1)
    }

    insertHead(key, value) {
        let newNode = new nd(key, value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this; // O(n), it's inserted in front without iterating
    }

    insertEnd(key, value) {
        let newNode = new nd(key, value);
        
        if(!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }
        
        for(var itr = this.head ; itr.next ; itr = itr.next);
        itr.next = newNode;
        this.length++;
        return this; // O(1), if it's only one node. O(n), if it iterates to the end.
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        
        while(!this.head) {
            if(current.next) {
                next = current.next;
            } else {
                next = null;
            }

            if(previous) {
                current.next = previous;
            } else {
                current.next = null;
            }

            previous = current;

            if(next) {
                current = next;
            } else {
                this.head = current;
            }
        }
        return this; // O(n), it has to iterate the list
    }

    remove(offset) {
        if(!offset || this.head === null) return null;

        if(offset === 1) {
            this.head = this.head.next;
            this.length--;
            return this;
        }
        let current = this.head;
        let previous = null;

        for(var node = 1 ; node <= offset ; node++) {
            if(node === offset) {
                previous.next = current.next;
                this.length--;
                return this; // O(n), it iterates through the list to find the node to remove
            }
            previous = current;
            current = current.next;
        }
    }
}

module.exports = SinglyLinkedList;