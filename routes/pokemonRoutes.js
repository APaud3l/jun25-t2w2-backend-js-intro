// Import express
const express = require('express');

// Call the model for which the routes are being created
const { Pokemon } = require('../models/pokemon');
const { Trainer } = require('../models/trainer');

//  Define the router to start creating/defining routes
const router = express.Router();



// GET /pokemonRoutes/
router.get('/', async (request, response) => {
    // Find all pokemons
    // const poke = await Pokemon.find();

    // Find all pokemons and include trainer details
    const poke = await Pokemon.find().populate('trainer');
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

// PATCH /pokemonRoutes/id/:id
router.patch('/id/:id', async (request, response) => {
    // Find by ID and update
    try{
        const poke = await Pokemon.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true } // If you want to see the updated value from the start, in return
        );

        // If doesn't exist
        if (!poke) return response.status(404).json({error: "Pokemon not found!"});
            //  return acknowledgement
        
        // Return updated values
        response.json({
            message: "Pokemon data updated successfully.",
            updatedData: poke
        });
    } catch (error) {
        response.status(400).json({
            message: "There was an error.",
            error: error
        });
    }
});

// DELETE /pokemonRoutes/id/:id
router.delete('/id/:id', async (request, response) => {
    // Find by ID and remove
    const deletedPoke = await Pokemon.findByIdAndDelete(request.params.id);
    response.json({
        message: "Pokemon deleted succesfully.",
        deletedData: deletedPoke 
    });
});

// module.exports = {router};
module.exports = router;