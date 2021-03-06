var mongoose = require('mongoose');

var schema = mongoose.Schema;

var roomSchema = new schema({
   
    hotel : {
        type: mongoose.Types.ObjectId,
        ref : 'Hotel'
    },
    description : {
        type : String,
        required : true

    },
    hotelManager: {
        type: mongoose.Types.ObjectId,
        ref : 'HotelManager'
    },
    Number: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    beds : {
        type : Number,
        required : false
    },
    images : [{
        type : String,
        require : false
    }],
    price : {
        type : Number,
        required : false
    }
});

module.exports = mongoose.model('Room', roomSchema);
