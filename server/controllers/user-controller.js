const { User, Character } = require('../models');

const userController = {
    // get all users
    getUsers(req, res) {
        User.find().then((users) => res.status(200).json(users))
            .catch((err) => res.status(500).json(err));
    },
    // get specific user
    getSingleUser(req, res) {
        User.findOne({ _id: req.param.userId })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                res.status(200).json(user);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body).then((user) => {
            res.status(200).json(user);
        })
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    // update an existing user
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { new: true }
        )
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                res.status(200).json(user);
            })
            .catch((err) => {

            });
    },
    // delete an existing user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId }, { new: true })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                res.status(200).json(user);
            })
            .then((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    }
};

module.exports = userController;