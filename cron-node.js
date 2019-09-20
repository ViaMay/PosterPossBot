let cron = require('node-cron');
const childProcess = require('child_process');
const process = require('process');

cron.schedule('00 00 0-23 * * *', () => {
    console.log("1");
   let log = childProcess.exec('npm test').toString();
   console.log(log);
});