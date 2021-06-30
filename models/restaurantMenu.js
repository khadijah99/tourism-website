var mongoose = require('mongoose');

var schema = mongoose.Schema;

var restaurantMenuSchema = new schema({

   restaurant : {
        ref : 'Event'
    },

    menuItems : [
        {
            type : String
        }
    ]
        
    
   
});
module.exports = mongoose.model('RestaurantMenu', restaurantMenuSchema);
