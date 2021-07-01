var mongoose = require('mongoose');

var schema = mongoose.Schema;

var tourPackageRestaurantSchema = new schema({
   
    tour: {
        type: mongoose.Types.ObjectId,
        ref: 'Package'
    },

    hotel: {
        type: mongoose.Types.ObjectId,
        ref: 'Hotel'
    },

   


});
module.exports = mongoose.model('PackageRestaurant', tourPackageRestaurantSchema );
