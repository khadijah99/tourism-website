var mongoose = require('mongoose');

var schema = mongoose.Schema;

var restaurantReviewsSchema = new schema({
   
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

    rating :{
        type : String
    },
    comment : {
        type : String
    }
   
});
module.exports = mongoose.model('RestaurantReviews', restaurantReviewsSchema );
