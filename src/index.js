console.log("Hello from backend!!");

// Import the package
const express = require('express');

// Import the Pokemon router
// const {router: pokemonRoutes}  = require('../routes/pokemonRoutes');
const pokemonRoutes  = require('../routes/pokemonRoutes');

// Define the instance of Express server
const app = express();

// Use the express.json() middleware to parse incoming JSON body data
app.use(express.json());

// Useful for HTML Forms (POST/PUT/PATCH)
app.use(express.urlencoded({ extended: true }));

app.use('/pokemonRoutes', pokemonRoutes);

app.get('/', (request, response) => {
    response.json({
        "message": "Hello World!"
    });
});

app.get('/about', (request, response) => {
    response.json({
        "message": "This is an about page."
    });
});

app.get('/hello/:name', (request, response) => {
    const userName = request.params.name;
    response.json({
        "message": `Hello from ${userName}`
    });
});

app.get('/profile', (request, response) => {
    // Let's say the profile info comes from the database
    const userProfile = {
        name: "Alice",
        age: 10,
        favouritePokemon: 'Pikachu'
    };

    // Send the response to the front-end
    response.json({
        "message": "Details about you",
        "data": userProfile
    });
});

// POST route
app.post('/add-user', (reqest, response) => {
    // Get the details from the front-end, request body
    const { name, age } = reqest.body;

    // Another way of unpacking the request body data
    // const name = request.body.name;
    // const age = request.body.age;

    // Simulate storing the new user to the DB
    response.status(201).json({
        "message": `Added ${name} user successfully!`
    });
});

// Export the app instace to server.js
module.exports = { app };
// module.exports = app ;