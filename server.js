var express     = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser  = require('body-parser');

var app         = express();

var port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app, {});
app.listen(port, function(){
  console.log("hello world!" + port);
});
