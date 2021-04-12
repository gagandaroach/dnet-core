const mongoose = require('mongoose');

const HitSchema = mongoose.Schema({
    host: {
        type: String,
        required: true
    },
    route: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Hits', HitSchema);
