const connection = require('../config/connection.js');
const { User, Character } = require('../models');
const { getRandomUser, getRandomPost, getRandomCharacter, genRandomIndex } = require('./data.js');

console.time('seeding');

connection.once('open', async () => {
    console.log('connected');
    //await Reaction.deleteMany({});
    await Character.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const characters = [];

    const makeCharacter = (text) => {
        characters.push({
            text,
            
        });
    }

    for (let i = 0; i < 5; i++) {
        let username = getRandomUser();
        let email = `${usersName}@Gmail.com`;

        users.push({
            username: username,
            email: email
    });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.timeEnd('seeding');
    process.exit(0);
});