const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    dob: {
      type: Date,
      required: [true, 'Please add a dob'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    aadharNumber: {
      type: String,
      required: [true, 'Please add a aadharNumber'],
      unique:true,
    },
    photo: {
      type: String,
      required: [true, 'Please add a photo'],
    },
    mobileNumber: {
      type: String,
      required: [true, 'Please add a mobileNumber'],
      unique:true,
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
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)