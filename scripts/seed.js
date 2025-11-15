const { Pokemon } = require("../models/pokemon");
const { Trainer } = require("../models/trainer");
const { connectDB, disconnectDB } = require("../utils/database");

// Array of Pokemon to store
const starterPack = [
    {name: 'Bulbasaur', type: 1234},
    {name: 'Charmander', type: 'fire'},
    {name: 'Squirtle', type: 'water'},
];


async function run(){
    // 1. Connect to the DB
    await connectDB();

    const ash = await Trainer.create({
        name: "Ash Ketchum"
    });

    const pika = await Pokemon.create({
        name: 'Pikachu',
        type: 'electric',
        level: 10,
        trainer: ash._id
    });

    // const insertedPokes = await Pokemon.insertMany(starterPack);
    // Ordered: false ensures that it attemps the insert operation on all instances and skips on error
    const insertedPokes = await Pokemon.insertMany(starterPack, {ordered: false});
    console.log("Bulk Inserted Pokemon:", insertedPokes);

    // Add pikachu with Ash
    console.log("Pokemon added with trainer: ", pika);
    // 4. Disconnect from the DB
    await disconnectDB();
    console.log("Seeding completed and DB disconnected.");
}

run();