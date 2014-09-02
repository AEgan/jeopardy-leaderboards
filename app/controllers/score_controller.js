var mongoose = require('mongoose');
var Score = mongoose.model('Score');

exports.post = function(req, res) {
  console.log(req.param('name'));
  console.log(req.param('score'));
  var score = new Score({
    name: req.param('name'),
    score: req.param('score')
  });
  score.save(function(err, created_obj) {
    if(err) {
      console.log('error');
      return res.send('error');
    } else {
      return res.send(JSON.stringify(created_obj));
    }
  });
}
