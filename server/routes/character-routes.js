const router = require('express').Router();
const controller = require('../controllers/character-controller.js');

router.route('/').get(controller.getCharacters).post(controller.createCharacter);

router.route('/:userId').get(controller.getCharacter).put(controller.updateCharacter).delete(controller.deleteCharacter);

module.exports = router;