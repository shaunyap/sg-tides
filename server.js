var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var tide = require('./tide.js');
var moment = require('moment');

var nextTide;
var tideTime;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views')

app.get('/',  function(req, res) {
    tide().then(function (body) {
        // make lower case
            nextTide = body.extremes[1].type.toLowerCase();
            tideTime =  moment.unix(body.extremes[1].dt).format("h:mm a");
    }).then(function() {
        res.render('main', {
         message: nextTide,
         time: tideTime
     });
 });
});

app.use(express.static(__dirname + '/public'))

app.listen(PORT, function () {
  console.log('starting server at port ' + PORT +'..');
});
