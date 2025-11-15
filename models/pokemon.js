
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
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
    },
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
    }
});

const Pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = {
    Pokemon
};