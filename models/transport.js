var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var transportSchema = new Schema({
  transportType: {
    type: String,
    required: true,
  },
  transportManager : {
    type : String,
    
},
  price: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transport", transportSchema);