const mongoose = require('mongoose')

const applySchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a user'],
        ref: 'User',
      },
      centre: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a centre'],
        ref: 'Centre',
      },
      date: {
        type: Date,
        required: [true, 'Please add a date'],
      }
    },
    {
      timestamps: true,
    }
  )

module.exports = mongoose.model('Apply', applySchema)