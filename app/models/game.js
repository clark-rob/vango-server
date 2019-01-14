const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  number: {
    type: Number,
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
