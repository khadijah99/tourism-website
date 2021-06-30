var mongoose = require('mongoose');

var schema = mongoose.Schema;

var hotelReviewsSchema = new schema({
   
    date: {
        type: String,
        required: true
    },

    hotelId : {
        type: mongoose.Types.ObjectId,
        ref : 'Hotel'
    },

    customer : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'

    },

    review :{
        type : String
    },
    comment : {
        type : String
    }

    
});
module.exports = mongoose.model('HotelReviews', hotelReviewsSchema  );
