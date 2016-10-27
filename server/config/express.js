/**
 * Created by Amit on 27/10/16.
 */


var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var controllers = require('../controllers');
var setHeaders = require('../middlewares/response-headers');
var responseTimeLogger = require('../middlewares/response-time-log');
var errorHandlers = require('../middlewares/error-handlers');




module.exports = function(app, config){
    var env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';

    /*express middle layers functionality*/
    app.use(responseTimeLogger);
    app.use(setHeaders);
    app.use(express.static(path.resolve(__dirname, '../../client/dist')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(controllers);

    errorHandlers(app);
}