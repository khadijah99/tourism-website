var mongoose = require('mongoose');

var schema = mongoose.Schema;

var eventBookingsSchema = new schema({

    eventId : {
        type: mongoose.Types.ObjectId,

        ref : 'Event'
    },

    customerId :{
        type: mongoose.Types.ObjectId,

        ref : 'Tourist'
    },

    status : {
        type : String
    }
   
});
module.exports = mongoose.model('EventBookings', eventBookingsSchema);
