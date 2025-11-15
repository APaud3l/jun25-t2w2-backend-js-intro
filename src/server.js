const { connectDB } = require('../utils/database');
const { app } = require('./index');
// const app  = require('./src/index.js');
require('dotenv').config();

// Define the port number
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Example EXpress server started on port: ", PORT);
    });
})
// Configure the server to listen to the specified port
