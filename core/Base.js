const fs = require("fs");
const needle = require('needle');
const tunnel = require('tunnel');
const obj = JSON.parse(fs.readFileSync("env.json", "utf8"));
const server = obj.server;
const serverPort = obj.serverPort;
const serverUserName = obj.serverUserName;
const serverPassword = obj.serverPassword;

const email = obj.email;
const password = obj.password;
const company = obj.company;

const apiTelegrameKey = obj.apiTelegrameKey;
const apiTelegramechatId = obj.apiTelegramechatId;

export default class Base {
    static getMonth(value) {
        switch (value) {
            case 0:
                return "Январь";
            case 1:
                return "Февраль";
            case 2:
                return "Март";
            case 3:
                return "Апрель";
            case 4:
                return "Май";
            case 5:
                return "Июнь";
            case 6:
                return "Июль";
            case 7:
                return "Август";
            case 8:
                return "Сентябрь";
            case 9:
                return "Октябрь";
            case 10:
                return "Ноябрь";
            case 11:
                return "Декабрь";
        }
    }

    static sendPhoto(photo) {
        let myAgent = tunnel.httpsOverHttp({
            proxy: {
                host: server,
                port: serverPort,
                proxyAuth: serverUserName + ':' + serverPassword,
            }
        });
        let data = {
            chat_id: apiTelegramechatId,
            photo: fs.readFileSync(photo)
        };

        let options = {
            multipart: true,
            agent: myAgent
        };

        return needle.post('https://api.telegram.org/bot' + apiTelegrameKey + '/sendPhoto', data, options);
    }
}
    Base.email = email;
    Base.password = password;
    Base.company = company;
