const router = require('express').Router();
const controller = require('../controllers/user-controller.js');

router.route('/').get(controller.getUsers).post(controller.createUser);

router.route('/:userId').get(controller.getUser).put(controller.updateUser).delete(controller.deleteUser);

//router.route('/:userId/characters/:characterId').post().delete()

module.exports = router;