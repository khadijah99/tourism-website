var mongoose = require('mongoose');

var schema = mongoose.Schema;

var customPackageSchema = new schema({
    packageName: {
        type: String,
        required: true,
    },

    locationsToVisit: [{
        type: String,
        required: true,
    }],

    pickUpcity: {
        type: String,
        required: true
    },

    touristID : [{
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'

    }],

    restaurantBookingID : [{
        type: mongoose.Types.ObjectId,
        ref : 'RestaurantBookings'

    }],

    hotelBookingID : [{
        type : mongoose.Types.ObjectId,
        ref : 'HotelBookings'
    }],

    transportBookingID : [{
        type : mongoose.Types.ObjectId,
        ref : 'TransportBookings'
    }],

    
});
module.exports = mongoose.model('CustomPackage', customPackageSchema);
