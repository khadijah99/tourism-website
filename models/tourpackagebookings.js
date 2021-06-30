var mongoose = require('mongoose');

var schema = mongoose.Schema;

var tourPackageBookingSchema = new schema({
    
    customer: {
        ref: 'Tourist'
    },

    restaurantBookings: [{
        type: mongoose.Types.ObjectId,
        ref: 'RestaurantBookings'

    }],

    hotelBookings: [{
        type: mongoose.Types.ObjectId,
        ref: 'HotelBookings'
    }],

    transportBookings: [{
        ref: 'TransportBookings'
    }],

    eventBookings: [{
        ref: 'EventBookings'
    }]
});
module.exports = mongoose.model('TourPackageBookings', tourPackageBooking);
