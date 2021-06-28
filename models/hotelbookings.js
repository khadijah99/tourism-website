var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelBookingsSchema = new schema({

    roomId :{
        type : mongoose.Types.ObjectId,
        ref : 'Room'
    },
    date: {
        type: String,
        required: true
    },
    customerId : {
        type : String

    },
     hotelId : {
        type : mongoose.Types.ObjectId,
        ref : 'Hotel'
     }   
   
});
module.exports = mongoose.model('HotelBookings', hotelBookingsSchema);
  