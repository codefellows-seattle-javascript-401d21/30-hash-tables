'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#Solution.hash', function() {
    it('should return a hash integer used as array index', function() {
      expect(solution.hash('hello')).toEqual(5)
    })
    describe('#Solution.set', function() {
      it('should return a bucket with a sll at index 5', function() {
        expect(solution.set('hello', 'world')).toEqual( {'buckets': [undefined, undefined, undefined, undefined, undefined, {'key': 'hello', 'next': null, 'value': 'world'}, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]})
      })
      it('should return a bucket with a sll at index 25', function() {
        expect(solution.set('foo', 'bar')).toEqual( {'buckets': [undefined, undefined, undefined, undefined, undefined, {'key': 'hello', 'next': null, 'value': 'world'}, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, {'key': 'foo', 'next': null, 'value': 'bar'}, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]})
      })
      it('should return a bucket with two sll nodes at index 25', function() {
        expect(solution.set('foo', 'too')).toEqual(  {'buckets': [undefined, undefined, undefined, undefined, undefined, {'key': 'hello', 'next': null, 'value': 'world'}, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, {'key': 'foo', 'next': {'key': 'foo', 'next': null, 'value': 'too'}, 'value': 'bar'}, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]})
      })
      describe('#Solution.get', function() {
        it('should return null if key not found', function() {
          expect(solution.get('wat?')).toEqual(null)
        })
        it('should return a value of world', function() {
          expect(solution.get('hello')).toEqual('world')
        })
      })
      describe('#Solution.remove', function() {
        it('should return null if key not found', function() {
          expect(solution.remove('wat?')).toEqual(null)
        })
      })
    })
  })
})
