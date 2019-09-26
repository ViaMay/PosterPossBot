let cron = require('node-cron');
const childProcess = require('child_process');
const process = require('process');

cron.schedule('00 57 9 * * *', () => {
    console.log("1");
   let log = childProcess.exec('npm test').toString();
   console.log(log);
}, {
    scheduled: true,
    timezone: "Asia/Yekaterinburg"
});