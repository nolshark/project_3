const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 35
        },
        type: {
            type: String,
            required: true,
            maxlength: 35
        },
        brand: {
            type: String,
            required: false,
            maxlength: 35
        },
        description: {
            type: String,
            required: false,
            maxlength: 120
        },
        wins: {
            type: Number,
            required: true,
            default: 0
        },
        losses: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

characterSchema.virtual('ratio').get(function () {
    wlRatio = this.wins / this.losses;
    return wlRatio;
});

characterSchema.virtual('votes').get(function () {
    total = this.wins + this.losses;
    return total;
});

const Character = mongoose.model('Character', characterSchema);

const handleError = (err) => console.error(err);

module.exports = Character;