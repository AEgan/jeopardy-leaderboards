var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', 'app/views');
app.set('view engine', 'ejs');

var dbString = process.env.MONGOLAB_URI || "mongodb://localhost/development";
mongoose.connect(dbString);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + dbString);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

require('./config/routes')(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);
