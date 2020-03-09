const express = require('express');
const { viewFile, getUserDataPortion, getUserSelectionByDate, getUserById } = require('../controllers/user_controller')
const router = express.Router();

router.get('/', viewFile )
router.get('/users=:portionUsers&count=:countUsers', getUserDataPortion)
router.get('/dateBefore=:dateBefore&dateAfter=:dateAfter', getUserSelectionByDate)
router.get('/user=:userId', getUserById)

module.exports = router;