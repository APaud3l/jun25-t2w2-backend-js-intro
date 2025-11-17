
const mongoose = require('mongoose');

const localisationSchema = new mongoose.Schema({
    en: {
        type: String,
        required: true
    },
    fr: String,
    ja: String
}, {_id: false}); // _id: false means no extra id for this subdoc

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: localisationSchema, 
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