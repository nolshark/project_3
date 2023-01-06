const connection = require('../config/connection.js');
const { User, Character } = require('../models');
const { getRandomUser, getRandomPost, getRandomCharacter, getRandomType, getRandomBrand, genRandomIndex } = require('./data.js');

console.time('seeding');

connection.once('open', async () => {
    console.log('connected');
    await Character.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const characters = [];

    for (let i = 0; i < 1; i++) {
        let username = getRandomUser();
        let email = `${username}@Gmail.com`;

        users.push({
            username,
            email
        });
    }

    for (let i = 0; i < 1; i++) {
        let name = getRandomCharacter();
        let type = getRandomType();
        let brand = getRandomBrand();
        let description = getRandomPost(25);
        let wins = Math.floor(Math.random() * 1000);
        let losses = Math.floor(Math.random() * 1000);

        characters.push({
            name,
            type,
            brand,
            description,
            wins,
            losses
        });
    }

    await User.collection.insertMany(users);
    await Character.collection.insertMany(characters);

    console.table(users);
    console.table(characters);
    console.timeEnd('Seeding complete! 🌱');
    process.exit(0);
});