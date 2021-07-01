var mongoose = require('mongoose');

var schema = mongoose.Schema;

var tableSchema = new schema({
   
    restaurant : {
        type: mongoose.Types.ObjectId,
        ref : 'Restaurant'
    },
    description : {
        type : String,
        required : true

    },
    restaurantManager: {
        type: mongoose.Types.ObjectId,
        ref : 'RestaurantManager'
    },
    Number: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true
    },
    seats : {
        type : Number,
        required : false
    },

    price : {
        type : Number,
        required : false
    }
});

module.exports = mongoose.model('Table', tableSchema);
