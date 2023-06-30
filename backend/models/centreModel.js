const mongoose = require('mongoose')

const centreSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    state: {
      type: String,
      required: [true, 'Please add a state'],
    },
    district: {
      type: String,
      required: [true, 'Please add a district'],
    },
    cityName: {
      type: String,
      required: [true, 'Please add a cityName'],
    },
    pincode: {
      type: String,
      required: [true, 'Please add a pincode'],
    },  
    doorNumber: {
      type: String,
      required: [true, 'Please add a doorNumber'],
    },
    opening: {
        type: String,
        required: [true, 'Please add opening hour'],
    },
    closing: {
        type: String,
        required: [true, 'Please add closing hour'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Centre', centreSchema)