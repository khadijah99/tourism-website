var mongoose = require('mongoose');

var schema = mongoose.Schema;

var packageSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    tourManager: {
        type: mongoose.Types.ObjectId,
        ref: 'TouristManager'
    },

    destinationLocation: {
        type: String,
        required: true,
    },

    pickUpcity: {
        type: String,
        required: true
    },

    features: [{
        type: String
    }],

    images: [
        {
            type: String
        }
    ]



});
module.exports = mongoose.model('Package', packageSchema);
