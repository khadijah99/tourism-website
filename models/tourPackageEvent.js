var mongoose = require('mongoose');

var schema = mongoose.Schema;

var tourPackageEventSchema = new schema({
   
    tour: {
        type: mongoose.Types.ObjectId,
        ref: 'Package'
    },

    hotel: {
        type: mongoose.Types.ObjectId,
        ref: 'Event'
    },

   


});
module.exports = mongoose.model('PackageEvent', tourPackageEventSchema );
