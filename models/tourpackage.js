var mongoose = require('mongoose');

var schema = mongoose.Schema;

var packageSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    touristManager : {
        type : mongoose.Types.ObjectId,
        ref : 'TouristManager'
    },

    locations: [{
        type: String,
        required: true,
    }],

    pickUpcity: {
        type: String,
        required: true
    },

    restaurantID : [{
        type: mongoose.Types.ObjectId,
        ref : 'Restaurant'

    }],

    hotelBookingID : [{
        type : mongoose.Types.ObjectId,
        ref : 'Hotel'
    }],

    transportID : [{
        type : mongoose.Types.ObjectId,
        ref : 'Transport'
    }],
        
});
module.exports = mongoose.model('Package', packageSchema);
