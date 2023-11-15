const { Router } = require('express');
const router = Router();
const getTeams = require('../controllers/getTeams');

router.get('/teams',getTeams);

module.exports = router;