var mongoose = require('mongoose');

var schema = mongoose.Schema;

var packageSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    locations: [{
        type: String,
        required: true,
    }],
    pickUpcity: {
        type: String,
        required: true
    },

    restaurantBooking : [{
        type: mongoose.Types.ObjectId,
        ref : 'RestaurantBookings'

    }],

    bookings : [{
        type : mongoose.Types.ObjectId,
        ref : 'HotelBookings'
    }],

    
});
module.exports = mongoose.model('Package', packageSchema);
