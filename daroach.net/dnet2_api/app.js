const fs = require('fs');
const express = require('express')
const app = module.exports = express();
const port = 3001

const { MongoClient } = require('mongodb');
var nano = require('nano')('http://admin:password@dt49:5984')
var hits = nano.db.use('hits')

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
    var text = "Hello";
    res.send(text)
})

app.use('/dnet', function (req, res, next) {
    var key = req.query['api-key'];

    if (!key) return next(error(400, 'api key required'));

    if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));

    req.key = key;
    next();
});

app.get('/dnet/hits', (req, res) => {
    var text = 'hits dummy'
    MongoClient.connect(dburi, (err, db) => {
        if (err) return console.error(err)
        console.log('Connected to Database');
    })
    res.send(text)
})

app.post('/dnet/hits', (req, res) => {
    var text = 'hits dummy'
    //connect db
    //add hit to page
    res.send(text)
})

app.get('/dnet', (req, res) => {
    var text = `usage: <>`
    res.send(text)
})

app.listen(port, () => {
    console.log('dnet2_api')
    console.log("Loaded " + apiKeys.length + " api keys from text file.");
    console.log(`listening at http://localhost:${port}`)
})