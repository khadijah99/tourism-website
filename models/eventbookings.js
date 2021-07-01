var mongoose = require('mongoose');

var schema = mongoose.Schema;

var eventBookingsSchema = new schema({

    eventId : {
        ref : 'Event'
    },

    customerId :{
        ref : 'Tourist'
    },

    status : {
        type : String
    }
   
});
module.exports = mongoose.model('EventBookings', hotelSchema);
