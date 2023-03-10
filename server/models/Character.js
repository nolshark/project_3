const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        characterId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
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
        imageurl: {
            type: String,
            required: false
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
        },
        _id: false
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

const Character = model('Character', characterSchema);

const handleError = (err) => console.error(err);

module.exports = Character;