const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {

    },
    {

    }
);

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;