var mongoose = require('mongoose');

var schema = mongoose.Schema;

var restaurantBookingsSchema = new schema({

    tableId :{
        type : mongoose.Types.ObjectId,
        ref : 'Table'
    },
    date: {
        type: String,
        required: true
    },
    customerId : {
        type : mongoose.Types.ObjectId,
        ref : 'Tourist'

    },
     restaurantId : {
        type : mongoose.Types.ObjectId,
        ref : 'Restaurant'
     },

     restaurantManager :{
        type : mongoose.Types.ObjectId,
        ref : 'RestaurantManager'
     }
   
});
module.exports = mongoose.model('RestaurantBookings', restaurantBookingsSchema);
