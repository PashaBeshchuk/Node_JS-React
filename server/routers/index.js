const express = require('express');
const { viewFile, getUserDataPortion, getStatisticsByDate, getStatisticsByName } = require('../controllers/user_controller')
const router = express.Router();

router.get('/', viewFile );
router.get('/users=:portionUsers&count=:countUsers', getUserDataPortion);
router.get('/dateBefore=:dateBefore&dateAfter=:dateAfter&userId=:userId', getStatisticsByDate);
router.get('/name=:name&surname=:surname', getStatisticsByName)


module.exports = router;