
var home = require('../app/controllers/home_controller.js');
var score = require('../app/controllers/score_controller.js');

module.exports = function(app) {
  app.get('/', home.index);
  app.post('/post', score.post);
}
