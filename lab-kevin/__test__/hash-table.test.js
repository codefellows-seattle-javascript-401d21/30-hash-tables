'use strict';

import HashTable from '../lib/hash-table.js';

describe('Hash Table test', function(){

  describe('Valid input', function(){
    it('Should exist', () => {
      expect(HashTable).toBeDefined();
    });

    it('Should exist', () => {
      expect(new HashTable()).toBeInstance('Class');
    });
  
  });

});