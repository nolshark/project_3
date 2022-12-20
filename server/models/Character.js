const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {

    },
    {

    }
);

const Character = mongoose.model('Character', characterSchema);

const handleError = (err) => console.error(err);

module.exports = Character;