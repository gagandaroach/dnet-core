const express = require('express')
const app = module.exports = express();
const port = 3001

var nano = require('nano')('http://admin:password@dt49:5984')
var hits = nano.db.use('hits')

var apiKeys = ['dnetKey', 's'];

function error(status, msg) {
    var err = new Error(msg);
    err.status = status;
    return err;
}

app.get('/', (req, res) => {
    var text = "Hello";
    res.send(text)
})

app.use('/dnet', function(req, res, next){
    var key = req.query['api-key'];
  
    // key isn't present
    if (!key) return next(error(400, 'api key required'));
  
    // key is invalid
    if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));
  
    // all good, store req.key for route access
    req.key = key;
    next();
  });

app.get('/hits', (req, res) => {
    var text = 'hits dummy'
    res.send(text)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})