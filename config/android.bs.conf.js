const waitforTimeout = 360000;
const curlModule = require('./curlModule');
const password = 'd6n7zPHYzt29G4sqTLhG';
const username = 'bsuser53510';

exports.config = {
    specs: [
        './script/tests.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        app:  curlModule(username, password, waitforTimeout).app_url,
        device : 'Google Nexus 6',
        os_version : '6.0',
        build: 'Node Android',
        name : 'AndroidTest',
        appPackage: 'com.poster_manage.app',
        appActivity: 'com.poster_manage.app.MainActivity',
        appWaitActivity: 'com.poster_manage.app.MainActivity',
        autoGrantPermissions: true,
        waitForTimeout: waitforTimeout,
        newCommandTimeout: waitforTimeout,
    }],

    hostname: 'hub.browserstack.com',
    user :  username,
    key: password,

    logLevel: 'verbose',
    coloredLogs: true,
    waitforTimeout: waitforTimeout,
    framework: 'mocha',
    mochaOpts: {
        compilers: ['js:babel-register'],
        ui: 'bdd',
        timeout: waitforTimeout
    },
    before: () => {
        let chai = require('chai');
        global.expect = chai.expect;
        chai.expect();
    }
};
