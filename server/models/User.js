const { Schema, model } = require('mongoose');

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
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        upvotes: {
            type: Array
        },
        downvotes: {
            type: Array
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual('upvoteCount').get(function () {
    upCount = this.upvotes.length;
    return upCount;
});

userSchema.virtual('downvoteCount').get(function () {
    downCount = this.downvotes.length;
    return downCount;
});

userSchema.virtual('totalVotes').get(function () {
    totalCount = this.downvotes.length + this.upvotes.length;
    return totalCount;
});

const User = model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;