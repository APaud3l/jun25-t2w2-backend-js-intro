const { Pokemon } = require("../models/pokemon");
const { connectDB, disconnectDB } = require("../utils/database");

// Array of Pokemon to store
const starterPack = [
    {name: 'Bulbasaur', type: 1234},
    {name: 'Charmander', type: 'fire'},
    {name: 'Squirtle', type: 'water'}
];

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
    // const insertedPokes = await Pokemon.insertMany(starterPack);
    
    // Ordered: false ensures that it attemps the insert operation on all instances and skips on error
    const insertedPokes = await Pokemon.insertMany(starterPack, {ordered: false});
    console.log("Bulk Inserted Pokemon:", insertedPokes);
    console.log("Saved: ", pika);

    // 4. Disconnect from the DB
    await disconnectDB();
}

run();