var mongoose = require('mongoose');

var schema = mongoose.Schema;

var eventSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
 
});
module.exports = mongoose.model('Event', eventSchema);
