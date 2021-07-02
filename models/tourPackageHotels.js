var mongoose = require('mongoose')

var schema = mongoose.Schema

var tourPackageHotelSchema = new schema({
  tour: {
    type: mongoose.Types.ObjectId,
    ref: 'Package'
  },

  hotel: {
    type: mongoose.Types.ObjectId,
    ref: 'Hotel'
  }
})
module.exports = mongoose.model('PackageHotel', tourPackageHotelSchema)
