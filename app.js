var express = require('express');
var os = require("os");

var hostname = os.hostname();
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! from '+hostname);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
