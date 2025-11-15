
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: [String],
        required: true
    },
    level: {
        type: Number,
        default: 5,
        min: 1,
        max: 99
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = {
    Pokemon
};