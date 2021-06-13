var mongoose = require('mongoose');

var schema = mongoose.Schema;

var packageSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    locations: [{
        type: String,
        required: true,
    }],
    pickUpcity: {
        type: String,
        required: true
    },

    restaurant : [{
        type: mongoose.Types.ObjectId,
        ref : 'Restaurant'

    }],

    hotel : [{
        type : mongoose.Types.ObjectId,
        ref : 'Hotel'
    }],

    price :{
        type : Number
    }

    
});
module.exports = mongoose.model('Package', packageSchema);
