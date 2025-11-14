console.log("Hello from backends!!");

// Import the package
const express = require('express');

// Define the instance of Express server
const app = express();

// Define the port number
const port = 3000;

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



// Configure the server to listen to the specified port
app.listen(port, () => {
    console.log("Example EXpress server started on port: ", port);
});