const { Schema, model } = require('mongoose');
const Character = require('./Character.js');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        upvotes: [Character],
        downvotes: [Character]
    },
    {

    }
);

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;