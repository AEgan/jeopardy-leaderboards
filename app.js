var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', 'app/views');
app.set('view engine', 'ejs');

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

require('./config/routes')(app);

app.listen(3000);
console.log("Listening on port 3000");
