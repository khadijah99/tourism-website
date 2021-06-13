var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelBookingsSchema = new schema({
    Id: {
        type: String,
        required: true,
    },
    room :{
        type : mongoose.Types.ObjectId,
        ref : 'Room'
    },
    date: {
        type: String,
        required: true
    },
    customer : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'

    },

    facilities : [String],
});
module.exports = mongoose.model('HotelBookings', hotelBookingsSchema);
  