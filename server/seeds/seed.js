const connection = require('../config/connection.js');
const { User, Character } = require('../models');
const { getRandomUser, getRandomPassword, getRandomPost, getRandomCharacter, getRandomType, getRandomBrand, getRandomImage, genRandomIndex } = require('./data.js');

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
        let password = getRandomPassword();

        users.push({
            username,
            email,
            password
        });
    }

    for (let i = 0; i < 2; i++) {
        let name = getRandomCharacter();
        let type = getRandomType();
        let brand = getRandomBrand();
        let description = getRandomPost(25);
        let imageurl = getRandomImage();
        let wins = Math.floor(Math.random() * 1000);
        let losses = Math.floor(Math.random() * 1000);

        characters.push({
            name,
            type,
            brand,
            description,
            imageurl,
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