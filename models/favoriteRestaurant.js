var mongoose = require('mongoose');

var schema = mongoose.Schema;

var favoriteRestaurantSchema = new schema({
  
    hotel : {
        type: mongoose.Types.ObjectId,
        ref : 'Restaurant'
        
    },

    tourist : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'
    }

 
});
module.exports = mongoose.model('FavoriteRestaurant', favoriteRestaurantSchema);
