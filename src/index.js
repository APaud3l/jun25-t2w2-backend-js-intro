console.log("Hello from backends!!");

// Import the package
const express = require('express');

// Define the instance of Express server
const app = express();

// Define the port number
const port = 3000;

// Configure the server to listen to the specified port
app.listen(port, () => {
    console.log("Example EXpress server started on port: ", port);
});