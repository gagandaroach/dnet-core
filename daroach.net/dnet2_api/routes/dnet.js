const express = require('express')
const { MongoClient } = require('mongodb');

const dburi = "mongodb://dtbot:bananarepublic123@dt49.daroach.lan:27017";
// const dburi = "mongodb://apibot:longblackhair666@dt49.daroach.lan:27017/daroachnet";

const router = express.Router();

router.get('/hits', (req, res) => {
    var text = 'hits dummy'
    MongoClient.connect(dburi, (err, db) => {
        if (err) return console.error(err)
        console.log('Connected to Database');
    })
    res.send(text)
})

router.post('/hits', (req, res) => {
    var text = 'hits dummy'
    //connect db
    //add hit to page
    res.send(text)
})

module.exports = router;