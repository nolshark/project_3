const router = require('express').Router();
const userRoutes = require('./user-controller');
const characterRoutes = require('./character-controller');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);

module.exports = router;