var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelBookingsSchema = new schema({

    roomId :{
        type : mongoose.Types.ObjectId,
        ref : 'Room'
    },
    date: {
        type: String,
       
    },
    customerId : {
        type : mongoose.Types.ObjectId,
        ref : 'Tourist'

    },
     hotelId : {
        type : mongoose.Types.ObjectId,
        ref : 'Hotel'
     },

     hotelManager :{
        type : mongoose.Types.ObjectId,
        ref : 'HotelManager'
     }
   
});
module.exports = mongoose.model('HotelBookings', hotelBookingsSchema);
  