'use strict';

module.exports = class {
  constructor(value) {
    if(!value) return new Error('Value must be passed as argument');
    this.value = value;
    this.next = null;
  }
};