const { Schema, model } = require('mongoose');

const Movies = require('./Movie');

const userSchema = new Schema({
  name: String,
  device: Number,
  ip: String,
  user_id: String,
  movies: [Movies],
});

module.exports = model('User', userSchema);
