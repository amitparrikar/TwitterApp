/**
 * Created by Amit on 27/10/16.
 */

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'expressapi'
        },
        port: 4000,
        sessionTimeout: 1000*150,
        logLevel: 'debug'
    },
    test: {
        root: rootPath,
        app: {
            name: 'expressapi'
        },
        port: 4000,
        sessionTimeout: 1000*15,
        logLevel: 'debug'
    },
    production: {
        root: rootPath,
        app: {
            name: 'expressapi'
        },
        port: 4000,
        sessionTimeout: 1000*15,
        logLevel: 'debug'
    }
}

module.exports = config[env];