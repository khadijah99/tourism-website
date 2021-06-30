var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelReviewsSchema = new schema({
   
    date: {
        type: String,
        required: true
    },

    hotelID : {
        type: mongoose.Types.ObjectId,
        ref : 'Hotel'
    },

    customerID : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'

    },

    rating :{
        type : String
    },
    comment : {
        type : String
    }
    
});
module.exports = mongoose.model('HotelReviews', hotelReviewsSchema  );
