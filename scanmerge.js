var flyd = require('flyd');

module.exports = flyd.curryN(2, function(pairs, acc) {
  var streams = pairs.map(function(p) { return p[0]; });
  var fns = pairs.map(function(p) { return p[1]; });
  return flyd.stream(streams, function(self, changed) {
    if (changed !== undefined) {
      var idx = streams.indexOf(changed);
      acc = fns[idx](acc, changed());
    }
    return acc;
  }, true);
});
