const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/pokedex');
        console.log("Database connected!!");
    } catch (error) {
        console.error("Error connecting....: ", JSON.stringify(error));
    }
}

// Promise way of connecting
// mongoose.connect('mongodb://127.0.0.1:27017/pokedex')
// .then(()=>{console.log("Database connected.");})
// .catch(err => console.error("Erorr connecting.... ", err));

async function disconnectDB() {
    await mongoose.connection.close();
    console.log("Database disconnected!!");
}

connectDB();
disconnectDB();