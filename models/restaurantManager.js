var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

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
restaurantManagerSchema.plugin(uniqueValidator)
module.exports = mongoose.model('RestaurantManager', restaurantManagerSchema)
