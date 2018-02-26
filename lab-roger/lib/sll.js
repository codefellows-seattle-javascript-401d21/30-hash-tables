'use strict';

const Nb = require('./nodebuild');

class NewList {
  constructor() {
    this.head = null;
  }

  createHeadNode(key,value) {
    if(!value) return null;
    let newNode = new Nb(key, value);

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  

  removeNode(key) {
    if(!key) return null;
    if(!this.head) {
      return this;
    }
    let testNode = this.head;
    while(testNode.next.key != key) {
      testNode = testNode.next;
    }
    testNode.next = testNode.next.next;
    return this;

  }
  findNode(key) {
    if(!key) return null;
    if(!this.head) {
      return null;
    }
    let testNode = this.head;
    while(testNode.next !== null) {
      
      if(testNode.key === key) return testNode.value;
      testNode = testNode.next;
    }
    
    return null;

  }
  
  

}

module.exports = NewList;