// Import express
const express = require('express');

// Call the model for which the routes are being created
const { Pokemon } = require('../models/pokemon');

//  Define the router to start creating/defining routes
const router = express.Router();




router.get('/', async (request, response) => {
    const poke = await Pokemon.find();
    response.json({
        message: "Successfully fetched the pokemons",
        data: poke
    });
});

// module.exports = {router};
module.exports = router;