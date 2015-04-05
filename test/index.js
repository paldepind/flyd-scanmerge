var assert = require('assert');
var flyd = require('flyd');
var stream = flyd.stream;

var reduceMerge = require('../reducemerge');

describe('reduceMerge', function() {
  it('reduces and merges multiple streams', function() {
    var add = stream();
    var sub = stream();
    var sum = reduceMerge([
      [add, function(sum, n) { return sum + n; }],
      [sub, function(sum, n) { return sum - n; }],
    ], 0);
    add(5); sub(8); sub(4); add(12);
    assert.equal(sum(), 5);
  });
});
