const express = require('express')
const cors = require('cors')
const fs = require('fs');
const path = require('path');
const { urlencoded } = require('body-parser');

const listen_port = 3001
const routesDaroachnet = require('./routes/hits');

const app = module.exports = express();
app.use(cors())
app.use(express.json());
app.use(urlencoded());

function load_file(filename) {
    let array = [];
    fs_data = fs.readFileSync(filename);
    fs_data.toString().split("\n").forEach(function (line, index, arr) {
        if (index === arr.length - 1 && line === "") { return; }
        array.push(line.trim());
    });
    return array;
}

const mongoose = require('mongoose');
async function init_mongoose() {
    const uri = load_file('dburi.txt')[0];
    console.log(uri)
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        dbName: 'daroachnet'
    });
}


var apiKeys = load_file("apikeys.txt");

function error(status, msg) {
    var err = new Error(msg);
    err.status = status;
    return err;
}

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.use('/dnet', function (req, res, next) {
    var key = req.query['api-key'];

    if (!key) return next(error(400, 'api key required'));

    if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));
    req.key = key;
    next();
});

app.use('/dnet', function (req, res, next) {
    console.log(req.hostname + " " + req.method);
    console.log(req.body);
    next();
})

app.use('/dnet', routesDaroachnet)

app.get('/dnet', (req, res) => {
    var text = `usage: <>`
    res.send(text)
})

app.listen(listen_port, async () => {
    console.log('dnet2_api')
    console.log("Loaded " + apiKeys.length + " api keys from text file.");
    init_mongoose();
    console.log(`listening at http://localhost:${listen_port}`)
})