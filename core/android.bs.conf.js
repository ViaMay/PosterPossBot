const waitforTimeout = 360000;
const curlModule = require('./curlModule');
const fs = require("fs");
const obj = JSON.parse(fs.readFileSync("env.json", "utf8"));
const username = obj.usernameBrowserstack;
const password = obj.passwordBrowserstack;

exports.config = {
    specs: [
        './core/tests.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        app:  curlModule.sendFile(username, password, waitforTimeout).app_url,
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
    connectionRetryTimeout: waitforTimeout,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        compilers: ['js:babel-register'],
        ui: 'bdd',
        timeout: waitforTimeout
    }
};
