const fs = require('fs');
const path = require('path');
const express = require('express')
const app = module.exports = express();
const listen_port = 3001
const routesDaroachnet = require('./routes/dnet')

var apiKeys = [];

// Load keys from text file apikeys.txt
fs_data = fs.readFileSync("apikeys.txt");
fs_data.toString().split("\n").forEach(function (line, index, arr) {
    if (index === arr.length - 1 && line === "") { return; }
    apiKeys.push(line.trim());
});

function error(status, msg) {
    var err = new Error(msg);
    err.status = status;
    return err;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.use('/dnet', function (req, res, next) {
    var key = req.query['api-key'];

    if (!key) return next(error(400, 'api key required'));

    if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));

    req.key = key;
    next();
});

app.use('/dnet', routesDaroachnet)

app.get('/dnet', (req, res) => {
    var text = `usage: <>`
    res.send(text)
})

app.listen(listen_port, () => {
    console.log('dnet2_api')
    console.log("Loaded " + apiKeys.length + " api keys from text file.");
    console.log(`listening at http://localhost:${listen_port}`)
})