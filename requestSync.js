// requestSync.js
const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const syncRequest = require('sync-request');

function requestSync(url) {
    // write code to request url synchronously
    try {
        const startTime = new Date().getTime();
        const response = syncRequest('GET', url);
        if(response.statusCode === 200) {
            const body = response.getBody('utf8');
            const exeTime = JSON.parse(body).data * 1000 - startTime;
            console.log(exeTime);
            return null;
        } else {
            console.error("Request failed", response.statusCode);
            return null;
        }
    } catch(err) {
        console.error("Error", err.message);
        return null;
    }
}

requestSync(url);
requestSync(url);
requestSync(url);