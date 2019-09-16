const fs = require("fs");
const needle = require('needle');
const tunnel = require('tunnel');

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
                host: Base.server,
                port: Base.serverPort,
                proxyAuth: Base.serverUserName + ':' + Base.serverPassword,
            }
        });
        let data = {
            chat_id: Base.apiTelegramechatId,
            photo: fs.readFileSync(photo)
        };

        let options = {
            multipart: true,
            agent: myAgent
        };

        return needle.post('https://api.telegram.org/bot' + Base.apiTelegrameKey + '/sendPhoto', data, options);
    }
}

Base.email = 'info@dataroot.ru';
Base.password = '1234qweR';
Base.company = 'obnyal02';
Base.apiTelegrameKey = '879787453:AAHtgq_sivWNBZ3TybePNMIqDSGA1vuBDRk';
Base.apiTelegramechatId = '-1001311780422';
Base.server = '45.91.160.165';
Base.serverPort = 2429;
Base.serverUserName = 'user28804';
Base.serverPassword = 'm40rtq';