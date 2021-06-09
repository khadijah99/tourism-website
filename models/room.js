var mongoose = require('mongoose');

var schema = mongoose.Schema;

var roomSchema = new schema({
   
    description : {
        type : String,
        required : true

    },
    Number: {
        type: String,
        required: true,
    },
    type: {
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
