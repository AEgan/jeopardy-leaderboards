var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  name: {type: String, required: true},
  score: {type: Number, required: true}
});

mongoose.model('Score', ScoreSchema);
module.exports.Score = mongoose.model('Score', ScoreSchema);
module.exports.Schema = ScoreSchema;
