'use strict';

module.exports = class {
  constructor(value=null) {
    if (!value && value !== 0)
      throw new Error('invalid datatype');
    this.value = value;
    this.next = null;
  }
};