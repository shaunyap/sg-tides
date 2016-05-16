var request = require('request');
var url =
    'https://www.worldtides.info/api?extremes&lat=1.352&lon=103.820&key=ef32e033-028d-4fbb-bb76-daec233d7392'

module.exports = function() {
    return new Promise(function(resolve, reject) {
        request({
            url: url,
            json: true
        }, function(error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    })

};
