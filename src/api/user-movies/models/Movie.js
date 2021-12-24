const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: String,
    movie_id: String,
    visualized: Date
});

module.exports = model('Movie', movieSchema);