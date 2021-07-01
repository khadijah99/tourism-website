var mongoose = require('mongoose')
//var uniqueValidator = require('mongoose-unique-validator')

var Schema = mongoose.Schema
var eventManagerSchema = new Schema({
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

//eventManagerSchema.plugin(uniqueValidator)

module.exports = mongoose.model('EventManager', eventManagerSchema)
