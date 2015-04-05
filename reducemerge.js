var flyd = require('flyd');

function update(s, pairs, i, v) {
  s(pairs[i][1](s.val, v));
}

module.exports = flyd.curryN(2, function(pairs, value) {
  var s = flyd.stream(value); 
  for (var i = 0; i < pairs.length; ++i) {
    flyd.map(update.bind(null, s, pairs, i), pairs[i][0]);
  }
  return s;
});
