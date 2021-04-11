const express = require('express')
const Hit = require('../models/Hit');

const router = express.Router();

router.get('/hits', async (req, res) => {
    try {
        await Hit.find({}, function (err, docs) {
            res.json(docs);
        })
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/hits/:host', async (req, res) => {
    console.log(req.params.host)
    try {
        await Hit.find({
            host: req.params.host
        }, function (err, docs) {
            console.log(docs);
            res.json(docs);
        })
    } catch (err) {
        res.json({ message: err });
    }
})

router.get('/hits/:host/:route', async (req, res) => {
    const filter = {
        host: req.params.host,
        route: req.params.route
    }
    try {
        await Hit.find(filter, function (err, docs) {
            res.json(docs);
        })
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/hits', async (req, res) => {
    const hit = new Hit({
        host: req.body.host,
        route: req.body.route
    });
    try {
        await hit.save();
        res.status(200).send(hit);
    } catch (err) {
        console.log(err);
        res.send("Error in api, see server log.");
    }
})

module.exports = router;