var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/',  function(req, res) {
  res.send('<h1>About us.</h1>');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('starting server at port ' + PORT +'..');
});
