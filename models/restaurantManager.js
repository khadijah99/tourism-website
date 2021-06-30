var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;
var restaurantManagerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
    ,
    password : {
      type: String,
    required: true,
    index: true,
    }
  },
  address: {
    type: String,
    required: true,
   

  },
});

restaurantManagerSchema.plugin(uniqueValidator);
const Foo = mongoose.model("RestaurantManager", restaurantManagerSchema);


module.exports = Foo ;
