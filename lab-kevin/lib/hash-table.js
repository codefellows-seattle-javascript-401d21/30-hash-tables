'use strict';

import SLL from './sll.js';

class HashTable {
  constructor(size=1024){
    this.size = size;
    this.buckets = [];
    this.bucket = null;
    this.hashIndex = null;
    this.typeError = null;
  }

  hash(val){
    this.isTypeError(val);
    if(this.typeError) return this.typeError;
    let hashBase = val;
    if(typeof val === 'string'){
      hashBase = val.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    } 
    this.hashIndex = this.size % hashBase;
  }

  set(indexValue, value){
    if(!indexValue && !value) return new Error('Type Error: expecting string or number');
    this.isTypeError(indexValue);
    if(this.typeError) return this.typeError;

    if(!value) value = indexValue;
    this.hash(indexValue);
    this.bucket = this.buckets[this.hashIndex];
    if (!this.bucket) this.bucket = this.buckets[this.hashIndex] = new SLL();
    this.bucket.insertHead({indexValue: indexValue, value: value});
  }

  get(indexValue){
    this.isTypeError(indexValue);
    if(this.typeError) return this.typeError;

    this.hash(indexValue);
    this.bucket = this.buckets[this.hashIndex];
    if (!this.bucket) return null;
    return this.getBucketValue(indexValue);
  }

  delete(indexValue){
    this.isTypeError(indexValue);
    if(this.typeError) return this.typeError;
    this.hash(indexValue);
    this.bucket = this.buckets[this.hashIndex];
    return  this.deleteBucketValue(indexValue);
  }

  isTypeError(arg){
    if (typeof arg !== 'string' || typeof arg !== 'number' || !arg) this.typeError = new Error('Type Error: expecting string or number');
  }

  getBucketValue(indexVal){
    let node = this.bucket.head;
    while(node){
      if( node.value.indexValue === indexVal ){
        return node.value.value;
      } 
      node = node.next;
    }
    return null;
  }

  deleteBucketValue(indexVal){
    let node = this.bucket.head;
    let prev_node = null;
    while(node){
      if( node.value.indexValue === indexVal ){
        let nodeValue = node.value.value;
        prev_node ? prev_node.next = node.next : delete this.bucket;
        return nodeValue;
      } 
      prev_node = node;
      node = node.next;
    }
    return null;
  }
}

export default HashTable;
