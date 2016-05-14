var request = require('request');
var url =
    'https://www.worldtides.info/api?extremes&lat=1.352&lon=103.820&key=ef32e033-028d-4fbb-bb76-daec233d7392'

// module.exports = function getTide() {
//     request({
//         url: url,
//         json: true
//     }, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             body.extremes.forEach(function(tide) {
//                 var date = moment.unix(tide.dt).format(
//                     "Do MMM");
//                 var time = moment.unix(tide.dt).format(
//                     "h:mm a");
//                 console.log('The next ' + tide.type +
//                     ' tide will be on ' + date + ' at ' +
//                     time + '. The tide height will be ' +
//                     tide.height.toFixed(2) + 'm.');
//             });
//         }
//     });
// }

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
