const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUser);
router.get('/:id', userController.getUserById);
router.post('/create', userController.createUser);

module.exports = router;