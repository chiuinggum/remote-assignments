const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const https = require('https');

function requestCallback(url, callback) {
    const startTime = new Date().getTime();
    https.get(url, res => {
        let body = '';
        res.on('data', data => {
            body += data.toString();
        })
        res.on('end', () => {
            const exeTime = JSON.parse(body).data * 1000 - startTime;
            callback(exeTime);
        })
    })
}

function requestPromise(url) {
    const startTime = new Date().getTime();
    const prom = new Promise((resolve, reject) => {
        const request = https.get(url, res => {
            let body = '';
            res.on('data', data => {
                body += data.toString();
            })
            res.on('end', () => {
                const exeTime = JSON.parse(body).data * 1000 - startTime;
                resolve(exeTime);
            })
        });
        request.on('error', err => {reject(err);});
    });
    return prom;
}

async function requestAsyncAwait(url) {
    try {
        const data = await requestPromise(url);
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}

requestCallback(url, console.log);
requestPromise(url).then(console.log);
requestAsyncAwait(url);