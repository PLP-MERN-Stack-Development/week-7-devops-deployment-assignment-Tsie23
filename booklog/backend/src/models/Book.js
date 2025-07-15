const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  rating: { type: Number, min: 1, max: 5 },
  status: { type: String, enum: ['Started', 'In Progress', 'Complete'], default: 'Started' },
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', bookSchema);