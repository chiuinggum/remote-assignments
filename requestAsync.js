const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const https = require('https');

function requestCallback(url, callback) {
    https.get(url, res => {
        let body = '';
        //callback(res.statusCode);
        res.on('data', data => {
            body += data.toString();
        })
        res.on('end', () => {
            callback(JSON.parse(body).data);
        })
    })
}

function requestPromise(url) {
    const prom = new Promise((resolve, reject) => {
        const request = https.get(url, res => {
            let body = '';
            res.on('data', data => {
                body += data.toString();
            })
            res.on('end', () => {
                resolve(JSON.parse(body).data);
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