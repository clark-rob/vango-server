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

  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Round', roundSchema)
