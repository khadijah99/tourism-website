var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var tourManagerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique : true
  },
  password : {
    type :String,
    required : true,
},
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TourManager", tourManagerSchema);
