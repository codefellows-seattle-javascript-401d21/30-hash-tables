'use strict';

const SLL = require('../lib/SLL');

describe('singly linked list', () => {
  describe('constructor', () => {
    it('should return back a singly linked singlyLinkedList object when the constructor is called', () => {
      let singlyLinkedList = new SLL();
      expect(singlyLinkedList).toBeInstanceOf(SLL);
      expect(singlyLinkedList.head).toBe(null);
      expect(singlyLinkedList.length).toBe(0);
    });

    it('should return a SLL object that is also an object', () => {
      let singlyLinkedList = new SLL();
      expect(typeof singlyLinkedList).toBe('object');
    });

  });

  describe('insert method', () => {
    describe('Valid', () => {
      it('should have value 1 in the first node, 2 in the second node, and 3 in the third node', () => {
        let singlyLinkedList = new SLL();
        singlyLinkedList.insert(3);
        singlyLinkedList.insert(2);
        singlyLinkedList.insert(1);

        expect(singlyLinkedList.head.value).toEqual(1);
        expect(singlyLinkedList.head.next.value).toEqual(2);
        expect(singlyLinkedList.head.next.next.value).toEqual(3);
      });

      it('should increment the length of the singlyLinkedList when a node is inserted', () => {
        let singlyLinkedList = new SLL();
        [...Array(100).fill(0)].map(val => singlyLinkedList.insert(val));

        expect(singlyLinkedList.length).toBe(100);
        singlyLinkedList.insert(10);
        expect(singlyLinkedList.length).toBe(101);
      });

    });

    describe('Invalid', () => {
      it('should refuse to add null, undefined, or NaN to the singlyLinkedList', () => {
        let singlyLinkedList = new SLL();
        expect(singlyLinkedList.insert(null).length).toBe(0);
        expect(singlyLinkedList.insert(undefined).length).toBe(0);
        expect(singlyLinkedList.insert(NaN).length).toBe(0);
      });
    });
  });

  describe('find method', () => {
    describe('Valid', () => {
      let singlyLinkedList = new SLL();
      singlyLinkedList.insert({ key: 5, value: 'five' });
      singlyLinkedList.insert({ key: 4, value: 'four' });

      it('should properly return back the last item in the sll', () => {
        let result = singlyLinkedList.find(value => value.key === 5);
        expect(result.value).toEqual('five');
      });

    });

    describe('Invalid', () => {
      it('should return null if find is called on an empty sll', () => {
        let singlyLinkedList = new SLL();
        expect(singlyLinkedList.find(item => item === 0)).toBe(null);
      });

      it('should return null if the item to be found does not exist', () => {
        let singlyLinkedList = new SLL();
        singlyLinkedList.insert(10);

        expect(singlyLinkedList.find(item => item === 100)).toEqual(null);
      });

    });
  });

  describe('remove method', () => {
    describe('Valid', () => {
      it('should work with more complex data then simply numbers/strings', () => {
        let singlyLinkedList = new SLL();
        singlyLinkedList.insert({ key: 1, data: 'one' });
        singlyLinkedList.insert({ key: 2, data: 'two' });
        singlyLinkedList.insert({ key: 3, data: 'three' });

        let node = singlyLinkedList.remove(item => item.key === 2);
        expect(node.value.data).toBe('two');
        expect(singlyLinkedList.length).toBe(2);
        expect(singlyLinkedList.head.value.data).toBe('three');
        expect(singlyLinkedList.head.next.value.data).toBe('one');
      });

      it('should properly remove the head when requested', () => {
        let singlyLinkedList = new SLL();
        singlyLinkedList.insert({ key: 3, data: 'three' });
        singlyLinkedList.insert({ key: 4, data: 'four' });

        let node = singlyLinkedList.remove(item => item.key === 3);
        expect(singlyLinkedList.length).toBe(1);

      });

    });

    describe('Invalid', () => {
      it('should return null if remove is called on an empty Sll', () => {
        let singlyLinkedList = new SLL();
        expect(singlyLinkedList.remove(item => item === 0)).toBe(null);
      });

      it('should return null if the item to be removed does not exist', () => {
        let singlyLinkedList = new SLL();
        singlyLinkedList.insert(10);

        expect(singlyLinkedList.remove(item => item === 100)).toEqual(null);
      });

    });
  });
});