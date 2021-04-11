const express = require('express')
const Hit = require('../models/Hit');

const router = express.Router();

router.get('/hits', async (req, res) => {
    console.log("/dnet2/hits GET");
    try {
        Hit.find({}, function (err, docs) {
            res.json(docs);
        })
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/hits', async (req, res) => {
    console.log("/dnet2/hits POST");
    console.log("Body: ", req.body)
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