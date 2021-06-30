var mongoose = require('mongoose');

var schema = mongoose.Schema;

var restaurantBookingsSchema = new schema({
   
    date: {
        type: String,
        required: true
    },

    restaurantID : {
        type: mongoose.Types.ObjectId,
        ref : 'Restaurant'
    },

    customerID : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'
    },

    
       
});
module.exports = mongoose.model('RestaurantBookings', restaurantBookingsSchema);
