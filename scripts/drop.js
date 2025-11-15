const { connectDB, disconnectDB } = require("../utils/database");
const mongoose = require('mongoose');

async function drop(){
    await connectDB();

    await mongoose.connection.dropDatabase(); // Not recommended in prod env
    console.log("Database Dropped!");

    await disconnectDB();
}

drop();