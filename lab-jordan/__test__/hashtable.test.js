const HashTable = require('../lib/hashtable.js');

let table = new HashTable (5);


describe('hash table', () => {

  it('should create 10 empty array items when size is specified as 10', () => {
    let empty = {
      "memory": [undefined, undefined, undefined, undefined, undefined],
      "size": 5
    }
    expect(table).toEqual(empty)
  })

  it('should create 10 empty array items when size is specified as 10', () => {
    table.set('fish', 5)
    table.set('aaa', 6)
    let empty = {
      "memory": [undefined, undefined, {"head": {"next": null, "value": 5}}, {"head": {"next": null, "value": 6}}, undefined],
      "size": 5
    }
    expect(table).toEqual(empty)
  })
  it('should remove all nodes from a specified bucket', () => {
    table.remove('')
    let empty = {
      "memory": [undefined, undefined, {"head": {"next": null, "value": 5}}, {"head": {"next": null, "value": 6}}, undefined],
      "size": 5
    }
    expect(table).toEqual(empty)
  })
})
