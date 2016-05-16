var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var tide = require('./tide.js');
var moment = require('moment');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views')

app.get('/', function(req, res) {
    tide().then(function(body) {
        tides = body.extremes;
        tideDate = new Date(tides[0].dt * 1000);
        tideDay = tideDate.getDate();
        monthNames = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"
        ];
        tideMonth = monthNames[tideDate.getMonth()];
        dateString = tideDay + ' ' + tideMonth;
    }).then(function() {
        res.render('main', {
            date: dateString
        });
    });
});

app.use(express.static(__dirname + '/public'))

app.listen(PORT, function() {
    console.log('starting server at port ' + PORT + '..');
});
