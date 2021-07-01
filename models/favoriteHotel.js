var mongoose = require('mongoose');

var schema = mongoose.Schema;

var favoriteHotelSchema = new schema({
  
    hotel : {
        type: mongoose.Types.ObjectId,
        ref : 'Hotel'
        
    },

    tourist : {
        type: mongoose.Types.ObjectId,
        ref : 'Tourist'
    }

 
});
module.exports = mongoose.model('FavoriteHotel', favoriteHotelSchema);
