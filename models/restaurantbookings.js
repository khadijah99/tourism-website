var mongoose = require('mongoose');

var schema = mongoose.Schema;

var restaurantBookingsSchema = new schema({
   
    Id: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },

    restaurant : {
        type: mongoose.Types.ObjectId,
        ref : 'Restaurant'
    },

    customer : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'

    },

    
});
module.exports = mongoose.model('RestaurantBookings', restaurantBookings);
