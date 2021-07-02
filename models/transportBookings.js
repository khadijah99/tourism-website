var mongoose = require('mongoose')

var schema = mongoose.Schema

var transportBookingsSchema = new schema({
  date: {
    type: String,
    required: true
  },

  transportID: {
    type: mongoose.Types.ObjectId,
    ref: 'Restaurant'
  },

  customerID: {
    type: mongoose.Types.ObjectId,
    ref: 'Tourist'
  }
})
module.exports = mongoose.model('TransportBookings', transportBookingsSchema)
