var express = require('express');
var router = express.Router();

const userRoute = require('./user.route');
const attendanceRoute = require('./attendance.route')


router.use('/users', userRoute);
router.use('/history', attendanceRoute);


module.exports = router;