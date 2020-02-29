const mongoose = require('mongoose');

const uri = ''; //define uri

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function () {
    return `http://${uri}/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);