var mongoose = require('mongoose');

var schema = mongoose.Schema;

var eventBookingsSchema = new schema({
   

    event : {
        ref : 'Event'
    },

    city: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true,
    },

    customer :{
        ref : 'Tourist'
    },
    

   

    
});
module.exports = mongoose.model('EventBookings', hotelSchema);
