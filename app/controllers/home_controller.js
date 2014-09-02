var mongoose = require('mongoose');
var Score = mongoose.model('Score');

exports.index = function(req, res) {
  Score.find({}).sort({'score': 'desc'}).exec(function(err, scores) {
    if(err) {
      console.log('there was an error getting scores');
      return res.send('there was an error getting scores');
    } else {
      return res.render("home/index", {'scores': scores});
    }
  });
}
