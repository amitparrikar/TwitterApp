
/**
 * Created by Amit on 27/10/16.
 */

var express = require('express'),
    config = require('./config/config');
    cluster = require('cluster'),
    os = require('os');

if(cluster.isMaster){
    //It's a Master process

    var numWorkers = os.cpus().length;

    for(var i = 0; i < numWorkers; i++ ){
        cluster.fork();
    }

    /**
     * Register callback event 'online' on cluster module when a worker is UP
     */
    cluster.on('online', function(worker){
        console.log('INFO:', 'Worker ' + worker.process.pid + ' is online');
    });

    /**
     * Register callback event 'exit' on cluster module when a worker DIES
     * And restart the died worker process
     */
    cluster.on('exit', function(worker, code, signal){
        console.warn('WARN:', 'Worker ' + worker.process.pid + ' died with code: ' + code + ' and signal:' + signal);
        console.log('INFO:', 'Starting a new worker');
        cluster.fork();
    });
}else{
    //It's a Worker process
    var app = express();


    var twitterProxy = require('twitter-proxy');
    twitterProxy({
        "consumerKey": "4mZPugMl5Pr2c3lxmPk6QG4Wv",
        "consumerSecret": "qPt97wViB3wDJ7sEdmDcYU7qDTLparpO0bsE9fIpm6O2twovlb"
    });



    require('./config/express')(app, config);

    app.listen(config.port, function(){
        console.log('Listening onf port ' + config.port);
    });
}

