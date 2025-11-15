// Import express
const express = require('express');

// Call the model for which the routes are being created
const { Pokemon } = require('../models/pokemon');

//  Define the router to start creating/defining routes
const router = express.Router();



// GET /pokemonRoutes/
router.get('/', async (request, response) => {
    const poke = await Pokemon.find();
    response.json({
        message: "Successfully fetched the pokemons",
        data: poke
    });
});

// GET /pokemonRoutes/id/:id
router.get('/id/:id', async (request, response) => {
    try {
        const poke = await Pokemon.findById(request.params.id);
        if (!poke) return response.status(404).json({
            message: "Pokemon not found!"
        });
        response.json({
            message: "Pokemon fetched successfully.",
            data: poke
        });
    } catch (err) {
        response.status(400).json({
            message: "Invalid ID format.",
            error: err
        });
    } 
});

// GET /pokemonRoutes/search
router.get('/search', async (request, response) => {
    console.log(request.query);

    const results = await Pokemon.find(request.query);
    response.json({
        message: "Found a match.",
        queryData: request.query,
        data: results
    });
});

// POST /pokemonRoutes
router.post('/', async (request, response) => {
    // Get the body data
    // const { name, type } = request.body;
    // Define a new Pokemon
    const newPokemon = await Pokemon.create(request.body);
    // Save it
    newPokemon.save();
    
    // Return acknowledgement
    response.status(201).json({
        message: "Pokemon created successfully!",
        data: newPokemon
    });
});

// module.exports = {router};
module.exports = router;