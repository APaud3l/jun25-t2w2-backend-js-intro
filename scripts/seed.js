const { Pokemon } = require("../models/pokemon");
const { connectDB, disconnectDB } = require("../utils/database");

async function run(){
    // 1. Connect to the DB
    await connectDB();

    // 2. Create a new value (Pokemon)
    const pika = new Pokemon({
        name: 'Pikachu',
        type: 'Electric',
        level: 7
    });

    // 3. Store it in the database
    await pika.save();
    console.log("Saved: ", pika);

    // 4. Disconnect from the DB
    await disconnectDB();
}

run();