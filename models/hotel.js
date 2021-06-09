var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    rooms : [{
        type: mongoose.Types.ObjectId,
        ref : 'Room'

    }]
});
module.exports = mongoose.model('Hotel', hotelSchema);
