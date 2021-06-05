var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var touristSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "Teacher",
  },
  students: {
    type: [
      {
        sid: {
          type: mongoose.Types.ObjectId,
          ref: "Student",
        },
      },
    ],
  },
});

module.exports = mongoose.model("Tourist", classSchema);
