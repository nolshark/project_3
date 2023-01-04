const { User, Character } = require('../models');

const characterController = {
    // get all characters
    getCharacters(req, res) {
        Character.find().then((chars) => res.status(200).json(chars))
            .catch((err) => res.status(500).json(err));
    },
    // get specific character
    getCharacter(req, res) {
        Character.findOne({ _id: req.param.characterId })
            .then((char) => {
                if (!char) {
                    return res.status(404).json({ message: 'No character with this id!' });
                }
                res.status(200).json(char);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    // create a new character
    createCharacter(req, res) {
        Character.create(req.body).then((char) => {
            res.status(200).json(char);
        })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    // update an existing character
    updateCharacter(req, res) {
        Character.findOneAndUpdate({ _id: req.params.characterId }, { $set: req.body }, { new: true }
        )
            .then((char) => {
                if (!char) {
                    return res.status(404).json({ message: 'No character with this id!' });
                }
                res.status(200).json(char);
            })
            .catch((err) => {

            });
    },
    // delete an existing character
    deleteCharacter(req, res) {
        Character.findOneAndDelete({ _id: req.params.characterId }, { new: true })
            .then((char) => {
                if (!char) {
                    return res.status(404).json({ message: 'No character with this id!' });
                }
                res.status(200).json(char);
            })
            .then((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    }
};

module.exports = characterController;