var mongoose = require('mongoose');

var schema = mongoose.Schema;

var restaurantSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    

    bookings : [{
        type : mongoose.Types.ObjectId,
        ref : 'RestaurantBookings'
    }],

    
});
module.exports = mongoose.model('Restaurant', restaurantSchema);
