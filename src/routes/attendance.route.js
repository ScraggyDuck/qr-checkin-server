const express = require('express');
const router = express.Router();

const checkinHistoryController = require('../controllers/attendance.controller');

router.post('/create', checkinHistoryController.create);
router.get('/', checkinHistoryController.getAll);
router.get('/:id', checkinHistoryController.getById);

module.exports = router;