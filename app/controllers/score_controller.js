var mongoose = require('mongoose');
var score = mongoose.model('Score');

exports.post = function(req, res) {
  return res.send('here');
}
