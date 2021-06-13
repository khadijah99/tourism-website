var mongoose = require('mongoose');

var schema = mongoose.Schema;

var restaurantReviewsSchema = new schema({
   
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

    review :{
        type : String
    },
    comment : {
        type : String
    }

    
});
module.exports = mongoose.model('RestaurantReviews', restaurantReviewsSchema );
