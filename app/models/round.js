const mongoose = require('mongoose')

const roundSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },

  phrase: {
    type: String,
    required: true
  },

  drawing: {
    type: String,
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Round', roundSchema)
