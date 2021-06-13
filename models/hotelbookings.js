var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelBookingsSchema = new schema({

    roomID :{
        type : mongoose.Types.ObjectId,
        ref : 'Room'
    },
    date: {
        type: String,
        required: true
    },
    customerID : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'

    },

    facilities : [String],
});
module.exports = mongoose.model('HotelBookings', hotelBookingsSchema);
  