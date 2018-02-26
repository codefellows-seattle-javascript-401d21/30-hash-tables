'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#', function() {
    it('should return a hash integer used as array index', function() {
      expect(solution.hash('abcde')).toEqual(30)
    })
    describe('#', function() {
      it('should return a bucket with a sll at index 30', function() {
        expect(solution.set('abcde', 'hello')).toEqual( {'buckets': [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, {'key': 'abcde', 'next': null, 'value': 'hello'}]})
      })
    })
  })
})
