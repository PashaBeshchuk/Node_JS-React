const express = require('express');
const { viewFile, getUserDataPortion, getUsersStatisticsPotrion, getStatisticsByDate, getUserById } = require('../controllers/user_controller')
const router = express.Router();

router.get('/', viewFile )
router.get('/users=:portionUsers&count=:countUsers', getUserDataPortion)
router.get('/dateBefore=:dateBefore&dateAfter=:dateAfter&userId=:userId', getStatisticsByDate)

module.exports = router;