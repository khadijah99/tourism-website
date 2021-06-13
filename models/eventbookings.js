var mongoose = require('mongoose');

var schema = mongoose.Schema;

var eventBookingsSchema = new schema({

    eventID : {
        ref : 'Event'
    },

    customerID :{
        ref : 'Tourist'
    },
   
});
module.exports = mongoose.model('EventBookings', hotelSchema);
