var mongoose = require('mongoose')

var Schema = mongoose.Schema
var restaurantManagerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String
  }
})

module.exports = mongoose.model('RestaurantManager', restaurantManagerSchema)
