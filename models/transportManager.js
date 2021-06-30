var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var transportManagerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TransportManager", transportManagerSchema);
