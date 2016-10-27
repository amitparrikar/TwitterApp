/**
 * Created by Amit on 27/10/16.
 */
var express = require('express'),
    router = express.Router(),
    Client = require('node-rest-client').Client;

var client = new Client();

/**
 * Get Twitter API data
 */
router.get('/:count?/:screenName?', function(req, res){

    var count = req.params.count || 30;
    var screenName = req.params.screenName || 'appdirect';

    var args = {
        parameters: { count: count, screen_name: screenName }, // query parameter substitution vars
    };

    client.get("http://localhost:7890/1.1/statuses/user_timeline.json", args,
        function (data, response) {
            if(data != null) {
                res.send(JSON.parse(data));
            }
        });
});

module.exports = router;