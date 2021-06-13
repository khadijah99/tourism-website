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

    }],

    bookings : [{
        type : mongoose.Types.ObjectId,
        ref : 'HotelBookings'
    }],

    facilities : [String],
});
module.exports = mongoose.model('Hotel', hotelSchema);
