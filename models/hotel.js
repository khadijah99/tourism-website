var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    hotelManager : {
        type: mongoose.Types.ObjectId,
        ref : 'HotelManager'
        
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },

    features :  [
        {
            type: String,
            required: true
        }
    ],   

    images : [
        {
            type: String,
            required: true
        }
    ],   
});
module.exports = mongoose.model('Hotel', hotelSchema);
