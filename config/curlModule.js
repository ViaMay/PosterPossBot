const fs = require("fs");
const needle = require('needle');
const sleep = require('system-sleep');

module.exports = (username, password, waitforTimeout) => {
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
        multipart: true
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
};

