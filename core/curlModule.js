const fs = require("fs");
const needle = require('needle');
const tunnel = require('tunnel');
const sleep = require('system-sleep');
const obj = JSON.parse(fs.readFileSync("env.json", "utf8"));
const server = obj.server;
const serverPort = obj.serverPort;
const serverUserName = obj.serverUserName;
const serverPassword = obj.serverPassword;


module.exports =  {
    sendFile : function (username, password, waitforTimeout){
        let myAgent = tunnel.httpsOverHttp({
        proxy: {
            host: server,
            port: serverPort,
            proxyAuth: serverUserName + ':' + serverPassword,
        }
    });
    let data = {
        file: {
            buffer: fs.readFileSync('./app/app.apk'),
            filename: 'app.apk',
            content_type: 'apk'
        }
    };

    let options = {
        username: username,
        password: password,
        multipart: true,
        agent: myAgent
    };

    let response = "";
    console.log("start");
    needle.post('https://api-cloud.browserstack.com/app-automate/upload', data, options, function(error, resp, body) {
        if (error) throw new Error(error);
        response = resp.body;
        console.log(resp.body);
    });

    let i = 0;
    while(true) {
        if (response!== "")
            return response;
        sleep(1000);
        if (i === waitforTimeout/1000)
            throw new Error(console.log('time send app file is over'));
        i = i + 1;
        console.log(i);
        console.log(response.body);
    }
    }
};


